import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { isContactApiConfigured } from '@/lib/contactEnv';
import { CONTACT_INQUIRY_TOPICS } from '@/lib/site';

const TOPIC_IDS: ReadonlySet<string> = new Set(CONTACT_INQUIRY_TOPICS.map((t) => t.id));
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 10_000;
const NAME_MAX = 200;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  topic?: unknown;
  name?: unknown;
  replyEmail?: unknown;
  message?: unknown;
  company?: unknown;
};

function topicLabel(id: string): string {
  return CONTACT_INQUIRY_TOPICS.find((t) => t.id === id)?.label ?? id;
}

export async function POST(request: Request) {
  if (!isContactApiConfigured()) {
    return NextResponse.json({ ok: false as const, code: 'NOT_CONFIGURED' as const }, { status: 503 });
  }

  const inbox = process.env.CONTACT_INBOX_EMAIL!.trim();
  const from = process.env.CONTACT_FROM_EMAIL!.trim();
  const key = process.env.RESEND_API_KEY!.trim();

  let parsed: Body;
  try {
    parsed = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false as const, code: 'BAD_JSON' as const }, { status: 400 });
  }

  if (typeof parsed.company === 'string' && parsed.company.trim() !== '') {
    return NextResponse.json({ ok: false as const, code: 'REJECTED' as const }, { status: 400 });
  }

  const topic = typeof parsed.topic === 'string' ? parsed.topic.trim() : '';
  if (!TOPIC_IDS.has(topic)) {
    return NextResponse.json({ ok: false as const, code: 'INVALID_TOPIC' as const }, { status: 400 });
  }

  const replyEmail = typeof parsed.replyEmail === 'string' ? parsed.replyEmail.trim() : '';
  if (!replyEmail || !EMAIL_RE.test(replyEmail)) {
    return NextResponse.json({ ok: false as const, code: 'INVALID_EMAIL' as const }, { status: 400 });
  }

  const message = typeof parsed.message === 'string' ? parsed.message.trim() : '';
  if (message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
    return NextResponse.json({ ok: false as const, code: 'INVALID_MESSAGE' as const }, { status: 400 });
  }

  let name = typeof parsed.name === 'string' ? parsed.name.trim() : '';
  if (name.length > NAME_MAX) {
    name = name.slice(0, NAME_MAX);
  }

  const label = topicLabel(topic);
  const subject = `CarePair — ${label}`;

  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const textLines = [
    message,
    '',
    '---',
    `Topic: ${label} (${topic})`,
    name ? `Name: ${name}` : null,
    `Reply-to: ${replyEmail}`,
    forwarded ? `Client IP (proxy): ${forwarded}` : null,
  ];
  const text = textLines.filter(Boolean).join('\n');

  const resend = new Resend(key);
  const { data, error } = await resend.emails.send({
    from,
    to: inbox,
    replyTo: replyEmail,
    subject,
    text,
  });

  if (error) {
    console.error('[contact]', error.message);
    return NextResponse.json(
      { ok: false as const, code: 'SEND_FAILED' as const },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true as const, id: data?.id ?? null });
}

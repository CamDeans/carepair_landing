/**
 * Server-only contact delivery flags (read in Route Handlers and Server Components).
 * Do not import from Client Components — values are not exposed to the browser.
 */
export function isContactApiConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() &&
      process.env.CONTACT_INBOX_EMAIL?.trim() &&
      process.env.CONTACT_FROM_EMAIL?.trim(),
  );
}

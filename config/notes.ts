/**
 * notes.ts
 * ─────────────────────────────────────────────────────────────
 * Short, informal journal-style notes rendered in the Notes
 * window. Paragraphs are separated by blank lines (\n\n) — single
 * newlines are preserved as line breaks.
 *
 * Sort order is as written — newest first is the convention.
 * ─────────────────────────────────────────────────────────────
 */

export interface NoteItem {
  /** Display date, e.g. "Mar 2026". */
  date: string
  /** Body text. Separate paragraphs with a blank line. */
  body: string
}

export const notes: NoteItem[] = [
  {
    date: "Jun 2026",
    body: `Started the Build Club accelerator at Midnight Foundation.

Building AnonPay — a privacy-first payment solution on Solana. First time building on a blockchain. Lots to learn, but the pace is exhilarating.`,
  },
]

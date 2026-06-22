/**
 * links.ts
 * ─────────────────────────────────────────────────────────────
 * Curated external reading list shown in the LinksWidget on the
 * desktop. Each entry is an outbound link with a short tag used
 * for display only.
 * ─────────────────────────────────────────────────────────────
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  /** Freeform short label displayed under the author (e.g. "rust"). */
  tag: string
}

export const links: LinkItem[] = [
  { title: "The Zen of Erlang",      author: "Fred Hebert",     url: "https://ferd.ca/the-zen-of-erlang.html",                  tag: "systems" },
  { title: "Fearless Concurrency",   author: "The Rust Book",   url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html", tag: "rust" },
  { title: "without.boats",          author: "withoutboats",    url: "https://without.boats",                                   tag: "rust" },
  { title: "Meditations",            author: "Marcus Aurelius", url: "https://www.gutenberg.org/ebooks/2680",                   tag: "philosophy" },
  { title: "Solana Program Library", author: "Solana Labs",     url: "https://spl.solana.com",                                  tag: "solana" },
  { title: "a career guide for people in their early twenties", author: "Rich Zou",                  url: "https://x.com/richzou/status/2066647074935079413",             tag: "career" },
  { title: "18 lessons for 18 years of life",                    author: "richard",                   url: "https://x.com/richardzphotoz/status/2068368840891994142",  tag: "wisdom" },
]

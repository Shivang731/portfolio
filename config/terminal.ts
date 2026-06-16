/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
}

export const terminal: TerminalConfig = {
  about: [
    "Name:   Shivang Dubey",
    "Age:    19",
    "Base:   Bengaluru, India",
    "Role:   Developer & AI Enthusiast",
    "",
    "Learning in public, building at the intersection of AI and the web.",
    "Currently exploring what's possible with code and shipping projects.",
  ],
  skills: [
    "Languages:  TypeScript · Go · Python",
    "Frontend:   React · Next.js · TailwindCSS",
    "Backend:    Node.js · PostgreSQL · Redis",
    "DevOps:     Docker · AWS · Vercel",
  ],
  experience: [
    "Acme Corp    Jan 2024 – Present   Senior Software Engineer",
    "Globex       2022 – 2023          Software Engineer",
    "Initech      Summer 2021          Intern",
  ],
  contact: [
    "email:    shivangkumardubey@gmail.com",
    "github:   github.com/Shivang731",
    "twitter:  x.com/shivang_twt",
  ],
  resume: [
    "Opening résumé…",
    "→ (coming soon)",
  ],
  whoami: [
    "Shivang Dubey",
    "Developer & AI Enthusiast · Bengaluru",
    "",
    "Learning in public. Building at the",
    "intersection of AI and the web.",
  ],
  githubJson: `{"login":"Shivang731","name":"Shivang Dubey","bio":"Developer & AI Enthusiast","public_repos":0}`,
}

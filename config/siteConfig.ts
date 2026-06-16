/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills, blogs) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  /** Medium, Hashnode, personal blog, etc. */
  blog: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Shivang ",
    lastName: "Dubey",
    fullName: "Shivang Dubey",
    initials: "Shivang",
    role: "Developer & AI Enthusiast",
    shortRole: "Developer & AI Enthusiast",
    tagline:
      "Learning in public. Building at the intersection of AI and the web.",
    location: "Bengaluru",
    age: 19,
    avatar: "/avatar.jpg",
    username: "shivang",
  },

  social: {
    github: "https://github.com/Shivang731",
    twitter: "https://x.com/shivang_twt",
    blog: "https://medium.com/@shivangdubey731",
    githubUsername: "Shivang731",
    twitterHandle: "shivang_twt",
  },

  contact: {
    email: "shivangkumardubey@gmail.com",
    calendar: "",
    heading: "Let's Connect",
    subheading: "Open to collaborations, freelance work, or just a conversation.",
    rows: [
      { icon: "mail",     href: "mailto:shivangkumardubey@gmail.com",    label: "Email",           mono: "shivangkumardubey@gmail.com" },
      { icon: "twitter",  href: "https://x.com/shivang_twt",             label: "X / Twitter",     mono: "@shivang_twt" },
      { icon: "github",   href: "https://github.com/Shivang731",         label: "GitHub",          mono: "shivang731" },
    ],
  },

  seo: {
    title: "Shivang Dubey — Portfolio",
    description: "Personal portfolio and writing by Shivang Dubey.",
  },

  resumeLink: "https://drive.google.com/file/d/1MXoSqsJOZ9IM1awCzyEJOB0bkw_abkhZ/view?usp=sharing",

  features: {
    konami: false,
  },
}

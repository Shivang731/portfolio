/**
 * experience.ts
 * ─────────────────────────────────────────────────────────────
 *  - `experience`        → full cards shown in the Experience window
 *                          (click one to open a modal with achievements + links).
 *  - `resumeExperience`  → condensed bullets shown on the Résumé window.
 *  - `education`         → single degree entry for the Résumé.
 *  - `teaching`          → free-form bullets for the Teaching section.
 *
 * The two experience lists are separate on purpose: the main site shows
 * every role, while the résumé groups multiple roles into summaries.
 * ─────────────────────────────────────────────────────────────
 */

export interface ExperienceItem {
  company: string
  role: string
  /** e.g. "Jun 2024 – Present" or "2023". */
  period: string
  /** One-line summary shown on the card. */
  description: string
  tech: string[]
  /** Bullet points shown in the modal. */
  achievements: string[]
  /** Optional related links shown at the bottom of the modal. */
  links?: { type: string; url: string; label: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Build Club",
    role: "Participant — Startup Accelerator",
    period: "May 2026 – Jul 2026",
    description: "Selected for a startup accelerator program by Midnight Foundation.",
    tech: ["TypeScript", "Next.js", "Solana"],
    achievements: [
      "Building AnonPay — a privacy-focused payment solution.",
      "Participating in structured mentorship and product development sprints.",
      "Iterating on an MVP with real user feedback and rapid prototyping.",
    ],
    links: [
      { type: "website", url: "https://anon-pay-frontend.vercel.app/", label: "AnonPay" },
    ],
  },
]

// ── Résumé-only condensed version ────────────────────────────────────

export interface ResumeExperienceItem {
  company: string
  role: string
  period: string
  /** Optional list of sub-companies (e.g. for a contractor umbrella). */
  subRoles?: string[]
  bullets: string[]
}

export const resumeExperience: ResumeExperienceItem[] = [
  {
    company: "Build Club",
    role: "Participant — Startup Accelerator",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Selected for a startup accelerator by Midnight Foundation.",
      "Building AnonPay, a privacy-first payment solution, from concept to MVP.",
      "Working with mentors on product strategy, architecture, and user growth.",
    ],
  },
]

// ── Education + Teaching ─────────────────────────────────────────────

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export const education: EducationItem = {
  school: "BITS Pilani",
  degree: "B.E. — Undergraduate",
  period: "2024 – 2028",
}

export const teaching: string[] = []

/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects window.
 * Split into two lists: `personal` (side projects) and `client`
 * (paid / contracted work). Both use the same ProjectItem shape.
 *
 *  - `tech`   → array of tags rendered beneath the description.
 *  - `stars`  → optional — shown next to the title if present.
 *  - `status` → optional — rendered as a pill (e.g. "Paused").
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "AnonPay",
      description: "A privacy-focused payment solution built on Solana. Part of the Build Club accelerator by Midnight Foundation.",
      tech: ["TypeScript", "Next.js", "Solana", "TailwindCSS"],
      stars: 0,
      link: "https://github.com/Shivang731/AnonPay",
    },
  ],

  client: [],
}

/** Résumé-only condensed project highlights (short names + long descriptions). */
export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "AnonPay",
    desc: "Privacy-first payment solution on Solana. Built from scratch during the Build Club accelerator at Midnight Foundation, focusing on user privacy and seamless crypto payments.",
  },
]

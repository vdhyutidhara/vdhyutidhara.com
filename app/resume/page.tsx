import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience of Vinay Kumar Gupta, Inclusive Software Engineer from Bangalore, India.",
  alternates: { canonical: "https://vdhyutidhara.com/resume" },
  openGraph: {
    title: "Experience — Vinay Kumar Gupta",
    description:
      "Experience of Vinay Kumar Gupta, Inclusive Software Engineer from Bangalore, India.",
    url: "https://vdhyutidhara.com/resume",
    type: "profile",
  },
};

const experience = [
  {
    role: "Associate Developer",
    company: "SAP Labs India",
    period: "Apr 2024 — Present",
    location: "Bangalore",
    bullets: [
      "Developed accessible, secure, and scalable React/TypeScript features while reducing technical debt through strategic refactoring and TDD practices.",
      "Refactored codebase to achieve full WCAG 2.1 AA compliance, significantly improving product accessibility for all users.",
      "Strengthened front-end security by enforcing strict input validation, mitigating CSRF vulnerabilities, and ensuring FIPS compliance.",
      "Migrated build architecture from Webpack to Vite, reducing build times by ~89% (from 3 minutes to 20 seconds).",
      "Modernised the unit testing suite by transitioning from Jest to Vitest, streamlining developer workflows and significantly reducing test execution time.",
      "Standardised CSS architecture to strictly adhere to SAP Fiori Design System guidelines, improving UI consistency and styling maintainability.",
    ],
  },
  {
    role: "Solution Engineer",
    company: "WebEngage",
    period: "Oct 2021 — Mar 2024",
    location: "Gurgaon",
    bullets: [
      "Designed custom integration solutions using REST APIs and JavaScript to solve user segmentation challenges for enterprise clients.",
      "Configured 100+ journeys using REST API & Nunjucks to personalise and target specific user segments — Birthday & Anniversary, FOMO, Replenishment, and more.",
      "Developed 200+ responsive web interfaces from high-fidelity PSD designs using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility.",
    ],
  },
];

const certificates = [
  {
    title: "Cloud Native Developer Bootcamp",
    issuer: "SAP",
    bullets: [
      "Implemented cloud-native capabilities — microservices, resilience patterns, and zero-downtime deployments — through hands-on, unguided challenges.",
      "Applied software craftsmanship principles to build scalable applications, leveraging TDD, clean code practices, and continuous delivery.",
    ],
  },
  {
    title: "Business AI",
    issuer: "SAP Learning Fest 3.0",
    bullets: [
      "Hands-on training in Prompt Engineering, Large Language Models (LLMs), AI Agents, Agent-Assisted Coding, Claude Code, and Model Context Protocol (MCP).",
    ],
  },
];

const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "JavaScript, TypeScript, CSS, HTML, Java" },
  { label: "Frameworks & Libraries", items: "React, UI5 React, Spring Boot" },
  { label: "Testing", items: "Jest, Vitest, React Testing Library, Selenium, JUnit, TDD" },
  { label: "AI", items: "Agent-Assisted Coding, Claude Code (Hooks & Skills), MCP" },
  {
    label: "Tools & Others",
    items: "Vite, Webpack, REST API, Git, GitHub, Agile, Scrum, Docker, Kubernetes, Maven",
  },
];

const education = [
  {
    degree: "B.Tech — Electrical and Electronics Engineering",
    institution: "Dr. APJ Abdul Kalam Technical University",
    year: "2018",
  },
];

export default function ResumePage() {
  return (
    <div id="main-content" className="w-[90vw] max-w-[720px] mx-auto py-16 px-4">
      <Link
        href="/"
        className="font-mono text-sm text-ink-faint border-b border-border pb-px hover:opacity-50 transition-opacity"
      >
        ← Back
      </Link>

      {/* Header */}
      <header className="mt-12 mb-12">
        <h1 className="font-heading text-[3rem] font-light leading-tight max-sm:text-[2rem]">
          Vinay Kumar Gupta
        </h1>
        <p className="font-mono text-sm text-ink-muted mt-2">
          Inclusive Software Engineer · Bangalore, India
        </p>
      </header>

      {/* Experience */}
      <section aria-labelledby="experience-heading" className="mb-16">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-mono text-xs text-ink-faint uppercase tracking-[0.15em]">Experience</span>
        </div>
        <hr className="thin-rule mb-10" />
        <h2 id="experience-heading" className="font-heading text-[2rem] font-light mb-10 max-sm:text-[1.625rem]">
          Where I have worked
        </h2>
        <div className="space-y-12">
          {experience.map(({ role, company, period, location, bullets }) => (
            <div key={`${role}-${company}`}>
              <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-0.5 max-sm:grid-cols-1 mb-4">
                <p className="font-heading text-[1.25rem] font-light text-ink">{role}</p>
                <p className="font-mono text-xs text-ink-faint text-right max-sm:text-left">
                  {period}
                </p>
                <p className="font-mono text-sm text-ink-muted">
                  {company}
                  <span className="text-ink-faint mx-2" aria-hidden="true">·</span>
                  {location}
                </p>
              </div>
              <ul className="space-y-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-mono text-sm text-ink-muted pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section aria-labelledby="certificates-heading" className="mb-16">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-mono text-xs text-ink-faint uppercase tracking-[0.15em]">Certificates</span>
        </div>
        <hr className="thin-rule mb-10" />
        <h2 id="certificates-heading" className="font-heading text-[2rem] font-light mb-10 max-sm:text-[1.625rem]">
          Continuing education
        </h2>
        <div className="space-y-10">
          {certificates.map(({ title, issuer, bullets }) => (
            <div key={title}>
              <div className="mb-3">
                <p className="font-heading text-[1.25rem] font-light text-ink">{title}</p>
                <p className="font-mono text-sm text-ink-muted">{issuer}</p>
              </div>
              <ul className="space-y-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-mono text-sm text-ink-muted pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mb-16">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-mono text-xs text-ink-faint uppercase tracking-[0.15em]">Skills</span>
        </div>
        <hr className="thin-rule mb-10" />
        <h2 id="skills-heading" className="font-heading text-[2rem] font-light mb-10 max-sm:text-[1.625rem]">
          Tools of the trade
        </h2>
        <div className="space-y-3">
          {skills.map(({ label, items }) => (
            <div key={label} className="grid grid-cols-[160px_1fr] gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-0.5 max-sm:mb-3">
              <p className="font-mono text-xs text-ink-faint uppercase tracking-[0.1em] pt-px">{label}</p>
              <p className="font-mono text-sm text-ink-muted">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education-heading" className="mb-16">
        <div className="flex justify-between items-baseline mb-3">
          <span className="font-mono text-xs text-ink-faint uppercase tracking-[0.15em]">Education</span>
        </div>
        <hr className="thin-rule mb-10" />
        <h2 id="education-heading" className="font-heading text-[2rem] font-light mb-10 max-sm:text-[1.625rem]">
          Background
        </h2>
        <div className="space-y-6">
          {education.map(({ degree, institution, year }) => (
            <div
              key={degree}
              className="grid grid-cols-[1fr_auto] gap-x-8 max-sm:grid-cols-1"
            >
              <p className="font-mono text-sm text-ink">{degree}</p>
              <p className="font-mono text-sm text-ink-faint text-right max-sm:text-left">
                {year}
              </p>
              <p className="font-mono text-sm text-ink-muted">{institution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer pointer */}
      <section className="border-t border-border pt-8">
        <p className="font-mono text-sm text-ink-muted">
        </p>
      </section>
    </div>
  );
}

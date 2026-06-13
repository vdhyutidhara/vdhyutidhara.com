import type { Metadata } from "next";
import Link from "next/link";
import projects from "@/lib/projects";
import ProjectCard from "@/components/Projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Vinay Kumar Gupta — inclusive interfaces, design systems, and accessible web applications.",
  alternates: { canonical: "https://vdhyutidhara.com/work" },
  openGraph: {
    title: "Projects — Vinay Kumar Gupta",
    description:
      "Selected projects by Vinay Kumar Gupta — inclusive interfaces, design systems, and accessible web applications.",
    url: "https://vdhyutidhara.com/work",
    type: "website",
  },
};

export default function WorkIndexPage() {
  return (
    <div className="w-[90vw] mx-auto py-16 px-4">
      <Link
        href="/"
        className="font-mono text-sm text-ink-faint border-b border-border pb-px hover:opacity-50 transition-opacity"
      >
        ← Back
      </Link>

      <header className="mt-12 mb-16">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs text-ink-faint tracking-[0.15em] uppercase">
            Projects
          </span>
          <span className="font-mono text-xs text-ink-faint">
            {projects.length} projects
          </span>
        </div>
        <hr className="thin-rule mb-10" />
        <h1 className="font-heading text-[3rem] font-light text-ink max-sm:text-[2rem]">
          Things I have made
        </h1>
      </header>

      <div className="grid grid-cols-3 gap-px bg-border max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

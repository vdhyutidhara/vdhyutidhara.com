import Link from "next/link";
import projects from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const PREVIEW_COUNT = 3;

export default function Projects() {
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <section className="w-[90vw] mx-auto py-24 px-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-ink-faint tracking-[0.15em] uppercase">
          Projects
        </span>
        <span className="font-mono text-xs text-ink-faint">
          {projects.length} projects
        </span>
      </div>
      <hr className="thin-rule mb-10" />
      <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
        <h2 className="font-heading text-[3rem] font-light text-ink max-sm:text-[2rem]">
          Things I have made
        </h2>
        <Link
          href="/work"
          className="font-mono text-sm text-ink-muted border-b border-border pb-px hover:opacity-50 transition-opacity whitespace-nowrap"
        >
          Show all →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-px bg-border max-lg:grid-cols-2 max-sm:grid-cols-1">
        {preview.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

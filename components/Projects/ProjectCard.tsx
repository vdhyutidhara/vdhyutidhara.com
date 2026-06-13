import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { slug, title, description, techStack, role, year } = project;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${slug}`}
      className="group block no-underline text-inherit bg-bg"
    >
      <article className="marching-ants relative p-8 flex flex-col gap-5 h-full min-h-[280px] overflow-hidden">

        {/* Faint large index — decorative depth */}
        <span
          aria-hidden="true"
          className="absolute top-4 right-6 font-heading text-[6rem] font-thin text-ink leading-none select-none pointer-events-none"
          style={{ opacity: 0.05 }}
        >
          {indexLabel}
        </span>

        <div className="flex items-center gap-3 font-mono text-[0.7rem] text-ink-faint tracking-wide uppercase">
          <span>{year}</span>
          <span>·</span>
          <span>{role}</span>
        </div>

        <h3 className="font-heading text-[2rem] font-light text-ink leading-tight transition-transform duration-300 ease-out group-hover:translate-x-1 max-lg:text-[1.625rem]">
          {title}
        </h3>

        <p className="font-mono text-sm leading-relaxed text-ink-muted mt-auto">
          {description}
        </p>

        <p className="font-mono text-[0.75rem] text-ink-faint">
          {techStack.join(" · ")}
        </p>

        <span className="arrow-cta self-start">
          View case study
          <span className="arrow">→</span>
        </span>

      </article>
    </Link>
  );
}

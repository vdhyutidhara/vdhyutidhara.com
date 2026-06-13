import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import projects from "@/lib/projects";
import { renderMarkdown } from "@/lib/renderMarkdown";

const BASE_URL = "https://vdhyutidhara.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `${BASE_URL}/work/${slug}`;
  return {
    title: project.title,
    description: project.description,
    authors: [{ name: "Vinay Kumar Gupta", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Vinay Kumar Gupta`,
      description: project.description,
      url,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Vinay Kumar Gupta`,
      description: project.description,
      images: [`${BASE_URL}/og?title=${encodeURIComponent(project.title)}`],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const { title, description, techStack, role, year, liveUrl, githubUrl, content } = project;
  const url = `${BASE_URL}/work/${slug}`;

  const html = renderMarkdown(content);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: liveUrl ?? url,
    creator: {
      "@type": "Person",
      name: "Vinay Kumar Gupta",
      url: BASE_URL,
    },
    dateCreated: year,
    inLanguage: "en-IN",
    ...(liveUrl && { sameAs: liveUrl }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${BASE_URL}/work` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <div id="main-content" className="w-[90vw] max-w-[720px] mx-auto py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Link
        href="/work"
        className="font-mono text-sm text-ink-faint border-b border-border pb-px hover:opacity-50 transition-opacity"
      >
        ← Back to Work
      </Link>

      <header className="mt-12 mb-10">
        <div className="flex items-center gap-3 font-mono text-[0.75rem] text-ink-faint mb-6">
          <span>{year}</span>
          <span aria-hidden="true">·</span>
          <span>{role}</span>
        </div>
        <h1 className="font-heading text-[3rem] font-light leading-tight max-sm:text-[2rem]">
          {title}
        </h1>
        <p className="font-mono text-sm leading-relaxed text-ink-muted mt-6">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-8">
          <p className="font-mono text-[0.8125rem] text-ink-faint">
            {techStack.map((tech, i) => (
              <span key={tech}>
                {tech}
                {i < techStack.length - 1 && (
                  <span className="text-ink-faint"> · </span>
                )}
              </span>
            ))}
          </p>
          <div className="flex gap-6 ml-auto">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.8125rem] border-b border-border pb-px hover:opacity-50 transition-opacity"
              >
                Live site ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.8125rem] border-b border-border pb-px hover:opacity-50 transition-opacity"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </header>

      <hr className="thin-rule mb-10" />

      <article
        className="prose-editorial"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

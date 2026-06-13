import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import blogs from "@/lib/blogs";
import { renderMarkdown } from "@/lib/renderMarkdown";

const BASE_URL = "https://vdhyutidhara.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: blog.title,
    description: blog.excerpt,
    authors: [{ name: "Vinay Kumar Gupta", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: `${blog.title} — Vinay Kumar Gupta`,
      description: blog.excerpt,
      url,
      type: "article",
      authors: ["Vinay Kumar Gupta"],
      publishedTime: blog.date,
      images: [
        {
          url: `${BASE_URL}/og?title=${encodeURIComponent(blog.title)}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} — Vinay Kumar Gupta`,
      description: blog.excerpt,
      images: [`${BASE_URL}/og?title=${encodeURIComponent(blog.title)}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const { title, date, readingTime, content, excerpt } = blog;
  const url = `${BASE_URL}/blog/${slug}`;

  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = renderMarkdown(content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Vinay Kumar Gupta",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Vinay Kumar Gupta",
      url: BASE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <div id="main-content" className="w-[90vw] max-w-[720px] mx-auto py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Link
        href="/blog"
        className="font-mono text-sm text-ink-faint border-b border-border pb-px hover:opacity-50 transition-opacity"
      >
        ← Back to Writing
      </Link>

      <header className="mt-12 mb-10">
        <div className="flex items-center gap-3 font-mono text-[0.75rem] text-ink-faint mb-6">
          <time dateTime={date}>{formattedDate}</time>
          <span aria-hidden="true">·</span>
          <span>{readingTime}</span>
        </div>
        <h1 className="font-heading text-[3rem] font-light leading-tight max-sm:text-[2rem]">
          {title}
        </h1>
      </header>

      <hr className="thin-rule mb-10" />

      <article
        className="prose-editorial"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

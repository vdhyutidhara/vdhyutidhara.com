import type { Metadata } from "next";
import Link from "next/link";
import blogs from "@/lib/blogs";
import BlogCard from "@/components/Blog/BlogCard";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles on inclusive design, accessibility, and front-end engineering by Vinay Kumar Gupta.",
  alternates: { canonical: "https://vdhyutidhara.com/blog" },
  openGraph: {
    title: "Writing — Vinay Kumar Gupta",
    description:
      "Articles on inclusive design, accessibility, and front-end engineering by Vinay Kumar Gupta.",
    url: "https://vdhyutidhara.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
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
            Writing
          </span>
          <span className="font-mono text-xs text-ink-faint">
            {blogs.length} articles
          </span>
        </div>
        <hr className="thin-rule mb-10" />
        <h1 className="font-heading text-[3rem] font-light text-ink max-sm:text-[2rem]">
          Things I have written
        </h1>
      </header>

      <div className="grid grid-cols-3 gap-px bg-border max-lg:grid-cols-2 max-sm:grid-cols-1">
        {blogs.map((blog, i) => (
          <BlogCard key={blog.slug} blog={blog} index={i} />
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import blogs from "@/lib/blogs";
import BlogCard from "./BlogCard";

const PREVIEW_COUNT = 3;

export default function Blog() {
  const preview = blogs.slice(0, PREVIEW_COUNT);

  return (
    <section className="w-[90vw] mx-auto py-24 px-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-ink-faint tracking-[0.15em] uppercase">
          Writing
        </span>
        <span className="font-mono text-xs text-ink-faint">
          {blogs.length} articles
        </span>
      </div>
      <hr className="thin-rule mb-10" />
      <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
        <h2 className="font-heading text-[3rem] font-light text-ink max-sm:text-[2rem]">
          Things I have written
        </h2>
        <Link
          href="/blog"
          className="font-mono text-sm text-ink-muted border-b border-border pb-px hover:opacity-50 transition-opacity whitespace-nowrap"
        >
          Show all →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-px bg-border max-lg:grid-cols-2 max-sm:grid-cols-1">
        {preview.map((blog, i) => (
          <BlogCard key={blog.slug} blog={blog} index={i} />
        ))}
      </div>
    </section>
  );
}

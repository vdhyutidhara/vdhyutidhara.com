"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollCue() {
  const [visible, setVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel placed at the bottom of the hero — disappears on scroll */}
      <div ref={sentinelRef} className="absolute bottom-0 h-px w-px" />
      <div
        aria-hidden="true"
        className="font-mono text-xs text-ink-faint flex items-center gap-2 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span>scroll</span>
        <span style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }}>
          ↓
        </span>
      </div>
    </>
  );
}

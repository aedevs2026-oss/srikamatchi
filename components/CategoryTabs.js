"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryTabs({ categories }) {
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "all";
  const query = searchParams.get("q");

  function buildHref(slug) {
    const params = new URLSearchParams();
    if (slug !== "all") params.set("category", slug);
    if (query) params.set("q", query);
    const qs = params.toString();
    return qs ? `/products?${qs}` : "/products";
  }

  const tabs = [{ slug: "all", name: "All" }, ...categories];

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1"
      role="tablist"
      aria-label="Product categories"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.slug;
        return (
          <Link
            key={tab.slug}
            href={buildHref(tab.slug)}
            role="tab"
            aria-selected={isActive}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "border border-border bg-surface text-body hover:border-primary hover:text-primary"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}

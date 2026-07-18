"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ placeholder = "Search products..." }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }
    router.push(`/products?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" role="search">
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <div className="flex overflow-hidden rounded-xl border border-border bg-surface shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-body/70"
        />
        <button
          type="submit"
          className="bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Search
        </button>
      </div>
    </form>
  );
}

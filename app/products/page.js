import { Suspense } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import EmptyState from "@/components/EmptyState";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { products, searchProducts } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse electronics, furniture, mobiles, TVs, fridges, washing machines and appliances at Sri Kamatchi Electronics, Bommidi & Harur.",
  path: "/products",
  keywords: ["Products", "TV", "Fridge", "Washing Machine"],
});

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";
  const category = params?.category || "all";

  let filtered = query ? searchProducts(query) : products;
  if (category && category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  return (
    <>
      <PageBanner
        title="Products"
        description="Search and filter our complete range of electronics, furniture and appliances."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mb-6 max-w-xl">
          <Suspense fallback={<div className="h-12 rounded-xl bg-muted" />}>
            <SearchBar />
          </Suspense>
        </div>

        <div className="mb-8">
          <Suspense fallback={<div className="h-10 rounded-xl bg-muted" />}>
            <CategoryTabs categories={categories} />
          </Suspense>
        </div>

        <p className="mb-6 text-sm text-body">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          product{filtered.length === 1 ? "" : "s"}
          {query ? ` for “${query}”` : ""}
          {category !== "all" ? ` in ${category}` : ""}
        </p>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

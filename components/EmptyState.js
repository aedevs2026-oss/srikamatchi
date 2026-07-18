import Link from "next/link";

export default function EmptyState({
  title = "No products found",
  description = "Try a different search or category.",
  href = "/products",
  actionLabel = "Browse Products",
}) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-muted/50 px-6 py-16 text-center">
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-body">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
      >
        {actionLabel}
      </Link>
    </div>
  );
}

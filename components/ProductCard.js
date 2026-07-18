import Image from "next/image";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.offer ? (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {product.offer}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {product.category}
        </p>
        <h3 className="line-clamp-2 text-base font-semibold text-foreground">
          <Link
            href={`/products/${product.slug}`}
            className="transition hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <PriceTag
          price={product.price}
          mrp={product.mrp}
          discount={product.discount}
          size="sm"
        />
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

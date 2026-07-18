import Image from "next/image";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";

export default function ComboCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-300 hover:shadow-md">
      <div className="grid md:grid-cols-2">
        <Link
          href={`/products/${product.slug}`}
          className="relative aspect-[4/3] bg-muted md:aspect-auto md:min-h-[240px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-center gap-4 p-6">
          <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark">
            {product.offer || "Combo Offer"}
          </span>
          <h3 className="text-xl font-bold text-foreground">
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-primary"
            >
              {product.name}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-body">
            {product.description}
          </p>
          <PriceTag
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
          />
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex w-fit items-center justify-center rounded-xl border-2 border-accent px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-white"
          >
            View Combo
          </Link>
        </div>
      </div>
    </article>
  );
}

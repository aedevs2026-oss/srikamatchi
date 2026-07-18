import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-lg font-bold">{category.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/80">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

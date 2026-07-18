import { formatPrice } from "@/lib/format";

export default function PriceTag({ price, mrp, discount, size = "md" }) {
  const sizes = {
    sm: {
      price: "text-lg",
      mrp: "text-xs",
      badge: "text-[10px] px-1.5 py-0.5",
    },
    md: {
      price: "text-xl",
      mrp: "text-sm",
      badge: "text-xs px-2 py-0.5",
    },
    lg: {
      price: "text-3xl",
      mrp: "text-base",
      badge: "text-sm px-2.5 py-1",
    },
  };

  const s = sizes[size];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={`font-bold text-primary ${s.price}`}>
        {formatPrice(price)}
      </span>
      {mrp && mrp > price ? (
        <span className={`text-body line-through ${s.mrp}`}>
          {formatPrice(mrp)}
        </span>
      ) : null}
      {discount ? (
        <span
          className={`rounded-full bg-accent/15 font-semibold text-accent-dark ${s.badge}`}
        >
          {discount}% OFF
        </span>
      ) : null}
    </div>
  );
}

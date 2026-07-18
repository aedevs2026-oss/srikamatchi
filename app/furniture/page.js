import ComboCard from "@/components/ComboCard";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { marriageSlabs, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Furniture Offers",
  description:
    "Steel & wooden furniture combos, sofa sets with free coffee table, Queen cot, Maharani & Maharaja marriage combos at Sri Kamatchi, Bommidi & Harur.",
  path: "/furniture",
  keywords: ["Furniture", "Marriage Combos", "Deepavali Combos", "Sofa"],
});

export default function FurniturePage() {
  const furniture = products.filter((p) => p.category === "furniture");
  const marriageCombos = products.filter(
    (p) => p.tags?.includes("marriage") && p.category === "combo"
  );

  return (
    <>
      <PageBanner
        title="Furniture Offers"
        description="Marriage combos, Deepavali packages, steel & wooden furniture and sofa deals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Furniture" },
        ]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Marriage & Deepavali"
          title="Maharani & Maharaja Combos"
          description="Complete 16-product packages designed for new homes and festive celebrations."
        />
        <div className="grid gap-6">
          {marriageCombos.map((product) => (
            <ComboCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Furniture"
            title="Steel, Wooden & Sofa Offers"
            description="Combos, Queen cot and sofa sets — all sofas include a free coffee table."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {furniture.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Marriage Offer"
          title="Slab-wise Free Gifts"
          description="Higher purchase value unlocks better free gifts."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Purchase Above</th>
                <th className="px-4 py-3 font-semibold">Free Gift</th>
              </tr>
            </thead>
            <tbody>
              {marriageSlabs.map((slab, index) => (
                <tr
                  key={slab.amount}
                  className={index % 2 === 0 ? "bg-background" : "bg-muted/40"}
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {formatPrice(slab.amount)}
                  </td>
                  <td className="px-4 py-3 text-body">{slab.gift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

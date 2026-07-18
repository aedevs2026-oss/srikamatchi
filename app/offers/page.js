import ComboCard from "@/components/ComboCard";
import OfferCard from "@/components/OfferCard";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { freeGifts, mobileBrands } from "@/data/brands";
import {
  getOfferProducts,
  marriageSlabs,
  products,
} from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/format";

export const metadata = buildMetadata({
  title: "Electronics Offers",
  description:
    "Aadi offers, TV BOGO deals, fridge festive offer, washing machine freebies, mobiles No Cost EMI and more at Sri Kamatchi Electronics.",
  path: "/offers",
  keywords: ["Offers", "Aadi Offer", "BOGO", "No Cost EMI"],
});

export default function OffersPage() {
  const combos = products.filter((p) => p.category === "combo");
  const tvs = products.filter((p) => p.category === "tv");
  const washers = products.filter((p) => p.category === "washing-machine");
  const appliances = getOfferProducts().filter((p) =>
    ["appliances", "ac", "fridge", "mobiles"].includes(p.category)
  );

  return (
    <>
      <PageBanner
        title="All Electronics Offers"
        description="Festival deals, BOGO TVs, No Cost EMI and free gifts across Bommidi & Harur."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offers" },
        ]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Aadi Special"
          title="Aadi Combo Offers"
          description="Fridge, washer and Smart TV packages starting at ₹20,990."
        />
        <div className="grid gap-6">
          {combos
            .filter((p) => p.tags?.includes("aadi"))
            .map((product) => (
              <ComboCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Televisions"
            title="TV Offers & Standalone Prices"
            description="BOGO deals, Smart TVs and EMI from ₹990. Samsung, Sony, LG & Intex — up to 3 years warranty."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tvs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Home Appliances"
          title="Appliance & Lifestyle Deals"
          description="Stoves, RO, mixer BOGO, AC, CCTV, solar heater, chimney and more."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {appliances.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Laundry"
            title="Washing Machine Offers"
            description="Free bucket, tub or kettle on select washers. Top & front load discounts ₹4000–15000."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {washers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Mobiles"
          title="No Cost EMI & Exchange Offer"
          description={`Brands: ${mobileBrands.join(", ")}. Free gifts on select purchases.`}
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {freeGifts.map((gift) => (
            <OfferCard
              key={gift}
              title={gift}
              badge="Free Gift"
              description="Available on eligible mobile & appliance purchases."
              href="/products?category=mobiles"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Marriage Offer"
            title="Free Gifts by Purchase Slab"
            description="Buy above the amount and get these free gifts at our showrooms."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marriageSlabs.map((slab) => (
              <li
                key={slab.amount}
                className="rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-accent">
                  Above {formatPrice(slab.amount)}
                </p>
                <p className="mt-2 text-lg font-bold text-foreground">
                  Free {slab.gift}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

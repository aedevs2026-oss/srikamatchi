import BrandStrip from "@/components/BrandStrip";
import CallButton from "@/components/CallButton";
import LocationCard from "@/components/LocationCard";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import TrustBadges from "@/components/TrustBadges";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brands } from "@/data/brands";
import { branches, business } from "@/data/business";
import { trustBadges } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${business.name} — trusted electronics & furniture store in Bommidi and Harur, Dharmapuri. GST ${business.gstin}.`,
  path: "/about",
  keywords: ["About", "GST", "Bommidi", "Harur"],
});

const whyChoose = [
  {
    id: "w1",
    title: "Genuine Brands",
    description: "Authorised products from Samsung, Sony, LG, Godrej and more.",
  },
  {
    id: "w2",
    title: "Festival Pricing",
    description: "Aadi, Deepavali and marriage offers with transparent MRP savings.",
  },
  {
    id: "w3",
    title: "Local Trust",
    description: "Two showrooms serving Bommidi, Harur and nearby towns.",
  },
  {
    id: "w4",
    title: "Easy Payments",
    description: "No Cost EMI, exchange offers and free gifts on eligible buys.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Sri Kamatchi"
        description="Your neighbourhood destination for electronics, furniture, mobiles and appliances."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              {business.name}
            </h2>
            <p className="mt-2 font-tamil text-lg text-body">
              {business.nameTamil}
            </p>
            <p className="mt-5 text-base leading-relaxed text-body">
              For families across Dharmapuri district, Sri Kamatchi Electronics
              & Furnitures is the go-to store for trusted brands, festival
              combos and marriage packages. From Smart TVs and refrigerators to
              sofas, wooden cots and mobile phones — we help you furnish and
              upgrade your home under one roof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              Visit our Bommidi showroom near Kavitha Theatre or our Harur
              branch opposite N.N. Mahal for personalised demos, EMI guidance
              and exclusive in-store offers.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-muted/50 p-5">
              <p className="text-sm font-semibold text-foreground">GSTIN</p>
              <p className="mt-1 text-lg font-bold text-primary">
                {business.gstin}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-bold text-foreground">Why Choose Us</h3>
            <ul className="mt-6 space-y-5">
              {whyChoose.map((item) => (
                <li key={item.id} className="border-b border-border pb-5 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-body">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Branches" description="Two stores. One trusted name." />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <LocationCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading title="Our Promise" />
        <TrustBadges badges={trustBadges} />
      </section>

      <section className="border-t border-border bg-surface py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Brands We Carry"
            description="Premium electronics and appliance brands under one roof."
          />
          <BrandStrip brands={brands} />
        </div>
      </section>
    </>
  );
}

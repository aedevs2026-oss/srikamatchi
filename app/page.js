import Link from "next/link";
import BrandStrip from "@/components/BrandStrip";
import CategoryCard from "@/components/CategoryCard";
import ComboCard from "@/components/ComboCard";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";
import LocationCard from "@/components/LocationCard";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import { brands } from "@/data/brands";
import { branches, business } from "@/data/business";
import { categories } from "@/data/categories";
import {
  getFeaturedProducts,
  heroSlides,
  products,
  testimonials,
  trustBadges,
} from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${business.name} | Electronics, Furniture & Mobiles`,
  description: `${business.name} in Bommidi & Harur — Aadi offers up to 60% OFF, No Cost EMI, marriage combos, TVs, fridges, furniture and mobiles.`,
  path: "/",
});

export default function HomePage() {
  const featuredCombos = products.filter((p) => p.category === "combo").slice(0, 3);
  const featuredProducts = getFeaturedProducts()
    .filter((p) => p.category !== "combo")
    .slice(0, 8);

  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="border-b border-border bg-primary py-4 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-center text-sm font-semibold md:text-base">
          <span>Aadi Offer — Up to 60% OFF</span>
          <span className="hidden text-accent sm:inline">•</span>
          <span>No Cost EMI from ₹990</span>
          <span className="hidden text-accent sm:inline">•</span>
          <span>Bommidi & Harur Showrooms</span>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Featured Combos"
          title="Aadi Combo Offers"
          description="Festival packages with fridge, washer and Smart TV at unbeatable prices."
        />
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
          {featuredCombos.map((product) => (
            <ComboCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/offers"
            className="inline-flex rounded-xl border-2 border-accent px-5 py-2.5 text-sm font-semibold transition hover:bg-accent hover:text-white"
          >
            View All Offers
          </Link>
        </div>
      </section>

      <section className="bg-muted/60 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Shop by Category"
            title="Everything for Your Home"
            description="Electronics, furniture, mobiles and appliances — genuine brands under one roof."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Featured Products"
          description="Handpicked deals on TVs, appliances, furniture and more."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Browse All Products
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Trusted Brands"
            title="Authorised Brands We Carry"
            description="From Godrej to Samsung, Sony, LG and more — shop with confidence."
          />
          <BrandStrip brands={brands} />
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Why Us"
          title="Trust Badges"
          description="Local service, genuine warranty and flexible payment options."
        />
        <TrustBadges badges={trustBadges} />
      </section>

      <section className="bg-muted/60 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Happy Customers"
            title="What People Say"
            description="Families across Bommidi, Harur and Dharmapuri trust Sri Kamatchi."
          />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Visit Us"
          title="Store Locations"
          description="Two convenient showrooms in Dharmapuri district."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <LocationCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

import Link from "next/link";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business } from "@/data/business";

export default function CtaBanner() {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center md:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Visit Our Stores
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Ready for Aadi & Marriage Offers?
          </h2>
          <p className="mt-3 text-white/80">
            Walk into Bommidi or Harur showrooms, or message us on WhatsApp for
            instant pricing on {business.tagline.toLowerCase()}.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CallButton variant="light" />
          <WhatsAppButton variant="light" />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent hover:text-foreground"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

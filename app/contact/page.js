import CallButton from "@/components/CallButton";
import ContactForm from "@/components/ContactForm";
import LocationCard from "@/components/LocationCard";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { branches, business } from "@/data/business";
import { formatPhone, telHref } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${business.name} at Bommidi or Harur. Call ${business.phones.join(" / ")} or WhatsApp for offers and enquiries.`,
  path: "/contact",
  keywords: ["Contact", "WhatsApp", "Google Maps"],
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description="Call, WhatsApp or visit our Bommidi & Harur showrooms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              title="Send an Enquiry"
              description="Share your requirement and we will get back quickly."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">Quick Contact</h2>
              <p className="mt-2 text-sm text-body">{business.hours}</p>
              <ul className="mt-5 space-y-3">
                {business.phones.map((phone) => (
                  <li key={phone}>
                    <Link
                      href={telHref(phone)}
                      className="text-lg font-semibold text-primary hover:text-primary-dark"
                    >
                      {formatPhone(phone)}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-body">
                GSTIN:{" "}
                <span className="font-semibold text-foreground">
                  {business.gstin}
                </span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>

            <div className="grid gap-4">
              {branches.map((branch) => (
                <LocationCard key={branch.id} branch={branch} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Find Us on Google Maps"
            description="Open directions to Bommidi or Harur branch."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
              >
                <div className="border-b border-border px-4 py-3">
                  <h3 className="font-semibold text-foreground">{branch.name}</h3>
                </div>
                <iframe
                  title={`Map of ${branch.name}`}
                  src={branch.embedUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

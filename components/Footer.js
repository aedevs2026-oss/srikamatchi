import Link from "next/link";
import { branches, business, navLinks } from "@/data/business";
import { brands } from "@/data/brands";
import { formatPhone, telHref } from "@/lib/format";
import BrandStrip from "@/components/BrandStrip";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-[#1F1F1F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">{business.name}</h2>
            <p className="font-tamil text-sm text-white/70">
              {business.nameTamil}
            </p>
            <p className="text-sm text-white/70">{business.tagline}</p>
            <p className="text-sm text-white/80">
              GSTIN: <span className="font-semibold text-accent">{business.gstin}</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="space-y-3">
              {business.phones.map((phone) => (
                <li key={phone}>
                  <Link
                    href={telHref(phone)}
                    className="text-sm font-medium text-white/90 transition hover:text-accent"
                  >
                    {formatPhone(phone)}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-white/70">{business.hours}</li>
            </ul>
          </div>

          <div className="space-y-6">
            {branches.map((branch) => (
              <div key={branch.id}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  {branch.name}
                </h3>
                <address className="not-italic text-sm leading-relaxed text-white/75">
                  {branch.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-white/60">
                    {branch.landmark}
                  </span>
                </address>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Trusted Brands
          </p>
          <BrandStrip brands={brands.slice(0, 12)} dark />
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="mt-1">Bommidi & Harur | Dharmapuri District</p>
        </div>
      </div>
    </footer>
  );
}

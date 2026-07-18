import Link from "next/link";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-foreground">Page not found</h1>
      <p className="mt-3 max-w-md text-body">
        The page may have moved. Browse products or contact our Bommidi / Harur
        stores for help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="inline-flex rounded-xl border-2 border-accent px-5 py-2.5 text-sm font-semibold transition hover:bg-accent hover:text-white"
        >
          Browse Products
        </Link>
        <CallButton />
        <WhatsAppButton />
      </div>
    </section>
  );
}

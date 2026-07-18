import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CallButton from "@/components/CallButton";
import PageBanner from "@/components/PageBanner";
import PriceTag from "@/components/PriceTag";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { productEnquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      path: "/products",
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: [product.category, product.offer, ...(product.tags || [])],
  });
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <>
      <PageBanner
        title={product.name}
        description={product.offer}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
              <Image
                src={gallery[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.discount ? (
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-bold text-white">
                  {product.discount}% OFF
                </span>
              ) : null}
            </div>
            {gallery.length > 1 ? (
              <ul className="grid grid-cols-3 gap-3">
                {gallery.map((image) => (
                  <li
                    key={image}
                    className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {product.category}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h2>
            {product.offer ? (
              <span className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {product.offer}
              </span>
            ) : null}

            <div className="mt-6">
              <PriceTag
                price={product.price}
                mrp={product.mrp}
                discount={product.discount}
                size="lg"
              />
            </div>

            <p className="mt-6 text-base leading-relaxed text-body">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                message={productEnquiryMessage(product)}
                label="WhatsApp Enquiry"
              />
              <CallButton />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-accent px-5 py-2.5 text-sm font-semibold transition hover:bg-accent hover:text-white"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-border bg-muted/50 py-14">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Related Products"
              description="Customers also checked these offers."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

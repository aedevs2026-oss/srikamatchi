import { siteUrl } from "@/data/business";
import { products } from "@/data/products";

export default function sitemap() {
  const staticRoutes = ["", "/products", "/offers", "/furniture", "/about", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}

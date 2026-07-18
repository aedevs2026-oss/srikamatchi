import { business } from "@/data/business";

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `${business.whatsappUrl}?text=${text}`;
}

export function productEnquiryMessage(product) {
  return `Hi Sri Kamatchi, I am interested in "${product.name}" (₹${product.price}). Please share details.`;
}

export function generalEnquiryMessage() {
  return "Hi Sri Kamatchi, I would like to know more about your offers.";
}

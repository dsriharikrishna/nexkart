import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Item Not Found — NEXKART" };

  return {
    title: `${product.name} — NEXKART`,
    description: product.description,
    openGraph: {
      title: `${product.name} — NEXKART`,
      description: product.subtitle,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      (p.category === product.category ||
        p.gender === product.gender ||
        p.collection === product.collection)
  ).slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={related} />;
}

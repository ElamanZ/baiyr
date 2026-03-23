"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import styles from "./page.module.css";
import CatalogTabs from "@/components/catalog/CatalogTabs/CatalogTabs";
import CatalogGrid from "@/components/catalog/CatalogGrid/CatalogGrid";
import DeliveryBanner from "@/components/catalog/DeliveryBanner/DeliveryBanner";
import { CategoryKey, Product } from "@/types/product";
import { ProductData } from "@/assets/product/ProductData";
import ProductModal from "@/components/catalog/ProductModal/ProductModal";
import { useCartContext } from "@/components/providers/CartProvider";

export default function CatalogPage() {
  const t = useTranslations("CatalogPage");
  const locale = useLocale();

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { addToCart } = useCartContext();

  const tabs = [
    { key: "all" as CategoryKey, label: t("tabs.all") },
    { key: "honey" as CategoryKey, label: t("tabs.honey") },
    { key: "products" as CategoryKey, label: t("tabs.products") },
    { key: "gift" as CategoryKey, label: t("tabs.giftSets") },
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return ProductData;
    return ProductData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <CatalogTabs
          tabs={tabs}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <DeliveryBanner text={t("delivery")} />

        <CatalogGrid
          products={filteredProducts}
          locale={locale}
          onCardClick={setSelectedProduct}
        />
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          locale={locale}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(productId, quantity) => {
            addToCart(productId, quantity);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
}

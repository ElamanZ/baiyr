"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

import honeyImage from "@/assets/images/Honey.png";
import CatalogTabs from "@/components/catalog/CatalogTabs/CatalogTabs";
import CatalogGrid from "@/components/catalog/CatalogGrid/CatalogGrid";
import DeliveryBanner from "@/components/catalog/DeliveryBanner/DeliveryBanner";

type CategoryKey = "all" | "honey" | "products" | "giftSets";

export default function CatalogPage() {
  const t = useTranslations("CatalogPage");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const tabs = [
    { key: "all" as CategoryKey, label: t("tabs.all") },
    { key: "honey" as CategoryKey, label: t("tabs.honey") },
    { key: "products" as CategoryKey, label: t("tabs.products") },
    { key: "giftSets" as CategoryKey, label: t("tabs.giftSets") },
  ];

  const products = useMemo(
    () => [
      {
        id: 1,
        title: t("items.whiteHoney"),
        price: "500 Сом–1кг",
        image: honeyImage,
        category: "honey" as CategoryKey,
      },
      {
        id: 2,
        title: t("items.whiteHoney"),
        price: "500 Сом–1кг",
        image: honeyImage,
        category: "honey" as CategoryKey,
      },
      {
        id: 3,
        title: t("items.whiteHoney"),
        price: "500 Сом–1кг",
        image: honeyImage,
        category: "products" as CategoryKey,
      },
      {
        id: 4,
        title: t("items.whiteHoney"),
        price: "500 Сом–1кг",
        image: honeyImage,
        category: "giftSets" as CategoryKey,
      },
    ],
    [t],
  );

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <CatalogTabs
          tabs={tabs}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <DeliveryBanner text={t("delivery")} />

        <CatalogGrid products={filteredProducts} buttonLabel={t("buy")} />
      </div>
    </section>
  );
}

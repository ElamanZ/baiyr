"use client";

import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import styles from "./CatalogGrid.module.css";
import ProductCard from "../ProductCard/ProductCard";

type Product = {
  id: number;
  title: string;
  price: {
    value: number;
    weight: string;
  };
  image: StaticImageData;
};

type Props = {
  products: Product[];
  buttonLabel: string;
};

export default function CatalogGrid({ products, buttonLabel }: Props) {
  const t = useTranslations("CatalogPage");

  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={t("price", {
            value: item.price.value,
            weight: item.price.weight,
          })}
          image={item.image}
          buttonLabel={buttonLabel}
        />
      ))}
    </div>
  );
}

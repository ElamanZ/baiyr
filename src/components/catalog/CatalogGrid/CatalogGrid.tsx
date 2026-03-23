"use client";

import styles from "./CatalogGrid.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
  locale: string;
  onCardClick: (product: Product) => void;
};

export default function CatalogGrid({ products, locale, onCardClick }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          locale={locale}
          onClick={() => onCardClick(item)}
        />
      ))}
    </div>
  );
}

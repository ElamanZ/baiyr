"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ProductModal.module.css";
import { Product } from "@/types/product";
import { getLocalizedValue } from "@/lib/catalog";

type Props = {
  product: Product;
  locale: string;
  onClose: () => void;
  onAddToCart: (productId: number, quantity: number) => void;
};

export default function ProductModal({
  product,
  locale,
  onClose,
  onAddToCart,
}: Props) {
  const t = useTranslations("ProductModal");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const title = getLocalizedValue(product.title, locale);
  const description = getLocalizedValue(product.description, locale);
  const weight = getLocalizedValue(product.price.weight, locale);

  const totalPrice = useMemo(
    () => product.price.value * quantity,
    [product.price.value, quantity],
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.infoBox}>
          <div className={styles.row}>
            <span>
              {weight} ({product.price.value} {t("currency")})
            </span>

            <div className={styles.counter}>
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                aria-label={t("decrease")}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                aria-label={t("increase")}
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.totalRow}>
            <span>{t("total")}:</span>
            <strong>
              {totalPrice} {t("currency")}
            </strong>
          </div>

          <button
            type="button"
            className={styles.addButton}
            onClick={() => onAddToCart(product.id, quantity)}
          >
            {t("addToCart")}
          </button>
        </div>

        <button type="button" className={styles.closeButton} onClick={onClose}>
          {t("close")}
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ProductModal.module.css";
import productModalBg from "@/assets/catalog/product-modal-bg.png";
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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const title = getLocalizedValue(product.title, locale);
  const description = getLocalizedValue(product.description, locale);
  const weight = getLocalizedValue(product.price.weight, locale);

  const totalPrice = useMemo(
    () => product.price.value * quantity,
    [product.price.value, quantity],
  );

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.iconClose}
          onClick={onClose}
          aria-label={t("close")}
        >
          <div>×</div>
        </button>

        <div
          className={styles.imageWrap}
          style={{ backgroundImage: `url(${productModalBg.src})` }}
        >
          <div className={styles.imageCrop}>
            <Image
              src={product.image}
              alt={title}
              fill
              className={styles.image}
              sizes="(max-width: 767px) 100vw, 700px"
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="product-modal-title" className={styles.title}>
            {title}
          </h2>

          <p className={styles.description}>{description}</p>

          <div className={styles.infoBox}>
            <div className={styles.row}>
              <span className={styles.priceText}>
                {weight} ({product.price.value} {t("currency")})
              </span>

              <div className={styles.counter}>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  aria-label={t("decrease")}
                >
                  −
                </button>

                <span className={styles.quantity}>{quantity}</span>

                <button
                  type="button"
                  className={styles.counterButton}
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
              onClick={handleAddToCart}
            >
              {t("addToCart")}
            </button>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
          >
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}

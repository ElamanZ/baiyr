"use client";

import { useTranslations } from "next-intl";
import { useCartContext } from "@/components/providers/CartProvider";
import CartIcon from "@/components/icons/CartIcon";
import styles from "./FloatingCartButton.module.css";

export default function FloatingCartButton() {
  const t = useTranslations("Header");
  const { cartCount, openCart, isHydrated, isCartOpen } = useCartContext();

  if (!isHydrated || cartCount <= 0 || isCartOpen) return null;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={openCart}
      aria-label={t("cartAria")}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span className={styles.count}>{cartCount > 99 ? "99+" : cartCount}</span>
    </button>
  );
}

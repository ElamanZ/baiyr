"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import styles from "./CartDrawer.module.css";
import { CartItem, Product } from "@/types/product";
import {
  buildWhatsAppMessage,
  getCartDetailedItems,
  getWhatsAppLink,
  getLocalizedValue,
} from "@/lib/catalog";

type Props = {
  locale: string;
  products: Product[];
  cart: CartItem[];
  onClose: () => void;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onClear: () => void;
};

export default function CartDrawer({
  locale,
  products,
  cart,
  onClose,
  onQuantityChange,
  onClear,
}: Props) {
  const t = useTranslations("Cart");
  const delivery = useTranslations("CatalogPage");

  const items = useMemo(
    () => getCartDetailedItems(products, cart),
    [products, cart],
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.total, 0),
    [items],
  );

  const handleCheckout = () => {
    if (!items.length) {
      alert(t("alerts.emptyCart"));
      return;
    }

    const message = buildWhatsAppMessage({
      products,
      cart,
      locale,
      translations: {
        greeting: t("whatsapp.greeting"),
        productsTitle: t("whatsapp.productsTitle"),
        total: t("whatsapp.total"),
        piecesShort: t("whatsapp.piecesShort"),
        currency: t("whatsapp.currency"),
      },
    });

    const whatsappUrl = getWhatsAppLink(message);
    window.location.href = whatsappUrl;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{t("title")}</h2>
          <button type="button" onClick={onClose} aria-label={t("close")}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.deliveryBanner}>
            <span className={styles.deliveryText}>{delivery("delivery")}</span>
          </div>
          {!items.length ? (
            <p className={styles.empty}>{t("empty")}</p>
          ) : (
            <div className={styles.listCard}>
              {items.map((item, index) => {
                const title = getLocalizedValue(item.product.title, locale);
                const weight = getLocalizedValue(
                  item.product.price.weight,
                  locale,
                );

                return (
                  <div key={item.productId}>
                    <div className={styles.itemRow}>
                      <div className={styles.itemInfo}>
                        <strong className={styles.itemTitle}>{title}</strong>

                        <p className={styles.itemMeta}>
                          {weight} ({item.product.price.value} {t("currency")})
                        </p>
                      </div>

                      <div className={styles.itemControls}>
                        <button
                          type="button"
                          className={styles.counterButton}
                          onClick={() =>
                            onQuantityChange(item.productId, item.quantity - 1)
                          }
                          aria-label={t("decrease")}
                        >
                          <span className={styles.counterSymbol}>−</span>
                        </button>

                        <span className={styles.quantity}>{item.quantity}</span>

                        <button
                          type="button"
                          className={styles.counterButton}
                          onClick={() =>
                            onQuantityChange(item.productId, item.quantity + 1)
                          }
                          aria-label={t("increase")}
                        >
                          <span className={styles.counterSymbol}>+</span>
                        </button>
                      </div>
                    </div>

                    {index !== items.length - 1 && (
                      <div className={styles.itemDivider} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.total}>
            <span>{t("total")}:</span>
            <strong>
              {total} {t("currency")}
            </strong>
          </div>

          <button
            type="button"
            className={styles.checkoutButton}
            onClick={handleCheckout}
          >
            {t("checkout")}
          </button>

          {!!items.length && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={onClear}
            >
              {t("clear")}
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}

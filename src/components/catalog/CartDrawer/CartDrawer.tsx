"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./CartDrawer.module.css";
import { CartItem, CheckoutForm, Product } from "@/types/product";
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
  onRemove,
  onClear,
}: Props) {
  const t = useTranslations("Cart");

  const [form, setForm] = useState<CheckoutForm>({
    phone: "",
    address: "",
  });

  const items = useMemo(
    () => getCartDetailedItems(products, cart),
    [products, cart],
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.total, 0),
    [items],
  );

  const handleCheckout = () => {
    if (!form.phone.trim() || !form.address.trim()) {
      alert(t("alerts.fillFields"));
      return;
    }

    if (!items.length) {
      alert(t("alerts.emptyCart"));
      return;
    }

    const message = buildWhatsAppMessage({
      products,
      cart,
      locale,
      form,
      translations: {
        greeting: t("whatsapp.greeting"),
        productsTitle: t("whatsapp.productsTitle"),
        total: t("whatsapp.total"),
        phone: t("whatsapp.phone"),
        address: t("whatsapp.address"),
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
          {!items.length ? (
            <p className={styles.empty}>{t("empty")}</p>
          ) : (
            <div className={styles.list}>
              {items.map((item) => {
                const title = getLocalizedValue(item.product.title, locale);
                const weight = getLocalizedValue(
                  item.product.price.weight,
                  locale,
                );

                return (
                  <div key={item.productId} className={styles.item}>
                    <div>
                      <strong>{title}</strong>
                      <p>
                        {weight} · {item.product.price.value} {t("currency")}
                      </p>
                    </div>

                    <div className={styles.itemActions}>
                      <div className={styles.counter}>
                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.productId, item.quantity - 1)
                          }
                          aria-label={t("decrease")}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.productId, item.quantity + 1)
                          }
                          aria-label={t("increase")}
                        >
                          +
                        </button>
                      </div>

                      <strong>
                        {item.total} {t("currency")}
                      </strong>

                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => onRemove(item.productId)}
                      >
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className={styles.form}>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t("phonePlaceholder")}
              value={form.phone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone: e.target.value }))
              }
            />

            <textarea
              autoComplete="street-address"
              placeholder={t("addressPlaceholder")}
              value={form.address}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>
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

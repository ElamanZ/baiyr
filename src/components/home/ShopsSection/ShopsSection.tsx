"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import styles from "./ShopsSection.module.css";
import LocationIcon from "@/components/icons/LocationIcon";

const WA_URL =
  "https://wa.me/996502707800?text=Здравствуйте, хочу связаться по магазину!";

export default function ShopsSection() {
  const t = useTranslations("HomePage.ShopsSection");

  const shops = useMemo(
    () =>
      [
        {
          id: 1,
          address: t("items.1.address"),
          url: "https://go.2gis.com/fpb7h",
          time: t("items.1.time"),
        },
        {
          id: 2,
          address: t("items.2.address"),
          url: "https://go.2gis.com/fpb7h",
          time: t("items.2.time"),
        },
        {
          id: 3,
          address: t("items.3.address"),
          url: "https://go.2gis.com/fpb7h",
          time: t("items.3.time"),
        },
        {
          id: 4,
          address: t("items.4.address"),
          url: "https://go.2gis.com/fpb7h",
          time: t("items.4.time"),
        },
      ] as const,
    [t],
  );

  return (
    <section className={styles.section} aria-labelledby="shops-heading">
      <div className={styles.container}>
        <div className={styles.layout}>
          <h2 id="shops-heading" className={styles.title}>
            {t("title")}
          </h2>

          <div className={styles.grid}>
            {shops.map((shop) => (
              <article key={shop.id} className={styles.card}>
                <div className={styles.addressRow}>
                  <span className={styles.locationIcon} aria-hidden>
                    <LocationIcon />
                  </span>
                  <h3 className={styles.address}>{shop.address}</h3>
                </div>

                <p className={styles.time}>
                  {t("workingHoursLabel")}: {shop.time}
                </p>

                <div className={styles.actions}>
                  <a
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    {t("open2gis")}
                  </a>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() =>
                      window.open(WA_URL, "_blank", "noopener,noreferrer")
                    }
                  >
                    {t("contact")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

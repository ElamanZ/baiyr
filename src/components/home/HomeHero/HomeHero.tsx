"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./HomeHero.module.css";
import aboutHero from "@/assets/images/AboutHero.webp";

const WA_URL =
  "https://wa.me/996502707800?text=Здравствуйте, хочу заказать мед!";

export default function HomeHero() {
  const t = useTranslations("HomePage.homeHero");

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroShell}>
        <div className={styles.heroImageWrap}>
          <Image
            src={aboutHero}
            alt={t("title")}
            fill
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw, min(100vw, 1440px)"
            className={styles.heroImage}
          />

          <div className={styles.overlay} />

          <div className={styles.heroContent}>
            <div className={styles.inner}>
              <h1 id="home-hero-title" className={styles.title}>
                <span className={styles.titleLine}>{t("titleLine1")}</span>
                <span className={styles.titleLine}>{t("titleLine2")}</span>
              </h1>

              <p className={styles.subtitle}>
                {t("line1")} {t("line2")}
              </p>

              <div className={styles.actions}>
                <Link href="/catalog" className={styles.btnCatalog}>
                  {t("catalogButton")}
                </Link>
                <button
                  type="button"
                  className={styles.btnContact}
                  onClick={() => window.open(WA_URL, "_blank", "noopener,noreferrer")}
                >
                  {t("button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

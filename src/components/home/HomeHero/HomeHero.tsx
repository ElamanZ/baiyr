"use client";

import Image from "next/image";
import styles from "./HomeHero.module.css";
import aboutHero from "@/assets/images/AboutHero.webp";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations("HomePage.homeHero");

  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrap}>
        <Image
          src={aboutHero}
          alt="Baiyr — натуральный мед"
          fill
          placeholder="blur"
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1>{t("title")}</h1>

              <div>
                <p>{t("line1")}</p>
                <p>{t("line2")}</p>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/996502707800?text=Здравствуйте, хочу заказать мед!",
                    "_blank",
                  )
                }
                className={styles.button}
              >
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

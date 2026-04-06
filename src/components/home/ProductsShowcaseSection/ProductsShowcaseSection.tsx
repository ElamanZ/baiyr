"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./ProductsShowcaseSection.module.css";
import imageHoney from "@/assets/images/1.png";
import imagePerga from "@/assets/images/2.png";
import imagePollen from "@/assets/images/3.png";
import imageGift from "@/assets/images/gift.png";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const productImages = {
  honey: imageHoney,
  perga: imagePerga,
  pollen: imagePollen,
} as const;

export default function ProductsShowcaseSection() {
  const t = useTranslations("HomePage.ProductsShowcaseSection");
  const [activeIndex, setActiveIndex] = useState(0);

  const products = useMemo(
    () =>
      [
        {
          key: "honey",
          title: t("items.honey.title"),
          description: t("items.honey.description"),
          image: productImages.honey,
        },
        {
          key: "perga",
          title: t("items.perga.title"),
          description: t("items.perga.description"),
          image: productImages.perga,
        },
        {
          key: "pollen",
          title: t("items.pollen.title"),
          description: t("items.pollen.description"),
          image: productImages.pollen,
        },
      ] as const,
    [t],
  );

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.desktopGrid}>
          {products.map((item) => (
            <article key={item.key} className={styles.productCard}>
              <div className={styles.productCardVisual}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className={styles.productImage}
                  sizes="300px"
                />
                <div className={styles.productOverlay} aria-hidden />
                <div className={styles.productText}>
                  <h3 className={styles.productTitle}>{item.title}</h3>
                  <p className={styles.productDescription}>{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            onClick={goPrev}
            aria-label={t("prev")}
          >
            <span className={styles.arrowIcon}>
              <ArrowRightIcon size={18} />
            </span>
          </button>

          <div className={styles.mobileViewport}>
            <div
              className={styles.mobileTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {products.map((item) => (
                <div key={item.key} className={styles.mobileSlide}>
                  <article className={styles.productCardMobile}>
                    <div className={styles.productCardVisualMobile}>
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className={styles.productImage}
                        sizes="(max-width: 768px) 90vw, 300px"
                      />
                      <div
                        className={styles.productOverlayMobile}
                        aria-hidden
                      />
                      <div className={styles.productTextMobile}>
                        <h3 className={styles.productTitleMobile}>
                          {item.title}
                        </h3>
                        <p className={styles.productDescriptionMobile}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            onClick={goNext}
            aria-label={t("next")}
          >
            <span className={styles.arrowIcon}>
              <ArrowRightIcon size={18} />
            </span>
          </button>
        </div>

        <Link href="/catalog" className={styles.catalogueButton}>
          {t("btn")}
        </Link>

        <article className={styles.giftCard}>
          <div className={styles.giftImageCol}>
            <Image
              src={imageGift}
              alt=""
              fill
              className={styles.giftImage}
              sizes="(max-width: 768px) 100vw, 565px"
            />
          </div>
          <div className={styles.giftContentCol}>
            <div className={styles.giftTextBlock}>
              <h3 className={styles.giftTitle}>{t("gift.title")}</h3>
              <p className={styles.giftDescription}>{t("gift.description")}</p>
            </div>
            <Link href="/catalog?gift=true" className={styles.giftButton}>
              {t("gift.button")}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

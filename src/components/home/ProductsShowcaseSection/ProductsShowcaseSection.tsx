"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./ProductsShowcaseSection.module.css";

import honeyImage from "@/assets/images/Honey.png";
import giftImage from "@/assets/images/Gift.png";
import { useRouter } from "next/navigation";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const productImages = {
  honey: honeyImage,
  perga: honeyImage,
  pollen: honeyImage,
} as const;

export default function ProductsShowcaseSection() {
  const t = useTranslations("HomePage.ProductsShowcaseSection");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const products = useMemo(
    () => [
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
    ],
    [t],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [products.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const openCatalogue = () => {
    router.push("/catalog");
  };

  const openGift = () => {
    router.push("/catalog?gift=true");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topLine} />
        <h2 className={styles.title}>{t("btn")}</h2>

        <div className={styles.desktopGrid}>
          {products.map((item) => (
            <article key={item.key} className={styles.productCard}>
              <div className={styles.productImageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={230}
                  height={250}
                  className={styles.productImage}
                />
              </div>

              <h3 className={styles.productTitle}>{item.title}</h3>
              <p className={styles.productDescription}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            onClick={goPrev}
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
                <article key={item.key} className={styles.mobileSlide}>
                  <div className={styles.productCardMobile}>
                    <div className={styles.productImageWrapMobile}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={154}
                        height={167}
                        className={styles.productImageMobile}
                      />
                    </div>

                    <h3 className={styles.productTitleMobile}>{item.title}</h3>
                    <p className={styles.productDescriptionMobile}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            onClick={goNext}
          >
            <span className={styles.arrowIcon}>
              <ArrowRightIcon size={18} />
            </span>
          </button>
        </div>

        <button className={styles.catalogueButton} onClick={openCatalogue}>
          {t("btn")}
        </button>

        <article className={styles.giftCard}>
          <div className={styles.giftImageWrap}>
            <Image
              src={giftImage}
              alt={t("gift.title")}
              width={442}
              height={228}
              className={styles.giftImage}
            />
          </div>

          <div className={styles.giftContent}>
            <div className={styles.giftTextBlock}>
              <h3 className={styles.giftTitle}>{t("gift.title")}</h3>
              <p className={styles.giftDescription}>{t("gift.description")}</p>
            </div>

            <button
              type="button"
              className={styles.giftButton}
              onClick={openGift}
            >
              {t("gift.button")}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

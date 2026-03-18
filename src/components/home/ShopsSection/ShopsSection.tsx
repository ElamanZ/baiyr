"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./ShopsSection.module.css";

import shopImage from "@/assets/images/Shop.png";
import LocationIcon from "@/components/icons/LocationIcon";

import "swiper/css";

export default function ShopsSection() {
  const t = useTranslations("HomePage.ShopsSection");

  const shops = useMemo(
    () => [
      {
        id: 1,
        image: shopImage,
        address: t("items.1.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.1.time"),
      },
      {
        id: 2,
        image: shopImage,
        address: t("items.2.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.2.time"),
      },
      {
        id: 3,
        image: shopImage,
        address: t("items.3.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.3.time"),
      },
      {
        id: 4,
        image: shopImage,
        address: t("items.4.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.4.time"),
      },
      {
        id: 5,
        image: shopImage,
        address: t("items.4.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.4.time"),
      },
      {
        id: 6,
        image: shopImage,
        address: t("items.4.address"),
        url: "https://go.2gis.com/fpb7h",
        time: t("items.4.time"),
      },
    ],
    [t],
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topLine} />
        <h2 className={styles.title}>{t("title")}</h2>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          spaceBetween={10}
          className={styles.swiper}
          breakpoints={{
            769: {
              spaceBetween: 30,
            },
          }}
        >
          {shops.map((shop) => (
            <SwiperSlide key={shop.id} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={shop.image}
                    alt={shop.address}
                    fill
                    sizes="(max-width: 768px) 158px, 400px"
                    className={styles.image}
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.addressRow}>
                    <span className={styles.locationIcon}>
                      <LocationIcon />
                    </span>
                    <h3 className={styles.address}>{shop.address}</h3>
                  </div>

                  <p className={styles.timeDesktop}>
                    {t("workingHoursLabel")}: {shop.time}
                  </p>

                  <p className={styles.timeMobile}>{shop.time}</p>

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      onClick={() => window.open(shop.url, "_blank")}
                    >
                      {t("open2gis")}
                    </button>

                    <button type="button" className={styles.primaryButton}>
                      {t("contact")}
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

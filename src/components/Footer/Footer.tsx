"use client";

import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";
import InstagramIcon from "../icons/InstagramIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LogoIcon from "../icons/LogoIcon";
import { useBreakpoint } from "@/hooks/use-breakpoint";

export default function Footer() {
  const t = useTranslations("Footer");

  const isMd = !useBreakpoint("md");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LogoIcon size={170} />
        </div>

        <div className={styles.cardBlock}>
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <InstagramIcon size={isMd ? 30 : 50} />

              <div className={styles.textBlock}>
                <p>{t("instagramLabel")}</p>
                <h4>{t("instagramValue")}</h4>
              </div>
            </div>

            <button
              className={styles.button}
              onClick={() =>
                window.open("https://www.instagram.com/baiyr_honey", "_blank")
              }
            >
              {t("instagramButton")}
            </button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <PhoneIcon size={isMd ? 30 : 50} />

              <div className={styles.textBlock}>
                <p>{t("phoneLabel")}</p>
                <h4>{t("phoneValue")}</h4>
              </div>
            </div>

            <button
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://wa.me/996502707800?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B4!%20",
                  "_blank",
                )
              }
            >
              {t("phoneButton")}
            </button>
          </article>
        </div>
      </div>
    </footer>
  );
}

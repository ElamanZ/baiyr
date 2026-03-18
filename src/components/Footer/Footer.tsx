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

            <button className={styles.button}>{t("instagramButton")}</button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <PhoneIcon size={isMd ? 30 : 50} />

              <div className={styles.textBlock}>
                <p>{t("phoneLabel")}</p>
                <h4>{t("phoneValue")}</h4>
              </div>
            </div>

            <button className={styles.button}>{t("phoneButton")}</button>
          </article>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";
import InstagramIcon from "../icons/InstagramIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LogoIcon from "../icons/LogoIcon";

const INSTAGRAM_URL = "https://www.instagram.com/baiyr_honey";
const WHATSAPP_URL =
  "https://wa.me/996502707800?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B4!";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <LogoIcon size={200} />
        </div>

        <nav className={styles.nav} aria-label={t("navAria")}> 
          <Link href="/" className={styles.navLink}>
            {t("nav.home")}
          </Link>
          <Link href="/catalog" className={styles.navLink}>
            {t("nav.catalog")}
          </Link>
          <a href="#about" className={styles.navLink}>
            {t("nav.about")}
          </a>
          <a href="#shops" className={styles.navLink}>
            {t("nav.shops")}
          </a>
          <a href="#contacts" className={styles.navLink}>
            {t("nav.contacts")}
          </a>
        </nav>

        <div className={styles.contacts} id="contacts">
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <InstagramIcon size={56} />
              <div className={styles.textBlock}>
                <p>{t("instagramLabel")}</p>
                <h4>{t("instagramValue")}</h4>
              </div>
            </div>

            <button
              type="button"
              className={styles.button}
              onClick={() => window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer")}
            >
              {t("instagramButton")}
            </button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <PhoneIcon size={56} />
              <div className={styles.textBlock}>
                <p>{t("phoneLabel")}</p>
                <h4>{t("phoneValue")}</h4>
              </div>
            </div>

            <button
              type="button"
              className={styles.button}
              onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
            >
              {t("phoneButton")}
            </button>
          </article>
        </div>
      </div>
    </footer>
  );
}

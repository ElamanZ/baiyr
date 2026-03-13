"use client";

import InstagramIcon from "../icons/InstagramIcon";
import PhoneIcon from "../icons/PhoneIcon";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <article className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.icon}>
              <InstagramIcon size={40} />
            </span>

            <div className={styles.textBlock}>
              <span className={styles.label}>Instagram</span>
              <strong className={styles.value}>baiyr_honey</strong>
            </div>
          </div>

          <button
            className={styles.button}
            onClick={() =>
              window.open("https://www.instagram.com/baiyr_honey", "_blank")
            }
          >
            Открыть Страницу
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.icon}>
              <PhoneIcon size={40} />
            </span>

            <div className={styles.textBlock}>
              <span className={styles.label}>Номер Телефона</span>
              <strong className={styles.value}>+996 (708) 45-45-45</strong>
            </div>
          </div>

          <button
            className={styles.button}
            onClick={() =>
              window.open(
                "https://wa.clck.bar/996502707800?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B4!%20",
                "_blank",
              )
            }
          >
            Написать
          </button>
        </article>
      </div>
    </footer>
  );
}

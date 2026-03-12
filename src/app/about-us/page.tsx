import Image from "next/image";
import styles from "./page.module.css";
import LogoIcon from "@/components/icons/LogoIcon";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/AboutHero.jpg"
            alt="Baiyr — натуральный мед"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.logo}>
            <LogoIcon size={300} />
          </div>

          <div className={styles.heroText}>
            <div className={styles.heroTextInner}>
              <h1>Baiyr — О компании</h1>
              <p>
                10 лет с натуральным мёдом.
                <br />
                Мы создаём продукцию из экологически чистых районов и гордимся
                её вкусом и качеством.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

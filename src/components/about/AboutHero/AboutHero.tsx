import Image from "next/image";
import styles from "./AboutHero.module.css";
import LogoIcon from "@/components/icons/LogoIcon";
import aboutHero from "@/assets/images/AboutHero.webp";

export default function AboutHero() {
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

        <div className={styles.heroOverlay} />

        <div className={styles.logo}>
          <LogoIcon size={300} />
        </div>

        <div className={styles.heroText}>
          <div className={styles.heroTextInner}>
            <h1>Baiyr — О компании</h1>
            <p>
              10 лет с натуральным мёдом.
              <br />
              Мы создаём продукцию из экологически чистых районов и гордимся её
              вкусом и качеством.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

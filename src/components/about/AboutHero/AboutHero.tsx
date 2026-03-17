import Image from "next/image";
import styles from "./AboutHero.module.css";
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

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1>Натуральный мёд из Кыргызстана</h1>

              <div>
                <p>Собственные пасеки в горах Кыргызстана.</p>

                <p>Оптовые поставки для магазинов и кафе.</p>
              </div>

              <button className={styles.button}>Связаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./QualitySection.module.css";
import aboutHero from "@/assets/images/AboutHero.webp";

export default function QualitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.textBlock}>
        <h2>Контроль качества</h2>
        <p>
          Наш мёд соответствует сертифицированным стандартам качества. Вся
          продукция проходит проверку и имеет документы.
        </p>
      </div>

      <div className={styles.imagesGrid}>
        <div className={styles.imageWrap}>
          <Image
            src={aboutHero}
            alt={`Контроль качества Baiyr2`}
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={aboutHero}
            alt={`Контроль качества Baiyr2`}
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={aboutHero}
            alt={`Контроль качества Baiyr2`}
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

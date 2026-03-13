import Image from "next/image";
import styles from "./WholesaleSection.module.css";
import aboutHero from "@/assets/images/AboutHero.webp";

export default function WholesaleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <Image
          src={aboutHero}
          alt="Оптовое сотрудничество Baiyr"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div>
          <h2>Оптовое Сотрудничество</h2>
          <p>
            Поставляем натуральный мёд для магазинов, кафе, ресторанов и
            дистрибьюторов. Гибкие условия и стабильные поставки.
          </p>
        </div>

        <button className={styles.button}>Подробнее</button>
      </div>
    </section>
  );
}

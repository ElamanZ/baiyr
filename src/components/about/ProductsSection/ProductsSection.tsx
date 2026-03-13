import Image from "next/image";
import styles from "./ProductsSection.module.css";
import honey from "@/assets/images/Honey.png";
import aboutHero from "@/assets/images/AboutHero.webp";

const products = [
  {
    title: "Мёд",
    text: "Природная энергия и ежедневная поддержка иммунитета.",
  },
  {
    title: "Пыльца",
    text: "Богата витаминами и питательными веществами для организма.",
  },
  {
    title: "Перга",
    text: "Поддерживает силы, восстановление и тонус.",
  },
];

export default function ProductsSection() {
  return (
    <section className={styles.section}>
      {/* ===== TOP CARDS ===== */}

      <div className={styles.topGrid}>
        {products.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={honey}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* ===== GIFT BLOCK ===== */}

      <div className={styles.giftBlock}>
        <div className={styles.giftImageWrap}>
          <Image
            src={aboutHero}
            alt="Подарочные наборы Baiyr"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.giftImage}
          />
        </div>

        <div className={styles.giftContent}>
          <h2>Подарок с заботой</h2>
          <p>
            Натуральный и полезный подарок, который выражает заботу о здоровье и
            самочувствии.
          </p>

          <button className={styles.button}>Смотреть Наборы</button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./WhyChooseSection.module.css";
import aboutHero from "@/assets/images/AboutHero.webp";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const topCards = [
  "Собственная пасека",
  "Горные районы Кыргызстана",
  "Собственная фабрика",
];

const locationCards = [
  "Бишкек Ул.Панфилова 304",
  "Бишкек Ул.Чокана Валиханова 16",
  "Бишкек Ул.Раззакова 19",
];

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Почему Выбирают Нас?</h2>

      <div className={styles.topGrid}>
        {topCards.map((text) => (
          <div key={text} className={styles.infoCard}>
            <div className={styles.imageWrap}>
              <Image
                src={aboutHero}
                alt={text}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className={styles.tab}>
        <span>Наши Пасеки</span>
        <span className={styles.tabIcon}>
          <ArrowDownIcon />
        </span>
      </div>

      <div className={styles.bottomGrid}>
        {locationCards.map((text, index) => (
          <div key={`${text}-${index}`} className={styles.locationCard}>
            <div className={styles.imageWrap}>
              <Image
                src={aboutHero}
                alt={text}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>

            <div className={styles.locationRow}>
              <span className={styles.locationIcon}>
                <LocationIcon />
              </span>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

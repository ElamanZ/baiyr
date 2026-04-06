import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./WhyUsStepsSection.module.css";

import beehivesIcon from "@/assets/images/why-us/beehives.png";
import mountainsIcon from "@/assets/images/why-us/mountains.png";
import factoryIcon from "@/assets/images/why-us/factory.png";
import line from "@/assets/icons/why-us-line.svg";

export default function WhyUsStepsSection() {
  const t = useTranslations("HomePage");

  const items = [
    {
      id: 1,
      title: t("steps.beehivesTitle"),
      description: t("steps.beehivesDescription"),
      image: beehivesIcon,
      alt: t("steps.beehivesTitle").replace("\n", " "),
    },
    {
      id: 2,
      title: t("steps.mountainsTitle"),
      description: t("steps.mountainsDescription"),
      image: mountainsIcon,
      alt: t("steps.mountainsTitle").replace("\n", " "),
    },
    {
      id: 3,
      title: t("steps.factoryTitle"),
      description: t("steps.factoryDescription"),
      image: factoryIcon,
      alt: t("steps.factoryTitle").replace("\n", " "),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2 className={styles.title}>{t("whyUsTitle")}</h2>

          <div className={styles.grid}>
            {items.map((item, index) => (
              <article
                key={item.id}
                className={`${styles.card} ${
                  index === 0 ? styles.cardFirst : ""
                } ${index === 1 ? styles.cardSecond : ""}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={168}
                    height={112}
                    className={styles.image}
                  />
                </div>

                <h3 className={styles.cardTitle}>
                  {item.title.split("\n").map((linePart) => (
                    <span key={linePart} className={styles.line}>
                      {linePart}
                    </span>
                  ))}
                </h3>

                <p className={styles.description}>{item.description}</p>

                {(index === 0 || index === 1) && (
                  <Image
                    src={line}
                    alt=""
                    className={styles.connector}
                    aria-hidden
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

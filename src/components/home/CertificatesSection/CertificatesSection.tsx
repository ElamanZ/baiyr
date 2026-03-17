import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./CertificatesSection.module.css";

import certificate1 from "@/assets/images/certificates/certificate-1.png";
import certificate2 from "@/assets/images/certificates/certificate-1.png";
import certificate3 from "@/assets/images/certificates/certificate-1.png";
import certificate4 from "@/assets/images/certificates/certificate-1.png";
import certificate5 from "@/assets/images/certificates/certificate-1.png";

const certificates = [
  { id: 1, image: certificate1 },
  { id: 2, image: certificate2 },
  { id: 3, image: certificate3 },
  { id: 4, image: certificate4 },
  { id: 5, image: certificate5 },
];

export default function CertificatesSection() {
  const t = useTranslations("HomePage.CertificatesSection");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topLine} />

        <h2 className={styles.title}>{t("title")}</h2>

        <div className={styles.marquee} aria-label={t("title")}>
          <div className={styles.track}>
            {[...certificates, ...certificates].map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className={styles.card}
                aria-hidden={index >= certificates.length}
              >
                <Image
                  src={item.image}
                  alt={t("certificateAlt", { number: item.id })}
                  className={styles.image}
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 28vw, 18vw"
                  priority={index < 2}
                />
              </article>
            ))}
          </div>
        </div>

        <div className={styles.bottomLine} />
      </div>
    </section>
  );
}

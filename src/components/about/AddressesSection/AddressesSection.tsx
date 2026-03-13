import Image from "next/image";
import styles from "./AddressesSection.module.css";
import shopImage from "@/assets/images/Shop.png";
import LocationIcon from "@/components/icons/LocationIcon";
import ClockIcon from "@/components/icons/ClockIcon";

const addresses = [
  {
    id: 1,
    address: "Бишкек, Ул. Исакеева 16",
    phone: "+996 (702) 70 78 07",
    time: "09:00 - 20:00",
  },
  {
    id: 2,
    address: "Бишкек, Ул. Раззакова 19",
    phone: "+996 (502) 37 49 19",
    time: "09:00 - 20:00",
  },
  {
    id: 3,
    address: "Бишкек, Ул. Панфилова 304",
    phone: "+996 (709) 56 06 03",
    time: "09:00 - 20:00",
  },
];

export default function AddressesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Адресс</h2>

      <div className={styles.grid}>
        {addresses.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={shopImage}
                alt={item.address}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>

            <div className={styles.info}>
              <div className={styles.row}>
                <span className={styles.icon}>
                  <LocationIcon />
                </span>
                <span className={styles.primaryText}>{item.address}</span>
              </div>

              <div className={styles.row}>
                <span className={styles.icon}>
                  <ClockIcon />
                </span>
                <span className={styles.secondaryText}>{item.phone}</span>
              </div>

              <div className={styles.row}>
                <span className={styles.icon}>
                  <ClockIcon />
                </span>
                <span className={styles.secondaryText}>Время: {item.time}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.button}>Связаться</button>
              <button className={styles.buttonSecondary}>Открыть в 2гис</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

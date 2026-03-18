import Image, { StaticImageData } from "next/image";
import styles from "./ProductCard.module.css";

type Props = {
  title: string;
  price: string;
  image: StaticImageData;
  buttonLabel: string;
};

export default function ProductCard({
  title,
  price,
  image,
  buttonLabel,
}: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <button type="button" className={styles.button}>
        {price}
      </button>
    </article>
  );
}

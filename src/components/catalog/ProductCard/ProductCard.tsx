import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import { getLocalizedValue } from "@/lib/catalog";

type Props = {
  product: Product;
  locale: string;
  onClick: () => void;
};

export default function ProductCard({ product, locale, onClick }: Props) {
  const title = getLocalizedValue(product.title, locale);
  const weight = getLocalizedValue(product.price.weight, locale);

  return (
    <article className={styles.card}>
      <button type="button" className={styles.cardInner} onClick={onClick}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.image}
          />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.button}>
          {product.price.value} сом - {weight}
        </div>
      </button>
    </article>
  );
}

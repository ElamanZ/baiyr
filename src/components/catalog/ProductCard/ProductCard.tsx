import styles from "./ProductCard.module.css";
import catalogCardBg from "@/assets/catalog/product-modal-bg.webp";
import CatalogProductImage from "@/components/catalog/CatalogProductImage/CatalogProductImage";
import { Product } from "@/types/product";
import { getLocalizedValue } from "@/lib/catalog";

type Props = {
  product: Product;
  locale: string;
  onClick: () => void;
  /** Первые карточки в каталоге — приоритетная загрузка (LCP) */
  imagePriority?: boolean;
};

export default function ProductCard({
  product,
  locale,
  onClick,
  imagePriority = false,
}: Props) {
  const title = getLocalizedValue(product.title, locale);
  const weight = getLocalizedValue(product.price.weight, locale);

  return (
    <article className={styles.card}>
      <button type="button" className={styles.cardInner} onClick={onClick}>
        <div
          className={styles.imageWrap}
          style={{ backgroundImage: `url(${catalogCardBg.src})` }}
        >
          <div className={styles.imageCrop}>
            <CatalogProductImage
              src={product.image}
              alt={title}
              sizes="(max-width: 768px) 50vw, (max-width: 1100px) 34vw, 26vw"
              priority={imagePriority}
              imgClassName={styles.image}
            />
          </div>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.button}>
          {product.price.value} сом - {weight}
        </div>

        {/* tooltip */}
        <span className={styles.tooltip}>{title}</span>
      </button>
    </article>
  );
}

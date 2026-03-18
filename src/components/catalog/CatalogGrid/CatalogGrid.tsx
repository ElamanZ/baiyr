import { StaticImageData } from "next/image";
import styles from "./CatalogGrid.module.css";
import ProductCard from "../ProductCard/ProductCard";

type Product = {
  id: number;
  title: string;
  price: string;
  image: StaticImageData;
};

type Props = {
  products: Product[];
  buttonLabel: string;
};

export default function CatalogGrid({ products, buttonLabel }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          buttonLabel={buttonLabel}
        />
      ))}
    </div>
  );
}

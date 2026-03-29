"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useState } from "react";
import styles from "./CatalogProductImage.module.css";

type Props = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  /** Первые карточки в сетке — быстрее LCP */
  priority?: boolean;
  /** Классы вёрстки (object-fit, transform и т.д.) */
  imgClassName: string;
};

export default function CatalogProductImage({
  src,
  alt,
  sizes,
  priority = false,
  imgClassName,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const onLoadingComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      priority={priority}
      quality={85}
      decoding="async"
      className={`${imgClassName} ${styles.fadeImg} ${loaded ? styles.fadeImgVisible : ""}`}
      onLoadingComplete={onLoadingComplete}
    />
  );
}

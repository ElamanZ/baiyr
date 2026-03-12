"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import AboutIcon from "../icons/AboutIcon";
import CatalogIcon from "../icons/CatalogIcon";
import CartIcon from "../icons/CartIcon";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Baiyr
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/about-us"
            className={`${styles.navLink} ${isActive("/about-us") ? styles.active : ""}`}
          >
            <span className={styles.icon}>
              <AboutIcon />
            </span>
            <span className={styles.linkText}>О НАС</span>
          </Link>

          <Link
            href="/catalog"
            className={`${styles.navLink} ${isActive("/catalog") ? styles.active : ""}`}
          >
            <span className={styles.icon}>
              <CatalogIcon />
            </span>
            <span className={styles.linkText}>КАТАЛОГ</span>
          </Link>

          <Link
            href="/cart"
            className={`${styles.cartButton} ${isActive("/cart") ? styles.active : ""}`}
          >
            <span className={styles.icon}>
              <CartIcon />
            </span>
            <span className={styles.cartText}>В КОРЗИНЕ</span>
            <span className={styles.cartCount}>1</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

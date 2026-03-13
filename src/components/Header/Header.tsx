"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./Header.module.css";
import AboutIcon from "../icons/AboutIcon";
import CatalogIcon from "../icons/CatalogIcon";
import CartIcon from "../icons/CartIcon";

const navItems = [
  {
    href: "/about-us",
    label: "О НАС",
    segment: "about-us",
    icon: AboutIcon,
    className: "navLink",
  },
  {
    href: "/catalog",
    label: "КАТАЛОГ",
    segment: "catalog",
    icon: CatalogIcon,
    className: "navLink",
  },
  {
    href: "/cart",
    label: "В КОРЗИНЕ",
    segment: "cart",
    icon: CartIcon,
    className: "cartButton",
  },
] as const;

export default function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Baiyr
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = segment === item.segment;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={styles[item.className]}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={styles.icon}>
                  <Icon />
                </span>

                {item.segment === "cart" ? (
                  <>
                    <span className={styles.cartText}>{item.label}</span>
                    <span className={styles.cartCount}>1</span>
                  </>
                ) : (
                  <span className={styles.linkText}>{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

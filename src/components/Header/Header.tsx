"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./Header.module.css";
import CatalogIcon from "../icons/CatalogIcon";
import CartIcon from "../icons/CartIcon";
import HomeIcon from "../icons/HomeIcon";
import LogoWithText from "../icons/LogoWithText";
import ChangeLang from "../changeLang/ChangeLangNav";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import Logo from "../icons/Logo";

const navItems = [
  {
    href: "/",
    label: "ГЛАВНАЯ",
    segment: null,
    icon: HomeIcon,
    className: "navLink",
  },
  {
    href: "/catalog",
    label: "КАТАЛОГ",
    segment: "catalog",
    icon: CatalogIcon,
    className: "navLink",
  },
] as const;

export default function Header() {
  const segment = useSelectedLayoutSegment();
  const isMd = !useBreakpoint("md");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isMd ? (
          <Link href="/" aria-label="На главную">
            <Logo size={30} />
          </Link>
        ) : (
          <Link href="/" className={styles.logoLink} aria-label="На главную">
            <LogoWithText />
          </Link>
        )}

        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isHome = item.href === "/";
            const isActive = isHome
              ? segment === null
              : segment === item.segment;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={styles[item.className]}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={styles.navIcon}>
                  <Icon size={100} />
                </span>

                <span className={styles.linkText}>{item.label}</span>
              </Link>
            );
          })}

          <button className={styles.cartButton} aria-label="Корзина">
            <span className={styles.icon}>
              <CartIcon />
            </span>
            <span className={styles.cartText}>В КОРЗИНЕ</span>
            <span className={styles.cartCount}>1</span>
          </button>

          <ChangeLang />
        </nav>
      </div>
    </header>
  );
}

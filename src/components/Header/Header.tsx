"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./Header.module.css";
import CatalogIcon from "../icons/CatalogIcon";
import HomeIcon from "../icons/HomeIcon";
import LogoWithText from "../icons/LogoWithText";
import ChangeLang from "../changeLang/ChangeLangNav";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import Logo from "../icons/Logo";

export default function Header() {
  const t = useTranslations("Header");
  const segment = useSelectedLayoutSegment();
  const isMd = !useBreakpoint("md");

  const navItems = [
    {
      href: "/",
      label: t("home"),
      segment: null,
      icon: HomeIcon,
      className: "navLink",
    },
    {
      href: "/catalog",
      label: t("catalog"),
      segment: "catalog",
      icon: CatalogIcon,
      className: "navLink",
    },
  ] as const;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isMd ? (
          <Link href="/" aria-label={t("homeAria")}>
            <Logo size={30} />
          </Link>
        ) : (
          <Link href="/" className={styles.logoLink} aria-label={t("homeAria")}>
            <LogoWithText />
          </Link>
        )}

        <nav className={styles.nav} aria-label={t("navAria")}>
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

          {/* <button
            type="button"
            className={styles.cartButton}
            aria-label={t("cartAria")}
            onClick={openCart}
          >
            <span className={styles.icon}>
              <CartIcon />
            </span>
            <span className={styles.cartText}>{t("cart")}</span>
            <span className={styles.cartCount}>
              {isHydrated ? cartCount : 0}
            </span>
          </button> */}

          <ChangeLang />
        </nav>
      </div>
    </header>
  );
}

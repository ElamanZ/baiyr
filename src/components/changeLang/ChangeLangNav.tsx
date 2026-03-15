"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./ChangeLang.module.css";

export default function ChangeLang() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const langs = [
    { code: "ky", label: "КЫРГЫЗЧА", short: "KG" },
    { code: "en", label: "ENGLISH", short: "EN" },
    { code: "ru", label: "РУССКИЙ", short: "RU" },
    { code: "zh", label: "中文", short: "中" },
  ];

  const current = pathname.split("/")[1] || "ru";

  const changeLang = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const currentLang =
    langs.find((l) => l.code === current) || langs.find((l) => l.code === "ru");

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.selected}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Сменить язык"
      >
        <span className={styles.full}>{currentLang?.label}</span>
        <span className={styles.short}>{currentLang?.short}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {langs.map((l) => (
            <button
              type="button"
              key={l.code}
              className={`${styles.option} ${
                current === l.code ? styles.active : ""
              }`}
              onClick={() => changeLang(l.code)}
            >
              <span className={styles.full}>{l.label}</span>
              <span className={styles.short}>{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import styles from "./CatalogTabs.module.css";

type Tab = {
  key: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  activeCategory: string;
  onChange: (key: any) => void;
};

export default function CatalogTabs({ tabs, activeCategory, onChange }: Props) {
  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={styles.tab}
            data-active={activeCategory === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

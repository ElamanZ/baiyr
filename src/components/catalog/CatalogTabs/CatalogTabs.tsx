"use client";

import { useRef } from "react";
import styles from "./CatalogTabs.module.css";

type Tab<T extends string> = {
  key: T;
  label: string;
};

type Props<T extends string> = {
  tabs: Tab<T>[];
  activeCategory: T;
  onChange: (key: T) => void;
};

export default function CatalogTabs<T extends string>({
  tabs,
  activeCategory,
  onChange,
}: Props<T>) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;

    isDownRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;

    const el = wrapRef.current;
    if (!el) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;

    el.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      ref={wrapRef}
      className={styles.tabsWrap}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
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

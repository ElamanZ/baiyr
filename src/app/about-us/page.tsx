import styles from "./page.module.css";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import WholesaleSection from "@/components/about/WholesaleSection/WholesaleSection";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <div className={styles.content}>
        <WholesaleSection />
      </div>
    </div>
  );
}

import HomeHero from "@/components/home/HomeHero/HomeHero";
import styles from "./page.module.css";
import WhyUsStepsSection from "@/components/home/WhyUsStepsSection/WhyUsStepsSection";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeHero />
      <WhyUsStepsSection />
      <div className={styles.content}></div>
    </div>
  );
}

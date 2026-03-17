import HomeHero from "@/components/home/HomeHero/HomeHero";
import styles from "./page.module.css";
import WhyUsStepsSection from "@/components/home/WhyUsStepsSection/WhyUsStepsSection";
import CertificatesSection from "@/components/home/CertificatesSection/CertificatesSection";
import ProductsShowcaseSection from "@/components/home/ProductsShowcaseSection/ProductsShowcaseSection";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeHero />
      <WhyUsStepsSection />
      <CertificatesSection />
      <ProductsShowcaseSection />
      <div className={styles.content}></div>
    </div>
  );
}

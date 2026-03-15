import styles from "./page.module.css";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import QualitySection from "@/components/about/QualitySection/QualitySection";
import WholesaleSection from "@/components/about/WholesaleSection/WholesaleSection";
import WhyChooseSection from "@/components/about/WhyChooseSection/WhyChooseSection";
import AddressesSection from "@/components/about/AddressesSection/AddressesSection";
import ProductsSection from "@/components/about/ProductsSection/ProductsSection";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <div className={styles.content}>
        <WholesaleSection />
        <WhyChooseSection />
        <QualitySection />
        <ProductsSection />
        <AddressesSection />
      </div>
    </div>
  );
}

import styles from "./DeliveryBanner.module.css";

type Props = {
  text: string;
};

export default function DeliveryBanner({ text }: Props) {
  return <div className={styles.banner}>{text}</div>;
}

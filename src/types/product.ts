import { StaticImageData } from "next/image";

export type LocaleKey = "ru" | "ky" | "en" | "zh";

export type CategoryKey = "all" | "honey" | "products" | "gift";

export type LocalizedText = {
  ru: string;
  ky: string;
  en: string;
  zh: string;
};

export type Product = {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  price: {
    value: number;
    weight: LocalizedText;
  };
  image: StaticImageData;
  category: CategoryKey;
};

export type CartItem = {
  productId: number;
  quantity: number;
};

export type CheckoutForm = {
  phone: string;
  address: string;
};

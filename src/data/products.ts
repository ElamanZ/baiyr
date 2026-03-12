import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "gornyy-med",
    name: "Горный мед",
    weight: "500 г",
    price: 650,
    image: "/images/honey-1.jpg",
    shortDescription: "Натуральный горный мед.",
    description: "Ароматный натуральный горный мед с насыщенным вкусом.",
  },
  {
    id: 2,
    slug: "lipovyy-med",
    name: "Липовый мед",
    weight: "500 г",
    price: 700,
    image: "/images/honey-2.jpg",
    shortDescription: "Мягкий и ароматный липовый мед.",
    description: "Липовый мед с нежной текстурой и приятным вкусом.",
  },
];

import { Product } from "@/types/product";
import honeyImage from "./images/propolis.png";

export const ProductData: Product[] = [
  {
    id: 1,
    title: {
      ru: "Белый мед",
      ky: "Ак бал",
      en: "White Honey",
      zh: "白蜂蜜",
    },
    description: {
      ru: "Натуральный мед с нежным вкусом.",
      ky: "Табигый бал назик даамы менен.",
      en: "Natural honey with a sweet taste.",
      zh: "天然蜂蜜，味道温和。",
    },
    price: {
      value: 500,
      weight: {
        ru: "1 кг",
        ky: "1 кг",
        en: "1 kg",
        zh: "1公斤",
      },
    },
    image: honeyImage,
    category: "honey",
  },

  {
    id: 2,
    title: {
      ru: "Горный мед",
      ky: "Тоолуу бал",
      en: "Mountain Honey",
      zh: "高山蜂蜜",
    },
    description: {
      ru: "Собран в горах, насыщенный вкус.",
      ky: "Тоодон чогултулган, даамы бай.",
      en: "Rich honey collected in mountains.",
      zh: "来自高山的浓郁蜂蜜。",
    },
    price: {
      value: 650,
      weight: {
        ru: "1 кг",
        ky: "1 кг",
        en: "1 kg",
        zh: "1公斤",
      },
    },
    image: honeyImage,
    category: "honey",
  },

  {
    id: 3,
    title: {
      ru: "Прополис",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный продукт для иммунитета.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 300,
      weight: {
        ru: "100 г",
        ky: "100 г",
        en: "100 g",
        zh: "100克",
      },
    },
    image: honeyImage,
    category: "products",
  },

  {
    id: 4,
    title: {
      ru: "Пчелиная пыльца",
      ky: "Аары чаңы",
      en: "Bee Pollen",
      zh: "蜂花粉",
    },
    description: {
      ru: "Богат витаминами и минералами.",
      ky: "Витаминдерге бай.",
      en: "Rich in vitamins and minerals.",
      zh: "富含维生素和矿物质。",
    },
    price: {
      value: 400,
      weight: {
        ru: "200 г",
        ky: "200 г",
        en: "200 g",
        zh: "200克",
      },
    },
    image: honeyImage,
    category: "products",
  },

  {
    id: 5,
    title: {
      ru: "Подарочный набор меда",
      ky: "Бал белек топтому",
      en: "Honey Gift Set",
      zh: "蜂蜜礼盒",
    },
    description: {
      ru: "Набор из нескольких видов меда.",
      ky: "Бир нече бал түрү бар топтом.",
      en: "Set of different honey types.",
      zh: "多种蜂蜜组合礼盒。",
    },
    price: {
      value: 1200,
      weight: {
        ru: "набор",
        ky: "топтом",
        en: "set",
        zh: "套装",
      },
    },
    image: honeyImage,
    category: "gift",
  },
];

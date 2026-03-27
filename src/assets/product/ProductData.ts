import { Product } from "@/types/product";
import honeyImage from "./images/propolis.png";
import perga1Image from "./images/perga1.png";
import perga2Image from "./images/perga2.png";
import plca1Image from "./images/plca1.png";
import plca2Image from "./images/plca2.png";
import nastoika1 from "./images/nastoika1.png";
import nastoika2 from "./images/nastoika2.png";

export const ProductData: Product[] = [
  {
    id: 1,
    title: {
      ru: "Перга",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 280,
      weight: {
        ru: "100 г",
        ky: "100 г",
        en: "100 g",
        zh: "100克",
      },
    },
    image: perga1Image,
    category: "products",
  },

  {
    id: 2,
    title: {
      ru: "Перга",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 840,
      weight: {
        ru: "300 г",
        ky: "300 г",
        en: "300 g",
        zh: "300克",
      },
    },
    image: perga2Image,
    category: "products",
  },

  {
    id: 3,
    title: {
      ru: "Пыльца",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 180,
      weight: {
        ru: "100 г",
        ky: "100 г",
        en: "100 g",
        zh: "100克",
      },
    },
    image: plca1Image,
    category: "products",
  },

  {
    id: 4,
    title: {
      ru: "Пыльца",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 540,
      weight: {
        ru: "300 г",
        ky: "300 г",
        en: "300 g",
        zh: "300克",
      },
    },
    image: plca2Image,
    category: "products",
  },

  {
    id: 5,
    title: {
      ru: "Прополис",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 120,
      weight: {
        ru: "10 г",
        ky: "10 г",
        en: "10 g",
        zh: "10克",
      },
    },
    image: perga1Image,
    category: "products",
  },

  {
    id: 6,
    title: {
      ru: "Настойка прополиса",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 240,
      weight: {
        ru: "0.1 л",
        ky: "0.1 л",
        en: "0.1 l",
        zh: "0.1克",
      },
    },
    image: nastoika1,
    category: "products",
  },

  {
    id: 7,
    title: {
      ru: "Настойка пчелиного подмора",
      ky: "Прополис",
      en: "Propolis",
      zh: "蜂胶",
    },
    description: {
      ru: "Натуральный мёд с нежным вкусом.",
      ky: "Иммунитет үчүн табигый продукт.",
      en: "Natural product for immunity.",
      zh: "增强免疫力的天然产品。",
    },
    price: {
      value: 240,
      weight: {
        ru: "0.1 л",
        ky: "0.1 л",
        en: "0.1 l",
        zh: "0.1克",
      },
    },
    image: nastoika2,
    category: "products",
  },

  {
    id: 8,
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
      value: 280,
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
    id: 8888,
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

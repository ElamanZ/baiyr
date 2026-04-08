import { Product } from "@/types/product";

// ==== Мёд ====
import whiteHoney1kg from "./images/whiteHoney1kg.webp";
import whiteHoney500g from "./images/whiteHoney500g.webp";
import mix700g from "./images/mix700g.webp";
import nuts350g from "./images/nuts350g.webp";
import flowerHoney from "./images/flowerHoney.webp";
import mountainHoney from "./images/mountainHoney.webp";

// ==== Медовая продукция ====
import perga1Image from "./images/perga1.webp";
import perga2Image from "./images/perga2.webp";
import plca1Image from "./images/plca1.webp";
import plca2Image from "./images/plca2.webp";
import nastoika1 from "./images/nastoika1.webp";
import nastoika2 from "./images/nastoika2.webp";
import propolisImage from "./images/propolis.webp";

// ==== Подарочные ====
import giftBarrel1kg from "./images/giftBarrel1kg.webp";
import giftBarrel500g from "./images/giftBarrel500g.webp";
import giftBarrel300g from "./images/giftBarrel300g.webp";

export const ProductData: Product[] = [
  // ==== Мёд ====
  {
    id: 101,
    title: { ru: "Белый мёд", ky: "Ак бал", en: "White Honey", zh: "白蜂蜜" },
    description: {
      ru: "Нежный кремовый мёд с мягким вкусом и лёгкой сладостью.",
      ky: "Жумшак даамы жана назик таттуулугу бар ак бал.",
      en: "Delicate creamy honey with a mild taste and light sweetness.",
      zh: "香软细腻的蜂蜜，味道柔和甜美。",
    },
    price: {
      value: 550,
      weight: { ru: "1 кг", ky: "1 кг", en: "1 kg", zh: "1公斤" },
    },
    image: whiteHoney1kg,
    category: "honey",
  },
  {
    id: 102,
    title: { ru: "Белый мёд", ky: "Ак бал", en: "White Honey", zh: "白蜂蜜" },
    description: {
      ru: "Нежный кремовый мёд с мягким вкусом и лёгкой сладостью.",
      ky: "Жумшак даамы жана назик таттуулугу бар ак бал.",
      en: "Delicate creamy honey with a mild taste and light sweetness.",
      zh: "香软细腻的蜂蜜，味道柔和甜美。",
    },
    price: {
      value: 300,
      weight: { ru: "500 г", ky: "500 г", en: "500 g", zh: "500克" },
    },
    image: whiteHoney500g,
    category: "honey",
  },
  {
    id: 103,
    title: {
      ru: "Ореховый микс",
      ky: "Жаңгак аралашмасы",
      en: "Nut Mix",
      zh: "坚果混合蜂蜜",
    },
    description: {
      ru: "Смесь орехов и сухофруктов в мёде с насыщенным вкусом и пользой.",
      ky: "Балдын ичинде жаңгактардын жана кургак мөмөлөрдүн пайдалуу аралашмасы.",
      en: "A mix of nuts and dried fruits in honey with a rich taste and benefits.",
      zh: "蜂蜜中混合坚果和干果，味道浓郁又健康。",
    },
    price: {
      value: 500,
      weight: { ru: "700 г", ky: "700 г", en: "700 g", zh: "700克" },
    },
    image: mix700g,
    category: "honey",
  },
  {
    id: 104,
    title: {
      ru: "Орехи в мёде",
      ky: "Бал ачышкан жаңгактар",
      en: "Nuts in Honey",
      zh: "蜂蜜坚果",
    },
    description: {
      ru: "Отборные орехи в натуральном мёде с мягким сладким вкусом.",
      ky: "Табигый балдагы сапаттуу жаңгактар, жумшак таттуу даам менен.",
      en: "Selected nuts in natural honey with a mellow sweet taste.",
      zh: "优质坚果浸泡在天然蜂蜜中，味道香甜柔和。",
    },
    price: {
      value: 350,
      weight: { ru: "350 г", ky: "350 г", en: "350 g", zh: "350克" },
    },
    image: nuts350g,
    category: "honey",
  },
  {
    id: 105,
    title: {
      ru: "Цветочный мёд",
      ky: "Гүлдүү бал",
      en: "Flower Honey",
      zh: "花蜜蜂蜜",
    },
    description: {
      ru: "Классический мёд с ароматом полевых цветов и насыщенным вкусом.",
      ky: "Жапайы гүлдөрдүн жыты бар классикалык бал.",
      en: "Classic honey with the aroma of wildflowers and a rich flavor.",
      zh: "带有野花香味的经典蜂蜜，口味浓郁。",
    },
    price: {
      value: 530,
      weight: { ru: "1 кг", ky: "1 кг", en: "1 kg", zh: "1公斤" },
    },
    image: flowerHoney,
    category: "honey",
  },
  {
    id: 106,
    title: {
      ru: "Горный мёд",
      ky: "Тоолук бал",
      en: "Mountain Honey",
      zh: "高山蜂蜜",
    },
    description: {
      ru: "Насыщенный мёд с ярким вкусом и природной силой горных трав.",
      ky: "Тоолук өсүмдүктөрдүн күчү менен бай табигый бал.",
      en: "Rich honey with a distinct taste and the natural strength of mountain herbs.",
      zh: "口感浓郁，融合高山草本力量的蜂蜜。",
    },
    price: {
      value: 600,
      weight: { ru: "1 кг", ky: "1 кг", en: "1 kg", zh: "1公斤" },
    },
    image: mountainHoney,
    category: "honey",
  },

  // ==== Медовая продукция ====
  {
    id: 107,
    title: { ru: "Перга", ky: "Перга", en: "Bee Bread", zh: "蜂花粉团" },
    description: {
      ru: "Натуральная перга с насыщенным вкусом и высокой питательной ценностью.",
      ky: "Даамдуу жана пайдалуу перга.",
      en: "Natural bee bread with rich flavor and high nutritional value.",
      zh: "味道浓郁、营养丰富的蜂花粉团。",
    },
    price: {
      value: 840,
      weight: { ru: "300 г", ky: "300 г", en: "300 g", zh: "300克" },
    },
    image: perga2Image,
    category: "products",
  },
  {
    id: 108,
    title: { ru: "Перга", ky: "Перга", en: "Bee Bread", zh: "蜂花粉团" },
    description: {
      ru: "Натуральная перга с насыщенным вкусом и высокой питательной ценностью.",
      ky: "Даамдуу жана пайдалуу перга.",
      en: "Natural bee bread with rich flavor and high nutritional value.",
      zh: "味道浓郁、营养丰富的蜂花粉团。",
    },
    price: {
      value: 280,
      weight: { ru: "100 г", ky: "100 г", en: "100 g", zh: "100克" },
    },
    image: perga1Image,
    category: "products",
  },
  {
    id: 109,
    title: { ru: "Пыльца", ky: "Ара чаңы", en: "Pollen", zh: "花粉" },
    description: {
      ru: "Пчелиная пыльца с мягким вкусом и богатым составом витаминов.",
      ky: "Жумшак даамдагы жана витаминдерге бай пчелиная пыльца.",
      en: "Bee pollen with a soft taste and rich in vitamins.",
      zh: "柔和口感、富含维生素的蜂花粉。",
    },
    price: {
      value: 540,
      weight: { ru: "300 г", ky: "300 г", en: "300 g", zh: "300克" },
    },
    image: plca2Image,
    category: "products",
  },
  {
    id: 110,
    title: { ru: "Пыльца", ky: "Ара чаңы", en: "Pollen", zh: "花粉" },
    description: {
      ru: "Пчелиная пыльца с мягким вкусом и богатым составом витаминов.",
      ky: "Жумшак даамдагы жана витаминдерге бай пчелиная пыльца.",
      en: "Bee pollen with a soft taste and rich in vitamins.",
      zh: "柔和口感、富含维生素的蜂花粉。",
    },
    price: {
      value: 180,
      weight: { ru: "100 г", ky: "100 г", en: "100 g", zh: "100克" },
    },
    image: plca1Image,
    category: "products",
  },
  {
    id: 111,
    title: {
      ru: "Настойка прополиса",
      ky: "Прополис тундурмасы",
      en: "Propolis Tincture",
      zh: "蜂胶酊",
    },
    description: {
      ru: "Натуральная настойка прополиса для поддержки иммунитета и защиты организма.",
      ky: "Иммунитетти чыңдоо үчүн табигый прополис тундурмасы.",
      en: "Natural propolis tincture to support immunity and protect the body.",
      zh: "增强免疫系统并保护身体的天然蜂胶酊。",
    },
    price: {
      value: 240,
      weight: { ru: "0.1 л", ky: "0.1 л", en: "0.1 l", zh: "0.1升" },
    },
    image: nastoika1,
    category: "products",
  },
  {
    id: 112,
    title: {
      ru: "Настойка пчелиного подмора",
      ky: "Ара сөөгү тундурмасы",
      en: "Bee Subpestilence Tincture",
      zh: "蜂尸浸提液",
    },
    description: {
      ru: "Настойка пчелиного подмора с укрепляющим действием для общего здоровья.",
      ky: "Жалпы ден соолук үчүн чыңдоочу ара сөөгү тундурмасы.",
      en: "Bee subpestilence tincture with a strengthening effect for overall health.",
      zh: "具有强身作用的蜂尸提取酒。",
    },
    price: {
      value: 240,
      weight: { ru: "0.1 л", ky: "0.1 л", en: "0.1 l", zh: "0.1升" },
    },
    image: nastoika2,
    category: "products",
  },
  {
    id: 113,
    title: { ru: "Прополис", ky: "Прополис", en: "Propolis", zh: "蜂胶" },
    description: {
      ru: "Натуральный прополис с выраженными защитными и укрепляющими свойствами.",
      ky: "Табигый прополис — коргоочу жана чыңдоочу касиеттери менен.",
      en: "Natural propolis with strong protective and strengthening properties.",
      zh: "天然蜂胶，具有保护和强化作用。",
    },
    price: {
      value: 120,
      weight: { ru: "10 г", ky: "10 г", en: "10 g", zh: "10克" },
    },
    image: propolisImage,
    category: "products",
  },

  // ==== Подарочные ====
  {
    id: 114,
    title: {
      ru: "Бочонок (Белый мёд)",
      ky: "Бочонок (Ак бал)",
      en: "Barrel (White Honey)",
      zh: "礼盒桶（白蜂蜜）",
    },
    description: {
      ru: "Нежный белый мёд в стильном бочонке — идеальный вариант для подарка.",
      ky: "Белек үчүн эң сонун вариант — бочоноктогу назик ак бал.",
      en: "Delicate white honey in a stylish barrel — a perfect gift choice.",
      zh: "精美木桶装白蜂蜜——送礼佳品。",
    },
    price: {
      value: 1800,
      weight: { ru: "1 кг", ky: "1 кг", en: "1 kg", zh: "1公斤" },
    },
    image: giftBarrel1kg,
    category: "gift",
  },
  {
    id: 115,
    title: {
      ru: "Бочонок (Белый мёд)",
      ky: "Бочонок (Ак бал)",
      en: "Barrel (White Honey)",
      zh: "礼盒桶（白蜂蜜）",
    },
    description: {
      ru: "Нежный белый мёд в стильном бочонке — идеальный вариант для подарка.",
      ky: "Белек үчүн эң сонун вариант — бочоноктогу назик ак бал.",
      en: "Delicate white honey in a stylish barrel — a perfect gift choice.",
      zh: "精美木桶装白蜂蜜——送礼佳品。",
    },
    price: {
      value: 1200,
      weight: { ru: "500 г", ky: "500 г", en: "500 g", zh: "500克" },
    },
    image: giftBarrel500g,
    category: "gift",
  },
  {
    id: 116,
    title: {
      ru: "Бочонок (Белый мёд)",
      ky: "Бочонок (Ак бал)",
      en: "Barrel (White Honey)",
      zh: "礼盒桶（白蜂蜜）",
    },
    description: {
      ru: "Нежный белый мёд в стильном бочонке — идеальный вариант для подарка.",
      ky: "Белек үчүн эң сонун вариант — бочоноктогу назик ак бал.",
      en: "Delicate white honey in a stylish barrel — a perfect gift choice.",
      zh: "精美木桶装白蜂蜜——送礼佳品。",
    },
    price: {
      value: 1000,
      weight: { ru: "300 г", ky: "300 г", en: "300 g", zh: "300克" },
    },
    image: giftBarrel300g,
    category: "gift",
  },
];

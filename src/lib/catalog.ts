import { CartItem, CheckoutForm, LocaleKey, Product } from "@/types/product";

export const WHATSAPP_PHONE = "996502707800";

export function getLocalizedValue<T extends Record<LocaleKey, string>>(
  value: T,
  locale: string,
) {
  const currentLocale = (locale || "ru") as LocaleKey;
  return value[currentLocale] ?? value.ru;
}

export function getCartDetailedItems(products: Product[], cart: CartItem[]) {
  return cart
    .map((cartItem) => {
      const product = products.find((item) => item.id === cartItem.productId);

      if (!product) return null;

      return {
        ...cartItem,
        product,
        total: product.price.value * cartItem.quantity,
      };
    })
    .filter(Boolean) as Array<{
    productId: number;
    quantity: number;
    product: Product;
    total: number;
  }>;
}

export function buildWhatsAppMessage(params: {
  products: Product[];
  cart: CartItem[];
  locale: string;
  form: CheckoutForm;
  translations: {
    greeting: string;
    productsTitle: string;
    total: string;
    phone: string;
    address: string;
    piecesShort: string;
    currency: string;
  };
}) {
  const { products, cart, locale, form, translations } = params;

  const items = getCartDetailedItems(products, cart);
  const total = items.reduce((sum, item) => sum + item.total, 0);

  const itemsText = items
    .map((item) => {
      const title = getLocalizedValue(item.product.title, locale);
      const weight = getLocalizedValue(item.product.price.weight, locale);

      return `${title} (${weight}) - ${item.quantity} ${translations.piecesShort} - ${item.total} ${translations.currency}`;
    })
    .join("\n");

  return [
    translations.greeting,
    "",
    `${translations.productsTitle}:`,
    itemsText,
    "",
    `${translations.total}: ${total} ${translations.currency}`,
    "",
    `${translations.phone}: ${form.phone}`,
    `${translations.address}: ${form.address}`,
  ].join("\n");
}

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

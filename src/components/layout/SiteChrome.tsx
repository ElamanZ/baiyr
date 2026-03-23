"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartDrawer from "@/components/catalog/CartDrawer/CartDrawer";
import { useCartContext } from "@/components/providers/CartProvider";
import { ProductData } from "@/assets/product/ProductData";
import { useLocale } from "next-intl";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCartContext();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {isCartOpen && (
        <CartDrawer
          locale={locale}
          products={ProductData}
          cart={cart}
          onClose={closeCart}
          onQuantityChange={updateQuantity}
          onRemove={removeFromCart}
          onClear={clearCart}
        />
      )}
    </>
  );
}

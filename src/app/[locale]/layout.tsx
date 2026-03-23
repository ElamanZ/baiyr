import "../globals.css";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CartProvider } from "@/components/providers/CartProvider";
import SiteChrome from "@/components/layout/SiteChrome";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={plusJakartaSans.className}>
        <NextIntlClientProvider locale={locale}>
          <CartProvider>
            <SiteChrome>{children}</SiteChrome>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

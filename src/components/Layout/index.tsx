// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Cormorant_Garamond } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_garamond",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main
        className={
          cormorant_garamond.variable +
          " " +
          libre_franklin.variable +
          "flex min-h-[100dvh] max-w-[100vw] bg-white flex-col"
        }
      >
        {children}
        <Footer />
      </main>
    </>
  );
}

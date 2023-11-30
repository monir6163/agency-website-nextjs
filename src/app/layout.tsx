import AppFooter from "@/components/shared/AppFooter";
import AppNavBar from "@/components/shared/AppNavBar";
import AppProgressBar from "@/utility/AppProgressBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Agency Website Template - Next.js",
  description: "Agency Website Template. Built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppNavBar />
        {children}
        <AppFooter />
        <AppProgressBar />
      </body>
    </html>
  );
}

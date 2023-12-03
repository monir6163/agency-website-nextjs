import AppFooter from "@/components/shared/AppFooter";
import AppNavBar from "@/components/shared/AppNavBar";
import AppProgressBar from "@/utility/AppProgressBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/SiteMeta/home`);
  const JSON = await res.json();
  return {
    title: JSON[0]["title"] + " | " + "Agency Website Template - Nextjs",
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: [
        {
          url: "https://agency-website-nextjs.vercel.app/images/logo.png",
          width: 800,
          height: 600,
          alt: JSON[0]["title"] + " | " + "Agency Website Template - Nextjs",
        },
      ],
    },
  };
}

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

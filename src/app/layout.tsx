import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ICONS,
  OPEN_GRAPH,
  SITE_DESCRIPTION,
  SITE_NAME,
  TWITTER,
} from "./constants/seo.constants";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [
    {
      name: SITE_NAME,
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  publisher: SITE_NAME,
  icons: ICONS,
  openGraph: OPEN_GRAPH,
  twitter: TWITTER,
  manifest: "./manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-XKFL67Z3CH" />
      </body>
    </html>
  );
}

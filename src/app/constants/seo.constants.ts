export const SITE_NAME = "teacoder.ru";
export const SITE_DESCTIPTION = "Generated by create next app";

export const ICONS = {
  shortcut: "/images/logo.svg",
  icon: "/images/logo.svg",
  apple: "/touch-icons/256x256.png",
  other: [
    {
      rel: "touch-icons",
      url: "/touch-icons/256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
  ],
};

export const OPEN_GRAPH = {
  title: SITE_NAME,
  description: SITE_DESCTIPTION,
  url: process.env.NEXT_PUBLIC_APP_URL,
  type: "website",
};

export const TWITTER = {
  card: "summary_large_image",
  site: process.env.NEXT_PUBLIC_APP_URL,
  title: SITE_NAME,
  description: SITE_DESCTIPTION,
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/touch-icons/256x256.png`,
      width: 256,
      height: 256,
      alt: SITE_NAME,
    },
  ],
};

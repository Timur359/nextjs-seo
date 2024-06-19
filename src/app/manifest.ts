import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constants";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#e06149",
    background_color: "#ffffff",
    scope: "/",
    start_url: "/?source=pwa",
    display: "standalone",
    orientation: "portrait",
    name: "TeaCoder",
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    icons: [
      {
        src: "/touch-icons/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/touch-icons/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/touch-icons/192x192-mask.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/touch-icons/512x512-mask.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

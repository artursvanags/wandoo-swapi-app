import { SiteConfig } from "@/types/global"

export const siteConfig: SiteConfig = {
  name: "Star Wars Encyclopedia",
  version: "1.0",
  description:"A comprehensive Star Wars encyclopedia about characters.",
  developer: "Arturs Vanags",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  ogImage: "#",
  keywords: [
    "Star Wars",
    "Encyclopedia",
    "Universe"
  ],
};
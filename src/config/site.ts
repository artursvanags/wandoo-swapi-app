import { SiteConfig, NavItem } from "@/types/global"

export const siteConfig: SiteConfig = {
  name: "Star Wars Encyclopedia",
  version: "1.0",
  description:"A comprehensive Star Wars encyclopedia about characters, mostly.",
  developer: "Arturs Vanags",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  links: {
    github: "https://github.com/artursvanags/wandoo-swapi-app",
  },
  keywords: [
    "Star Wars",
    "Encyclopedia",
    "Universe"
  ],
};


export const NavigationConfig: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Characters",
    href: "/characters",
  },
  {
    title: "About",
    href: "/about",
  },
]
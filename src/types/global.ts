export type SiteConfig = {
    name: string
    version: string
    description: string
    developer: string
    url: string
    ogImage: string
    keywords: string[]
  }

  export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }
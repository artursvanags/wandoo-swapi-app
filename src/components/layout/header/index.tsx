"use client";

import { usePathname } from "next/navigation";

import { NavigationConfig as nav } from "@/config/site";

import MobileMenu from "./mobile-menu";
import NavigationMenu from "./navigation-menu";

export default function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 lg:static">
      <div className="lg:hidden">
        <MobileMenu menu={nav} path={path} />
      </div>
      <div className="container hidden lg:block">
        <NavigationMenu menu={nav} path={path} />
      </div>
    </header>
  );
}

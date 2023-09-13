"use client";

import { usePathname} from "next/navigation";

import { NavigationConfig as nav } from "@/config/site";

import MobileMenu from "./mobile-menu";
import NavigationMenu from "./navigation-menu"

export default function Header() {
  const path = usePathname();

  return (
    <div>
      <div className="lg:hidden">
      <MobileMenu menu={nav} path={path} />
      </div>
      <div className="lg:block container hidden">
        <NavigationMenu menu={nav} path={path} />
      </div>
    </div>
  );
}

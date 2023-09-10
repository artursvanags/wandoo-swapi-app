"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { NavigationConfig as nav } from "@/config/site";

import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import { Icons } from "@/config/icons";
import ModeToggle from "@/components/global/ThemeToggleButton";
export default function Header() {
  const path = usePathname();
  const router = useRouter();

  return (
    <nav className="flex flex-1 items-center h-14 py-6 border-b container sm:relative sticky top-0 px-6 bg-background z-50">
      <div className="hidden sm:flex flex-1 justify-between items-center space-x-2">
        <div>
        {nav.map((navprops, index) => (
          <Button
            key={index}
            asChild
            variant={path === navprops.href ? "secondary" : "ghost"}
          >
            <Link href={navprops.href}>{navprops.title}</Link>
          </Button>
        ))}
        </div>
        <ModeToggle s="bottom" a="end"/>
      </div>

      <div className="sm:hidden flex flex-1 items-center align-middle">
        <MobileMenu menu={nav} path={path} />
        <p className="font-heading text-2xl pl-2">Main Menu</p>
      </div>

      {path.includes("/characters/") && (
        <div className="sm:hidden">
          <Button variant="secondary" onClick={() => router.back()}>
            {" "}
            <Icons.Left className="mr-2 w-6 h-6" />
            Go Back
          </Button>
        </div>
      )}
    </nav>
  );
}

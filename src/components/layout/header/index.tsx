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
    <nav className="bg-background container sticky top-0 z-50 flex h-14 flex-1 items-center border-b px-6 py-6 sm:relative">
      <div className="hidden flex-1 items-center justify-between space-x-2 sm:flex">
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
        <ModeToggle s="bottom" a="end" />
      </div>

      <div className="flex flex-1 items-center align-middle sm:hidden">
        <MobileMenu menu={nav} path={path} />
        <p className="font-heading pl-2 text-2xl">Main Menu</p>
      </div>

      {path.includes("/characters/") && (
        <div className="sm:hidden">
          <Button variant="secondary" onClick={() => router.back()}>
            {" "}
            <Icons.Left className="mr-2 h-6 w-6" />
            Go Back
          </Button>
        </div>
      )}
    </nav>
  );
}

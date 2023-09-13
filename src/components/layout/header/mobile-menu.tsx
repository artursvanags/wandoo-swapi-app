"use client";

import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { NavItem } from "@/types/global";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ModeToggle from "@/components/global/ThemeToggleButton";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

export default function MobileMenu({
  menu,
  path,
}: {
  menu: NavItem[];
  path: string;
}) {
  const router = useRouter();
  const sheetCloseRef = useRef<HTMLButtonElement | null>(null);

  const handleSheetClose = () => {
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };

  return (
    <div className="container sticky top-0 z-50 flex h-14 flex-1 items-center border-b bg-background px-6 py-6 sm:relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icons.HamburgerMenu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-[80vw] flex-col" side="left">
          <p className="border-b pb-2 font-heading text-4xl lg:text-5xl">
            Main Menu
          </p>
          <nav className=" space-y-2">
            {menu.map((navprops, index) => (
              <Button
                asChild
                key={index}
                size="lg"
                className={cn("w-full justify-start")}
                variant={path === navprops.href ? "secondary" : "ghost"}
                onClick={handleSheetClose}
              >
                <Link href={navprops.href}>{navprops.title}</Link>
              </Button>
            ))}
          </nav>
          <SheetClose ref={sheetCloseRef} />
          <div className="mt-auto border-t pt-4">
            <div className="flex flex-1 items-center justify-between">
              <ModeToggle s="right" a="end" />
              <Link
                className="underline underline-offset-4"
                href={siteConfig.links.github}
              >
                ver. {siteConfig.version}
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <p className="pl-2 font-heading text-2xl">Main Menu</p>
      {path.includes("/characters/") && (
        <Button
          className="ml-auto"
          variant="secondary"
          onClick={() => router.back()}
        >
          <Icons.Left className="mr-2 h-6 w-6" />
          Go Back
        </Button>
      )}
    </div>
  );
}

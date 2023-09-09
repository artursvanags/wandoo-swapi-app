'use client';

import { useRef } from "react";
import Link from "next/link"
import { cn } from "@/lib/utils";

import { Icons } from "@/config/icons"
import { NavItem } from "@/types/global"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import ModeToggle from "@/components/global/ThemeToggleButton";
import { siteConfig } from "@/config/site";

export default function MobileMenu({ menu, path }: { menu: NavItem[], path: string }) {
    const sheetCloseRef = useRef<HTMLButtonElement | null>(null)

    const handleSheetClose = () => {
      if (sheetCloseRef.current) {
        sheetCloseRef.current.click();
      }
    };
  
    return (
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icons.HamburgerMenu className="w-8 h-8" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[80vw] flex flex-col" side="left">
            <p className="font-heading text-4xl lg:text-5xl pb-2 border-b">Main Menu</p>
            <div className=" space-y-2">
                {menu.map((navprops, index) => (
              <Button
                asChild
                key={index}
                size="lg"
                className={cn('w-full justify-start')}
                variant={path === navprops.href ? "secondary" : "ghost"}
                onClick={handleSheetClose}
              >
                <Link href={navprops.href}>{navprops.title}</Link>
              </Button>
            ))}
            </div>
            <SheetClose ref={sheetCloseRef} />
            <div className="mt-auto flex-end border-t pt-4">
                <div className="flex flex-1 items-center justify-between">
                    <ModeToggle/>
                    <p>version {siteConfig.version}</p>  
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
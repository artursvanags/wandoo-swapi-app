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
          <SheetContent className="w-[80vw]" side="left">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-2">Main Menu</p>
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
            <SheetClose ref={sheetCloseRef} />
          </SheetContent>
        </Sheet>
      </div>
    );
  }
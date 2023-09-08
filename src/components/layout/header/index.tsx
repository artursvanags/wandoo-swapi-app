'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation'

import { NavigationConfig as nav } from "@/config/site"

import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu";

export default function Header() {
    const path = usePathname()

    return (
        <nav className="flex flex-1 items-center h-20 py-6 border-b container">
            <div className="hidden sm:block">
            {nav.map((navprops, index) => (
                <Button key={index} asChild variant={path === navprops.href ? "secondary" : "ghost"}>
                    <Link href={navprops.href}>{navprops.title}</Link>
                </Button>
            ))}
            </div>
            <div className="sm:hidden flex flex-1 items-center align-middle">
                <MobileMenu menu={nav} path={path}/>
                <p className="font-heading text-3xl pl-2">Main Menu</p>
            </div>
        </nav>
    )
}
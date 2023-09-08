'use client';

import { Button } from "@/components/ui/button"
import { NavigationConfig as nav } from "@/config/site"
import Link from "next/link"
import { usePathname } from 'next/navigation'
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
            <div className="sm:hidden block">
                <MobileMenu menu={nav}/>
            </div>
        </nav>
    )
}
'use client';

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'

import { NavigationConfig as nav } from "@/config/site"

import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu";
import { Icons } from "@/config/icons";

export default function Header() {
    const path = usePathname()
    const router = useRouter()
    return (
        <nav className="flex flex-1 items-center h-14 py-6 border-b sm:relative sticky top-0 bg-background container z-50">
            <div className="hidden sm:block">
            {nav.map((navprops, index) => (
                <Button key={index} asChild variant={path === navprops.href ? "secondary" : "ghost"}>
                    <Link href={navprops.href}>{navprops.title}</Link>
                </Button>
            ))}
            </div>
            <div className="sm:hidden flex flex-1 items-center align-middle">
                {path.includes('/characters/') ? (
                    <Button variant="secondary" onClick={() => router.back()}> <Icons.Left className="mr-2 w-4 h-4"/>Go Back</Button>
                ) : (
                    <>
                        <MobileMenu menu={nav} path={path}/>
                        <p className="font-heading text-2xl pl-2">Main Menu</p>
                    </>
                )}
            </div>
        </nav>
    )
}
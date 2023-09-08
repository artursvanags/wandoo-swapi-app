'use client';

import { Icons } from "@/config/icons"
import { Button } from "@/components/ui/button"
import { NavItem } from "@/types/global"

export default function MobileMenu({ menu }: { menu: NavItem[] }) {
    return (
        <div>
            <Button variant="ghost" size="icon"><Icons.HamburgerMenu className="w-8 h-8"/></Button>
        </div>
    )
}
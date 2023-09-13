import ModeToggle from "@/components/global/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/global";
import Link from "next/link";

export default function NavigationMenu({
  menu,
  path,
}: {
  menu: NavItem[];
  path: string;
}) {
  return (
    <div className="sticky top-0 z-50 flex h-14 flex-1 items-center border-b bg-background py-6 sm:relative">
      <div className="hidden flex-1 items-center justify-between sm:flex">
        <nav className="space-x-2">
            {menu.map((navprops, index) => (
              <Button
                key={index}
                asChild
                variant={path === navprops.href ? "secondary" : "ghost"}
              >
                <Link href={navprops.href}>{navprops.title}</Link>
              </Button>
            ))}
        </nav>
        <ModeToggle s="bottom" a="end" />
      </div>
    </div>
  );
}

import { 
Library,
Menu,
Sun,
Moon,
PanelLeftClose,
Laptop
 } from 'lucide-react';


import Image from "next/image";

const DefaultLogo = () => (
    <Image src="/vercel.svg" alt="Logo" width={100} height={128} />
);

export const Icons = {
    logo: DefaultLogo,
    Library: Library,
    HamburgerMenu: Menu,
    HamburgerMenuClose: PanelLeftClose

};

export const ThemeIcons = {
    Sun: Sun,
    Moon: Moon,
    System: Laptop
};



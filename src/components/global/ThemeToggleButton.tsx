'use client';

import * as React from "react"
import { useTheme } from "next-themes"

import { ThemeIcons } from "@/config/icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()
  const themeOptions = [
    { theme: "light", icon: <ThemeIcons.Sun className="h-4 w-4 mr-2" />, label: "Light" },
    { theme: "dark", icon: <ThemeIcons.Moon className="h-4 w-4 mr-2" />, label: "Dark" },
    { theme: "system", icon: <ThemeIcons.System className="h-4 w-4 mr-2" />, label: "System" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {themeOptions.map((option) => (
            <React.Fragment key={option.theme}>
              {option.theme === "light" && (
                <ThemeIcons.Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              )}
              {option.theme === "dark" && (
                <ThemeIcons.Moon className="h-4 w-4 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              )}
            </React.Fragment>
          ))}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={"top"} align={"start"}>
        {themeOptions.map((option) => (
          <DropdownMenuItem key={option.theme} onClick={() => setTheme(option.theme)}>
            {option.icon} {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    "light"
  );

  return (
    <Button
      variant="simple"
      className="overflow-hidden relative text-accent bg-transparent border-none hover:bg-secondary/80"
      onClick={() => {
        setThemeState(theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
      }}
      size="icon"
    >
      <SunIcon className=" absolute h-[1.2rem]  w-[1.2rem] dark:translate-y-10 translate-y-0 transition-transform " />

      <MoonIcon className=" absolute h-[1.2rem] w-[1.2rem] -translate-y-10 dark:translate-y-0  transition-transform  " />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

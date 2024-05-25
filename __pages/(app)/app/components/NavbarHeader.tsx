import React from "react";
import NavbarHeaderMenu from "./NavbarHeaderMenu";
import NavbarHeaderNotification from "./NavbarHeaderNotification";
import NavbarHeaderSearch from "./NavbarHeaderSearch";
import NavbarHeaderProfile from "./NavbarHeaderProfile";
import { ModeToggle } from "@/shared/components/ThemeSwitch";

const NavbarHeader = ({ user }: { user: any }) => {
  return (
    <nav className="flex justify-between md:justify-center bg-primary dark:bg-background text-muted dark:text-accent-foreground px-1 md:px-8  py-2 overflow-hidden">
      <div className="w-full px-4 lg:px-0 lg:container flex justify-between items-center">
        <NavbarHeaderMenu />

        <div className="flex items-center gap-3">
          <NavbarHeaderNotification />
          <NavbarHeaderSearch />
          <ModeToggle />
          <NavbarHeaderProfile user={user} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarHeader;

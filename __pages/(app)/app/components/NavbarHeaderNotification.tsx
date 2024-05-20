import React from "react";
import { FaBell } from "react-icons/fa";
const NavbarHeaderNotification = () => {
  return (
    <span className="flex h-9 w-9 items-center justify-center  text-sm rounded-full bg-secondary/50 cursor-pointer hover:bg-secondary/70 transition-all">
      <FaBell />
    </span>
  );
};

export default NavbarHeaderNotification;

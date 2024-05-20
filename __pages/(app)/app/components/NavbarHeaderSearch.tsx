import React from "react";
import { FaSearch } from "react-icons/fa";

const NavbarHeaderSearch = () => {
  return (
    <span className="flex h-9 w-9 items-center justify-center  text-sm rounded-full bg-secondary/50  hover:bg-secondary/70 transition-all cursor-pointer">
      <FaSearch />
    </span>
  );
};

export default NavbarHeaderSearch;

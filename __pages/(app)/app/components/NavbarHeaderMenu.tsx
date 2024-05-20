"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { BiLogoFirebase } from "react-icons/bi";
import triangle from "@/assets/images/triangle.svg";
import Image from "next/image";
import { DotFilledIcon, DotIcon } from "@radix-ui/react-icons";
const items = [
  {
    label: "Visão Geral",
    href: "/app",
  },
  {
    label: "Serviços",
    href: "/app/orders",
  },
  {
    label: "Vendas",
    href: "/app/sales",
  },
  {
    label: "Caixa",
    href: "/app/cash",
  },
];
const NavbarHeaderMenu = () => {
  const pathname = usePathname();
  const [active, setActive] = React.useState("");

  useEffect(() => {
    console.log(pathname);

    setActive(pathname);
  }, [pathname]);
  return (
    <div className="flex gap-20">
      <Link
        href={"/"}
        className="text-xl flex items-center gap-1 uppercase font-bold"
      >
        <BiLogoFirebase /> Ignix
      </Link>
      <ul className=" items-center gap-10 hidden md:flex">
        {items.map((item) => (
          <li
            key={item.label}
            className={`${
              active === item.href ? "" : "opacity-65 hover:opacity-75"
            } transition-opacity relative w-max`}
            // onClick={() => setActive(item.href)}
          >
            <Link
              href={item.href}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </Link>

            <span
              className={`absolute w-full left-0 -bottom-4 translate-x-1/2 translate-y-1/2 flex flex-col justify-center ${
                active === item.href ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="-translate-x-[5px]">
                <DotFilledIcon />
              </span>

              <span className="-translate-x-[10px] translate-y-2">
                <Image
                  className=""
                  src={triangle}
                  alt="triangle"
                />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarHeaderMenu;

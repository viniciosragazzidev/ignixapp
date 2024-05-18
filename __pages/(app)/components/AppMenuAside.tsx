"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Image from "next/image";
import IgnixImage from "@/assets/images/ignix.svg";
import { usePathname } from "next/navigation";
export const itemsAsideMenu = [
  {
    name: "Dashboard",
    icon: <Home className="h-5 w-5" />,
    href: "/app",
  },
  {
    name: "Orders",
    icon: <ShoppingCart className="h-5 w-5" />,
    href: "/app/orders",
  },
  {
    name: "Customers",
    icon: <Users2 className="h-5 w-5" />,
    href: "/app/customers",
  },
  {
    name: "Products",
    icon: <Package className="h-5 w-5" />,
    href: "/app/products",
  },
  {
    name: "Reports",
    icon: <LineChart className="h-5 w-5" />,
    href: "/app/reports",
  },
];
const AppMenuAside = () => {
  const pathname = usePathname();
  const [currentItem, setCurrentItem] = useState(pathname);
  useEffect(() => setCurrentItem(pathname), [pathname]);

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/"
          className="w-6"
        >
          <Image
            width={100}
            height={100}
            src={IgnixImage}
            alt="Ignix"
          />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {itemsAsideMenu.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger
              onClick={() => {
                setCurrentItem(item.href);
              }}
              asChild
            >
              <Link
                href={item.href}
                className={`flex h-9 w-9 items-center justify-center rounded-lg  text-muted-foreground ${
                  currentItem === item.href
                    ? "bg-accent text-accent-foreground"
                    : ""
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                {item.icon}
                <span className="sr-only">aaaaa</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">aaaaa</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default AppMenuAside;

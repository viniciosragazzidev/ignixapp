"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { Input } from "@/shared/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ModeToggle } from "@/shared/components/ThemeSwitch";
import { Button } from "@/shared/components/ui/button";
import SignoutButton from "@/shared/components/SignoutButton";
import { itemsAsideMenu } from "./AppMenuAside";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/shared/lib/utils";

const AppNavHeader = ({ user }: { user: any }) => {
  const pathname = usePathname();
  const pathnameSplited = pathname!.split("/").slice(1, pathname!.length);
  const novoPath = (item: string, pathname: string) => {
    if (pathname.includes(item)) {
      // Separe o pathname em partes usando a barra como delimitador
      const partes = pathname.split("/");

      // Encontre o índice do item desejado
      const indiceItem = partes.indexOf(item);

      // Crie um novo pathname com base no índice do item
      return partes.slice(0, indiceItem + 1).join("/");
    }
  };
  const [currentItem, setCurrentItem] = useState(pathname);

  useEffect(() => {
    setCurrentItem(pathname);
  }, [pathname]);
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="sm:hidden"
          >
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="sm:max-w-xs"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {itemsAsideMenu.map((item) => (
              <Link
                onClick={() => {
                  setCurrentItem(item.href);
                }}
                key={item.name}
                href="#"
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg text-muted-foreground hover:text-foreground ${
                  currentItem === item.href
                    ? "bg-muted/30 text-accent-foreground/60"
                    : ""
                } `}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {pathnameSplited.map((item, index) => (
            <>
              <BreadcrumbItem key={item}>
                <BreadcrumbLink asChild>
                  <Link
                    className={`${
                      item == pathnameSplited[pathnameSplited.length - 1]
                        ? "text-foreground font-bold"
                        : ""
                    }
                       
                    `}
                    href={novoPath(item, pathname!) || "/"}
                  >
                    {capitalizeFirstLetter(item)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator
                className={`${
                  index + 1 === pathnameSplited.length && "hidden"
                }`}
              />
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src={
                user.image ||
                `https://via.assets.so/img.jpg?w=120&h=120&tc=#009795&bg=#009795
              `
              }
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Configuração</DropdownMenuItem>
          <DropdownMenuItem>Suporte</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <SignoutButton className="w-full h-full inline-block text-start">
              Sair
            </SignoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </header>
  );
};

export default AppNavHeader;

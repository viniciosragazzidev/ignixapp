import SignoutButton from "@/shared/components/SignoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const NavbarHeaderProfile = ({ user }: { user: any }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-secondary/50 cursor-pointer hover:bg-secondary/70 relative pl-2 pr-5  lg:min-w-56 py-2 rounded-full  transition-all outline-none ring-primary ">
        <div className="flex gap-2 md:gap-16 items-center ">
          <div className="flex items-center gap-4">
            <span className="flex relative h-9 w-9 items-center justify-center bg-secondary text-sm rounded-full overflow-hidden">
              <Image
                src={
                  user.image ||
                  `https://via.assets.so/img.jpg?w=80&h=80&tc=blue&bg=#cecece
                `
                }
                alt={user.name}
                fill
              />
            </span>
            <div className=" flex-col items-start hidden lg:flex">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted lowercase">{user.role}</span>
            </div>
          </div>
          <span>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-max min-w-52 bg-secondary-foreground outline-none ring-0 border-0 text-muted space-y-1 pb-3">
        <DropdownMenuItem className="cursor-pointer w-full h-full transition-colors rounded-lg hover:bg-primary/50">
          <span>Minha conta</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer w-full h-full transition-colors rounded-lg hover:bg-primary/50">
          <span>Configurações</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer w-full h-full transition-colors rounded-lg hover:bg-primary/50">
          <SignoutButton>
            <span>Sair</span>
          </SignoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarHeaderProfile;

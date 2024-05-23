import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ItemHeaderTableOS } from "@/shared/constants";
import { OSTypedata } from "@/shared/@types/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { EyeIcon } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { BiEdit } from "react-icons/bi";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { OrderTypeTable } from "../@types/types";

const OsTable = ({ data }: { data: OrderTypeTable[] }) => {
  return (
    <Table className="w-full bg-transparent p-4 overflow-hidden rounded-lg">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {ItemHeaderTableOS.map((item, index) => (
            <TableHead
              className={`text-left  ${
                (item.id === "status " ||
                  item.id === "id" ||
                  item.id === "actions") &&
                "font-medium w-[100px]"
              } ${item.id === "value" && "w-[60px]"}`}
              key={item.id}
            >
              {item.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-left">
        {data.map((item: OrderTypeTable, index) => (
          <TableRow key={index}>
            <TableCell className="whitespace-nowrap">{item.id}</TableCell>
            <TableCell className="whitespace-nowrap">
              <div className="flex flex-col">
                <span className="font-medium">{item.customer.name}</span>
                <span className="text-muted-foreground">
                  {item.customer.contact}
                </span>
              </div>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger className=" bg-primary/80 cursor-pointer px-5 py-1 rounded-full  text-muted flex items-center gap-2 ">
                  <span>
                    <EyeIcon className="h-4 w-4" />
                  </span>{" "}
                  <span>{item.items.length}</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-max min-w-52 py-1  bg-secondary-foreground outline-none divide-y divide-muted/30  ring-0 border-0 text-muted  pb-3 mt-3 px-4 pt-1 rounded-lg">
                  {item.items.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      className="cursor-pointer w-full h-full px-2 rounded-xl transition-colors hover:bg-primary/50 py-2 flex flex-col gap-1 border-none outline-none right-0"
                    >
                      <span className="text-sm font-medium">
                        {item.name} {item.brand}
                      </span>
                      <span className="text-xs">
                        {item.model}{" "}
                        <span className="font-bold">
                          {" "}
                          R${item.repair_value}
                        </span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              {" "}
              <Badge
                className="text-xs"
                variant={`${
                  item.status.toLocaleLowerCase() === "pendente"
                    ? "outline"
                    : "default"
                }`}
              >
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              {item.createdAt.toString().split("T")[0]}
            </TableCell>
            <TableCell className="text-right">R${item.value || 0} </TableCell>
            <TableCell className="text-right">
              <Button
                variant="default"
                size={"icon"}
                className="rounded-full "
              >
                <BiEdit />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OsTable;

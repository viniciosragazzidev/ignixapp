"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Badge } from "@/shared/components/ui/badge";
import { formatCurrency, formatDate } from "@/shared/lib/utils";
import { StatusOs } from "@/shared/@enums/enums";
import { FaBox } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { EyeIcon } from "lucide-react";

interface TableLastedOrdersProps {
  data: any[];
  header: any[];
}
const TableLastedOrders = ({ data, header }: TableLastedOrdersProps) => {
  return (
    <Table className="w-full p-0 ">
      <TableHeader>
        <TableRow>
          {header.map((item, index) => (
            <TableHead
              className={
                index === header.length - 1 || index === 0 ? "hidden" : ""
              }
              key={index}
            >
              {item.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {data.map((item, index) => (
          <TableRow
            key={index}
            className="cursor-pointer"
          >
            <TableCell className="whitespace-nowrap">
              <div className="flex flex-col">
                <span className="font-medium">
                  {item.customer.name} {item.customer.surname}
                </span>
                <span className="text-muted-foreground">
                  {item.customer.contact}
                </span>
              </div>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Badge
                    className="text-xs space-x-2"
                    variant="default"
                  >
                    <span>
                      <EyeIcon className="h-4 w-4" />
                    </span>{" "}
                    <span>{item.items.length}</span>
                  </Badge>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48 py-1 overflow-hidden  bg-secondary-foreground outline-none divide-y divide-muted/30  ring-0 border-0 text-muted  pb-3 mt-3 px-4 pt-1 rounded-lg">
                  {item.items.map((item: any) => (
                    <DropdownMenuItem
                      key={item.id}
                      className="cursor-pointer w-full h-full  rounded-xl transition-colors hover:bg-primary/50 py-2 flex items-center gap-3  border-none outline-none right-0"
                    >
                      <span>
                        <FaBox />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium overflow-hidden max-w-44 text-ellipsis text-nowrap">
                          {item.name} {item.brand}
                        </span>
                        <span className="text-xs">
                          {item.model}{" "}
                          <span className="font-bold">
                            {" "}
                            R${item.repair_value}
                          </span>
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell className="whitespace-nowrap text-start">
              {" "}
              <Badge
                className={`text-xs font-semibold  ${
                  item.status === StatusOs.FINALIZADO
                    ? "text-blue-300 dark:text-blue-500"
                    : item.status === StatusOs.INICIADO
                    ? "text-cyan-100 dark:text-cyan-400"
                    : item.status === StatusOs.ENTREGUE
                    ? "text-teal-100 dark:text-teal-400"
                    : item.status === StatusOs.CANCELADO
                    ? "text-red-100 dark:text-red-400"
                    : item.status === StatusOs.FECHADO
                    ? "text-slate-300"
                    : item.status === StatusOs.PENDENTE &&
                      "text-amber-100 dark:text-amber-400"
                }`}
                variant={"custom"}
              >
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              {formatDate(item.createdAt.toString().split("T")[0])}
            </TableCell>
            <TableCell className="">
              {formatCurrency(item.value || 0)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableLastedOrders;

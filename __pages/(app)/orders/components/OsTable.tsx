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
import { formatCurrency, formatDate } from "@/shared/lib/utils";
import { FaBox } from "react-icons/fa";
import { StatusOs } from "@/shared/@enums/enums";

import * as TableC from "@/shared/components/ui_custom/table";
import { Card, CardContent } from "@/shared/components/ui/card";

interface OsTableInterface {
  data: OrderTypeTable[];
  header: any[];
}
const OsTable = ({ data, header }: OsTableInterface) => {
  return (
    <Card className="border-0 bg-transparent  w-full overflow-hidden">
      <CardContent className="p-0 w-full    ">
        <TableC.Root>
          <TableHeader>
            <TableRow>
              {header.map((item, index) => (
                <TableHead key={index}>{item.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {data.map((item: OrderTypeTable, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{item.id}</TableCell>
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

                    <DropdownMenuContent className="w-max rounded-xl px-1 min-w-52 bg-primary dark:text-accent-foreground outline-none ring-0 border-0 text-muted space-y-1 pb-3 p-2">
                      {item.items.map((item) => (
                        <DropdownMenuItem
                          key={item.id}
                          className="cursor-pointer w-full h-full  rounded-xl px-2 transition-colors hover:bg-secondary/50 py-2 flex items-center gap-3  border-none outline-none right-0 "
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
        </TableC.Root>
      </CardContent>
    </Card>
  );
};

export default OsTable;

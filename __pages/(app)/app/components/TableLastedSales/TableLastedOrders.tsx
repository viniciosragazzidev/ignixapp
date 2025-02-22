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

interface TableLastedOrdersProps {
  data: any[];
  header: any[];
}
const TableLastedOrders = ({ data, header }: TableLastedOrdersProps) => {
  return (
    <Table className="w-full p-0 ">
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead className="hidden sm:table-cell">Type</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        <TableRow className="bg-accent">
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">Sale</TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge
              className="text-xs"
              variant="default"
            >
              Fulfilled
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Olivia Smith</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              olivia@example.com
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">Refund</TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge
              className="text-xs"
              variant="success"
            >
              Declined
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <div className="font-medium">Noah Williams</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              noah@example.com
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">Subscription</TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge
              className="text-xs"
              variant="default"
            >
              Fulfilled
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">Sale</TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge
              className="text-xs"
              variant="default"
            >
              Fulfilled
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableLastedOrders;

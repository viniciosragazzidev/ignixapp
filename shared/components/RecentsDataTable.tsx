import React from "react";
import * as TableC from "@/shared/components/ui_custom/table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { formatCurrency, formatDate } from "../lib/utils";

interface RecentsDataTableProps {
  header: any[];
  data: any[];
}
const RecentsDataTable = ({ header, data }: RecentsDataTableProps) => {
  return (
    <TableC.Root>
      <TableHeader>
        <TableRow>
          {header.map((item, index) => (
            <TableHead
              className={`w-max text-nowrap whitespace-nowrap font-medium `}
              key={index}
            >
              {item.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {Object.keys(item).map((key, index) => (
              <TableCell
                key={index}
                className="text-left"
              >
                {key === "createdAt"}
                {key === "createdAt"
                  ? formatDate(item[key].toString().split("T")[0])
                  : key === "value"
                  ? formatCurrency(item[key])
                  : item[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableC.Root>
  );
};

export default RecentsDataTable;

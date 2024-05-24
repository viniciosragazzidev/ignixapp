import React from "react";
import { Table } from "../ui/table";

interface TableRootProps {
  children?: React.ReactNode;
}
export const Root = ({ children }: TableRootProps) => {
  return (
    <Table className="w-full bg-transparent p-4 overflow-hidden rounded-lg">
      {children}
    </Table>
  );
};

import React from "react";
import OsTable from "./OsTable";
import { orderData } from "./DataTable";
import { ItemHeaderTableOS } from "../../utils/TablesData";

type OsTableContainerTypes = {
  type?: string;
  search?: string;
  status?: string;
  date?: string;
};
const OsTableContainer = async ({
  type,
  search,
  status,
  date,
}: OsTableContainerTypes) => {
  console.log(type, search, status, date);

  const orderByLastDate = orderData.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const lastFiveItems = orderByLastDate.slice(0, 5);
  return (
    <>
      <OsTable
        data={lastFiveItems}
        header={ItemHeaderTableOS}
      />
    </>
  );
};

export default OsTableContainer;

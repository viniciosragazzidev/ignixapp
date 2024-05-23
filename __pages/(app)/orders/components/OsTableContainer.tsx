import React from "react";
import OsTable from "./OsTable";
import { orderData } from "./DataTable";

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
  return (
    <>
      {type}
      <OsTable data={orderData} />
    </>
  );
};

export default OsTableContainer;

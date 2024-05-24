import React from "react";
import TableLastedOrders from "./TableLastedOrders";
import { ItemHeaderTableOS } from "@/__pages/(app)/utils/TablesData";
import { orderData } from "@/__pages/(app)/orders/components/DataTable";
import TableSuspenseLoading from "@/__pages/(app)/components/TableSuspenseLoading";

const TableLastedOrdersContainer = async () => {
  const orderByLastDate = orderData.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const lastFiveItems = orderByLastDate.slice(0, 5);
  return (
    <div className="w-full overflow-x-scroll">
      <React.Suspense fallback={<TableSuspenseLoading />}>
        <TableLastedOrders
          data={lastFiveItems}
          header={ItemHeaderTableOS}
        />
      </React.Suspense>
    </div>
  );
};

export default TableLastedOrdersContainer;

import React from "react";
import { BiLoader } from "react-icons/bi";

const TableSuspenseLoading = () => {
  return (
    <div className="w-full h-full min-h-96 flex justify-center items-center">
      <BiLoader className="animate-spin text-5xl  text-primary" />
    </div>
  );
};

export default TableSuspenseLoading;

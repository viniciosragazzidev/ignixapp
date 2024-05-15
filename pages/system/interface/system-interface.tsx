import { User } from "@prisma/client";
import React from "react";

export const SystemInterface = ({ user }: { user: any }) => {
  console.log("user", user);

  return (
    <>
      <h1>System Interface, hello {user?.name}</h1>
    </>
  );
};

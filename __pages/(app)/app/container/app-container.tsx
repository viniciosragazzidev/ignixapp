"use server";
import React from "react";
import { AppInterface } from "../interface/app-interface";
import { getUserPermissions } from "@/shared/services/casl/actions/get-user-permissions";
import { auth } from "@/shared/services/auth";

const AppContainer = async () => {
  const session = await auth();

  const user = session?.user;

  const { can } = getUserPermissions(user?.id || "", user?.role || "MEMBER");

  const verify = can("read", "MainPanel");
  return (
    <AppInterface
      user={user}
      verify={verify}
    />
  );
};

export default AppContainer;

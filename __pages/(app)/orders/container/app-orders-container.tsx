"use server";
import React from "react";
import { AppOrdersInterface } from "../interface/app-orders-interface";
import { getUserPermissions } from "@/shared/services/casl/actions/get-user-permissions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { auth } from "@/shared/services/auth";

const AppOrdersContainer = async () => {
  const session = await auth();

  const user = session?.user;
  const cookiesNow = cookies().get("userId");

  if (!user && !cookiesNow) {
    redirect("/signin");
  }

  const { can } = getUserPermissions(user?.id || "", user?.role || "MEMBER");

  const verify = can("read", "MainPanel");
  return (
    <AppOrdersInterface
      user={user}
      verify={verify}
    />
  );
};

export default AppOrdersContainer;

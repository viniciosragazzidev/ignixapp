import React from "react";
import { SystemInterface } from "../interface/system-interface";
import ProtectRoute from "@/shared/components/wrappers/ProtectRoute";
import { auth } from "@/shared/services/auth";
import { getUserPermissions } from "@/shared/services/casl/actions/get-user-permissions";

export const SystemContainer = async () => {
  const session = await auth();

  const user = session?.user;

  const { can } = getUserPermissions(user?.id || "", user?.role || "MEMBER");

  const verify = can("read", "MainPanel");

  if (!verify) {
    return (
      <>
        <h1>Rota protegida</h1>
      </>
    );
  }
  return (
    // <ProtectRoute role="ADMIN">
    <SystemInterface user={session?.user} />
    // </ProtectRoute>
  );
};

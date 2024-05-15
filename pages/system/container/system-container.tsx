import React from "react";
import { SystemInterface } from "../interface/system-interface";
import ProtectRoute from "@/shared/components/wrappers/ProtectRoute";
import { auth } from "@/shared/services/auth";

export const SystemContainer = async () => {
  const session = await auth();
  return (
    <ProtectRoute role="ADMIN">
      <SystemInterface user={session?.user} />
    </ProtectRoute>
  );
};

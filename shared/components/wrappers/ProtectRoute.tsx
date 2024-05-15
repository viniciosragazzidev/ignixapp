import { auth } from "@/shared/services/auth";
import { AppRole } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const ProtectRoute = async ({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: AppRole;
}) => {
  const session = await auth();

  const user = session?.user;
  if (!user) {
    redirect("/signin");
  }
  if (role && user?.role !== role) {
    redirect("/");
  }

  return <>{children}</>;
};

export default ProtectRoute;

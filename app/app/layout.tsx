import { auth } from "@/shared/services/auth";
import AppMenuAside from "@/pages/(app)/components/AppMenuAside";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AppNavHeader from "@/pages/(app)/components/AppNavHeader";
import { Suspense } from "react";

export default async function AppSistemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  const user = session?.user;
  const cookiesNow = cookies().get("userId");

  if (!user && !cookiesNow) {
    redirect("/signin");
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex">
        <AppMenuAside />
        <div className=" w-full flex flex-col sm:gap-4 sm:pt-4 sm:pl-14">
          <AppNavHeader user={user} />
          {children}
        </div>
      </main>{" "}
    </Suspense>
  );
}

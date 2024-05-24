import { auth } from "@/shared/services/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Suspense } from "react";
import NavbarHeader from "@/__pages/(app)/app/components/NavbarHeader";

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
    <main className=" w-full flex flex-col bg-backgroundLight ">
      <NavbarHeader user={user} />
      {children}
    </main>
  );
}

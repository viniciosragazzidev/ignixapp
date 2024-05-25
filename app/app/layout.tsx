import { auth } from "@/shared/services/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Suspense } from "react";
import NavbarHeader from "@/__pages/(app)/app/components/NavbarHeader";
import { getUserByEmail } from "@/shared/actions/actions";

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

  const userInfos = await getUserByEmail(user?.email || "");

  // if (userInfos.memberships.length === 0) {
  //   redirect("/onboarding");
  // }

  return (
    <main className=" w-full flex flex-col bg-backgroundLight dark:bg-background/50 ">
      <NavbarHeader user={user} />
      {children}
    </main>
  );
}

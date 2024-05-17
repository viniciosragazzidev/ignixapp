import { cookies } from "next/headers";
import { Toaster } from "../../ui/sonner";
import HibridToastClient from "./hibrid-toast-client";

export function HibridToaster() {
  const hibrid = cookies().get("hibrid");
  const sessionToken = cookies().get("authjs.session-token");
  const userId = cookies().get("userId");

  return (
    <>
      <Toaster />
      <HibridToastClient
        sessionToken={sessionToken?.value}
        hibrid={hibrid?.value}
        userId={userId?.value}
      />
    </>
  );
}

export function setHibrid(hibrid: {
  type: "success" | "error" | "signin" | "signout";
  message: string;
  random?: string;
}) {
  cookies().set("hibrid", JSON.stringify({ ...hibrid, random: Date.now() }), {
    path: "/",
    expires: Date.now(),
  });
}

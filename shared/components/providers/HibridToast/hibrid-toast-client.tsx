"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function HibridToastClient(props: {
  hibrid: string | undefined;
  sessionToken: string | undefined;
  userId: string | undefined;
}) {
  const Router = useRouter();
  useEffect(() => {
    if (props.sessionToken?.length! > 0 && props.userId) {
      toast.success("🎉 Logado com sucesso!");
    }
    if (!!props.hibrid) {
      const { type, message } = JSON.parse(props.hibrid);
      console.log(props.hibrid);

      if (type === "success" || type === "signin" || type === "signout") {
        toast.success(message);
        if (type === "signin") {
          console.log("aaa");
        }

        if (type === "signout") {
          Router.push("/signin");
        }
      } else if (type === "error") {
        toast.error(message);
      }
    }
  }, [props.hibrid, props.sessionToken, props.userId]);
  return null;
}

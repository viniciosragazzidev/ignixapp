"use server";
import React from "react";
import { auth } from "@/shared/services/auth";
import { redirect } from "next/navigation";
import { HttpErrorCode } from "@/shared/@enums/enums";
import { SigninAction } from "../actions/SigninAction";
import { signIn } from "@/shared/services/auth";
import { setHibrid } from "@/shared/components/providers/HibridToast";
import { cookies } from "next/headers";
import SigninInterface from "../interface/signin-interface";

const SigninContainer = async () => {
  const session = await auth();
  const cookiesNow = cookies().get("hibrid");
  if (session?.user && !cookiesNow) {
    redirect("/app");
  }

  const sendUser = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      const password = formData.get("password");

      const user = {
        email: email,
        password: password,
      };
      const signinUser = await SigninAction(user);
      const message = signinUser.message;
      const code = signinUser.code;

      if (code === HttpErrorCode.OK) {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        setHibrid({
          type: "signin",
          message: message,
        });

        redirect("/app");
      } else {
        setHibrid({
          type: "error",
          message: message,
        });
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <SigninInterface
      sendUser={sendUser}
      session={session}
    />
  );
};

export default SigninContainer;

"use server";
import React from "react";
import { auth } from "@/shared/services/auth";
import { redirect } from "next/navigation";
import { HttpErrorCode } from "@/shared/@enums/enums";
import { SignupAction } from "../actions/SignupAction";
import { setHibrid } from "@/shared/components/providers/HibridToast";
import { cookies } from "next/headers";
import { SignupInterface } from "../interface/signup-interface";
import { revalidatePath } from "next/cache";

const SignupContainer = async () => {
  const session = await auth();
  const cookiesNow = cookies().get("hibrid");
  if (session?.user && !cookiesNow) {
    redirect("/app");
  }

  const createUser = async (formData: FormData) => {
    "use server";
    try {
      const name = formData.get("name");
      const surname = formData.get("surname");
      const email = formData.get("email");
      const password = formData.get("password");

      const user = {
        name: name,
        surname: surname,
        email: email,
        password: password,
      };
      console.log(user);

      const signupUser = await SignupAction(user);
      const message = signupUser.message;
      const code = signupUser.code;

      if (code === HttpErrorCode.OK) {
        revalidatePath("/signin");

        redirect("/signin");
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
    <SignupInterface
      createUser={createUser}
      session={session}
    />
  );
};

export default SignupContainer;

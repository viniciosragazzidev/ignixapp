import React from "react";
import { SigninInterface } from "../interface/signin-interface";
import { auth } from "@/shared/services/auth";
import { redirect } from "next/navigation";

const SigninContainer = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return <SigninInterface />;
};

export default SigninContainer;

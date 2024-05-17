"use server";

import { signIn } from "@/shared/services/auth";
import React from "react";

const SigninGoogle = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/app" });
      }}
    >
      <button type="submit">Sign in Google</button>
    </form>
  );
};

export default SigninGoogle;

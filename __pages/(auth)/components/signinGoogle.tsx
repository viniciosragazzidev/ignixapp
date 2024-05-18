import { signIn } from "next-auth/react";
import React from "react";

const SigninGoogle = () => {
  return (
    <form
      action={() => {
        signIn("google", { redirectTo: "/app" });
      }}
    >
      <button type="submit">Sign in Google</button>
    </form>
  );
};

export default SigninGoogle;

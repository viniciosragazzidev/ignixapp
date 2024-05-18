"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SigninGoogle = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("google", { redirectTo: "/app" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Sign in Google</button>
    </form>
  );
};

export default SigninGoogle;

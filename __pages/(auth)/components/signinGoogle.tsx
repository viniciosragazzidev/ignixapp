"use client";
import { Button } from "@/shared/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

const SigninGoogle = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("google", { redirectTo: "/app" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        variant="default"
        className="w-full bg-secondary-foreground hover:bg-secondary-foreground/60"
      >
        Entrar com Google
      </Button>
    </form>
  );
};

export default SigninGoogle;

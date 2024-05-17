"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const SignoutButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <form
      className={className}
      action={() => {
        toast.success("👋 Usuário deslogado com sucesso!");
        signOut({
          redirect: true,
          // redirectTo: "/signin",
        });
      }}
    >
      <button
        className={className}
        type="submit"
      >
        {children}
      </button>
    </form>
  );
};

export default SignoutButton;

"use client";
import { signIn } from "next-auth/react";
import React, { useCallback } from "react";
import { useFormStatus } from "react-dom";
import SigninButton from "../components/signin_button";

export const SigninInterface = () => {
  const onSubmitData = useCallback((formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };

    signIn("credentials", {
      ...user,
      redirect: true,
      callbackUrl: "/",
    });
  }, []);

  return (
    <>
      <form
        action={onSubmitData}
        className="w-full h-full flex flex-col justify-center max-w-lg  pt-4 "
      >
        <div className="space-y-7 flex flex-col justify-center w-full ">
          <div className="grid w-full max-w-lg items-center gap-2 relative">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className="grid w-full max-w-lg items-center gap-2 relative">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
        </div>
        <SigninButton />
      </form>

      <span className="py-5">or</span>

      <button
        type="button"
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl: "/",
          })
        }
        className="w-full   max-w-lg font-semibold  mt-10"
      >
        Entrar com Google
      </button>
    </>
  );
};

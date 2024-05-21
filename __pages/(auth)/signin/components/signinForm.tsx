"use server";
import React from "react";
import SubmitButton from "../../components/submitButton";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Link } from "next-view-transitions";
import { Button } from "@/shared/components/ui/button";
import SigninGoogle from "../../components/signinGoogle";

const SigninForm = ({ session, sendUser }: { session: any; sendUser: any }) => {
  return (
    <div className="mx-auto grid w-full place-content-center h-min max-w-96   gap-6 text-muted">
      <div className="grid gap-2 text-start">
        <h1 className="text-3xl font-bold">Faça Login</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Digite suas informações abaixo para entrar na sua conta.
        </p>
      </div>
      <form
        action={sendUser}
        className="grid gap-4"
      >
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            required
          />
        </div>
        <SubmitButton />
      </form>
      <SigninGoogle />
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="#"
          className="underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;

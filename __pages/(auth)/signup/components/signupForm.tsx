"use server";
import React from "react";
import SubmitButton from "../../components/submitButton";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Link } from "next-view-transitions";
import { Button } from "@/shared/components/ui/button";
import SigninGoogle from "../../components/signinGoogle";

const SigninForm = ({
  session,
  createUser,
}: {
  session: any;
  createUser: any;
}) => {
  return (
    <div className="mx-auto grid w-full place-content-center h-min max-w-96   gap-6 text-muted">
      <div className="grid gap-2 text-start">
        <h1 className="text-3xl font-bold">Crie sua conta</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Digite suas informações abaixo para criar sua conta.
        </p>
      </div>
      <form
        action={createUser}
        className="grid gap-4"
      >
        <div className="flex gap-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Joe"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              type="text"
              id="surname"
              name="surname"
              placeholder="Doe"
              required
            />
          </div>
        </div>
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
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            name="password"
            required
          />
        </div>
        <SubmitButton submit_text="Criar conta" />
      </form>
      <SigninGoogle />
      <div className="mt-4 text-center text-sm flex items-center gap-1 justify-center">
        Ja tem uma conta?
        <Link
          href="/signin"
          className="underline"
        >
          Faca Login
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;

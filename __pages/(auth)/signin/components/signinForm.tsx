"use server";
import React from "react";
import SubmitButton from "../../components/submitButton";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";

const SigninForm = ({ session, sendUser }: { session: any; sendUser: any }) => {
  return (
    <form
      action={sendUser}
      className="w-full h-full flex flex-col justify-center max-w-lg  pt-4 "
    >
      <div className="space-y-7 flex flex-col justify-center w-full ">
        <div className="grid w-full max-w-lg items-center gap-2 relative">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email@exemplo.com"
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-2 relative">
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </div>
      </div>
      {!session?.user! && <SubmitButton />}
    </form>
  );
};

export default SigninForm;

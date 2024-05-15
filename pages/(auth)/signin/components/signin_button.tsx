"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { BiLoader } from "react-icons/bi";

const SigninButton = () => {
  const { pending, data } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full   max-w-lg font-semibold  mt-10"
    >
      {pending ? <BiLoader className="animate-spin" /> : "Entrar"}
    </button>
  );
};

export default SigninButton;

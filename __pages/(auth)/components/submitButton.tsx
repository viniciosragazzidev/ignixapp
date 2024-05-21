"use client";
import { Button } from "@/shared/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import { BiLoader } from "react-icons/bi";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-secondary hover:bg-secondary/80 disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <>
          <BiLoader className="animate-spin" />{" "}
        </>
      ) : (
        <>Entrar</>
      )}
    </Button>
  );
};

export default SubmitButton;

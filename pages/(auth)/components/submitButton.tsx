"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { BiLoader } from "react-icons/bi";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center  max-w-xs font-semibold bg-primary text-slate-200 rounded-md self-center py-2  my-10  disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <>
          <BiLoader className="animate-spin" />{" "}
        </>
      ) : (
        <>Signin</>
      )}
    </button>
  );
};

export default SubmitButton;

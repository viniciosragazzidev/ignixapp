import React from "react";
import SessionProviderApp from "./SessionProvider";
import { Toaster } from "../ui/sonner";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProviderApp>
        {" "}
        <Toaster />
        {children}
      </SessionProviderApp>
    </>
  );
};

export default RootProvider;

import React from "react";
import SessionProviderApp from "./SessionProvider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProviderApp>{children}</SessionProviderApp>
    </>
  );
};

export default RootProvider;

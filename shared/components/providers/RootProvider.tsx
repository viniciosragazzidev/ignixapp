import React, { Suspense } from "react";
import SessionProviderApp from "./SessionProvider";
import { Toaster } from "../ui/sonner";
import { HibridToaster } from "./HibridToast";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "../ui/tooltip";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
      >
        <TooltipProvider>
          <SessionProviderApp>
            {" "}
            <HibridToaster />
            {children}
          </SessionProviderApp>
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
};

export default RootProvider;

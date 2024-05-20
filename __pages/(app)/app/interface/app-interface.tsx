import * as React from "react";

import { ModeToggle } from "@/shared/components/ThemeSwitch";
import CardResumeValue from "../../components/CardResumeValue";

export function AppInterface({ user, verify }: { user: any; verify: boolean }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="w-full min-h-20 bg-primary space-y-2 pb-4 rounded-b-3xl">
        <div className="container py-4 space-y-4">
          <h1 className="text-muted text-lg font-semibold">Resumo Geral</h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <CardResumeValue />
            <CardResumeValue />
            <CardResumeValue />
            <CardResumeValue className="md:col-span-4 lg:col-span-1" />
          </div>
        </div>
      </header>
    </div>
  );
}

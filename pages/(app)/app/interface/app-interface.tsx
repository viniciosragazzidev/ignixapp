import * as React from "react";

import { ModeToggle } from "@/shared/components/ThemeSwitch";

export function AppInterface({ user, verify }: { user: any; verify: boolean }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 py-4">
      <h1>App Home</h1>
    </div>
  );
}

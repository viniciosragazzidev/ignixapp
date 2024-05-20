"use client";
import * as React from "react";

export function AppOrdersInterface({
  user,
  verify,
}: {
  user: any;
  verify: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="">
      <header className="w-full h-20 bg-primary"></header>
    </div>
  );
}

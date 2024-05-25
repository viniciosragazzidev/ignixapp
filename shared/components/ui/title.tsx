import { cn } from "@/shared/lib/utils";
import React from "react";

export interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-primary text-lg font-semibold dark:text-accent-foreground ",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;

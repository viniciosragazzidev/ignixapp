import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-primary-foreground dark:text-accent-foreground shadow-sm text-[11px] bg-primary hover:bg-primary/95",
        custom:
          "border-transparent  shadow-sm text-[11px] bg-primary hover:bg-primary/95",
        success:
          "border-transparent bg-success text-success-foreground dark:bg-accent-foreground dark:text-primary shadow-sm text-[11px] hover:bg-success/80",
        secondary:
          "border-transparent bg-secondary text-primary-foreground  dark:text-accent-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm text-[11px] hover:bg-destructive/80",
        outline: "text-foreground dark:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

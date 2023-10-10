import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(
        cva(
          "absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary-light text-xs",
          {
            variants: {
              variant: {
                default: "",
              },
            },
            defaultVariants: {
              variant: "default",
            },
          },
        )({ variant }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge };

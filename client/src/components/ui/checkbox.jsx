import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "../../lib/utils";

const Checkbox = React.forwardRef(
  ({ className, color = "", circle = false, ...props }, ref) => {
    const colorVariants = {
      red: "bg-[red] text-white",
      blue: "bg-[blue] text-white",
      black: "bg-[black] text-white",
    };

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer h-4 w-4 border border-primary  disabled:cursor-not-allowed disabled:opacity-50  ",
          className,
          color &&
            `mr-0 h-6 w-6 rounded-full border-none opacity-100 ${colorVariants[color]}`,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-current",
            color &&
              `h-full w-full rounded-full outline outline-1 outline-offset-2 outline-[black]`,
          )}
        >
          {color ? null : circle ? null : <Check className="h-4 w-4" />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

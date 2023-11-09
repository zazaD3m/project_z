import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "../../lib/utils";

/**
 * @type React.FC<ButtonPropTypes>
 * @param  variant "default" | "ghost" | "link" | "secondary"
 * @param  size "xs" | "sm" | "default" | "lg" | "xl" | "link"
 * @param  asChild
 * @param  className "className"
 */
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          cva(
            "inline-flex items-center justify-center whitespace-nowrap rounded-full text-center text-sm font-medium transition-all focus-visible:outline-none active:animate-button-pop disabled:pointer-events-none disabled:opacity-50",
            {
              variants: {
                variant: {
                  default:
                    "bg-primary-light text-primary-foreground lg:hover:bg-yellow lg:hover:text-primary",
                  ghost: "rounded-none bg-transparent",
                  link: "rounded-none bg-transparent underline-offset-4 lg:hover:underline",
                  secondary:
                    "bg-yellow text-black lg:hover:bg-primary-light lg:hover:text-primary-foreground",
                },
                size: {
                  default: "px-5 py-2.5",
                  xs: "px-2.5 py-2 text-xs",
                  sm: "px-3 py-2",
                  lg: "px-5 py-3 text-base",
                  xl: "px-6 py-3.5 text-base",
                  icon: "h-9 w-9",
                  link: "w-min p-0",
                },
              },
              defaultVariants: {
                variant: "default",
                size: "default",
              },
            },
          )({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

const ButtonPropTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.propTypes = ButtonPropTypes;

export { Button };

import * as React from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "../../lib/utils";

/**
 * @type React.FC<InputPropTypes>
 * @param  variant "error" | "success"
 * @param  size "sm"
 * @param  label "label string"
 * @param  className "className"
 */
const Input = React.forwardRef(
  ({ className, type = "text", variant, label, size, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          placeholder=" "
          className={cn(
            cva(
              `peer block w-full rounded-lg border-2 border-gray-300 px-2.5 pb-2.5 pt-4 text-sm  text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`,
              {
                variants: {
                  variant: {
                    default: "",
                    error: "border-red-600 focus:border-blue-600",
                    success: "border-green-600 focus:border-blue-600",
                  },
                  size: {
                    default: "",
                    sm: "pb-1.5 pt-3",
                  },
                },
                defaultVariants: {
                  variant: "default",
                  size: "default",
                },
              },
            )({ variant, size, className }),
          )}
          {...props}
        />
        <label
          htmlFor={props.id}
          className={cn(
            cva(
              `absolute left-1.5 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-t-sm bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`,
              {
                variants: {
                  variant: {
                    default: "",
                    error: "text-red-600",
                    success: "text-green-600",
                  },
                  size: {
                    default: "",
                    sm: "left-1.5 top-1 -translate-y-3 peer-focus:top-1 peer-focus:-translate-y-3",
                  },
                },
                defaultVariants: {
                  variant: "default",
                  size: "default",
                },
              },
            )({ variant, size }),
          )}
        >
          {label}
        </label>
        {variant === "success" || variant === "error" ? (
          <p
            className={cn(`hidden bg-white`, {
              "absolute -bottom-1.5 right-3 z-50 block px-1 text-xs text-green-600":
                variant === "success",
              "absolute -bottom-1.5 right-3 z-50 block px-1 text-xs text-red-600":
                variant === "error",
            })}
          >
            {variant === "error"
              ? label + " " + "Is Required"
              : variant === "success"
              ? label + " " + "Good"
              : null}
          </p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

const InputPropTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  bg: PropTypes.string,
  label: PropTypes.string,
};

Input.propTypes = InputPropTypes;

export { Input };

import { badgeVariants } from "./badgeVariants";
import { cn } from "../../lib/utils";

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };

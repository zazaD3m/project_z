import { Input } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";

const StoreFilterPrice = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <h4 className="">Price</h4>
      <div className="flex items-center gap-4 pb-2 pt-2">
        <span>$</span>
        <Input
          label="from"
          autoFocus={false}
          size="sm"
          className="opacity-70"
        />
        <span>$</span>
        <Input label="to" autoFocus={false} size="sm" className="opacity-70" />
      </div>
    </div>
  );
};
export default StoreFilterPrice;

import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

const StoreFilterCheckbox = ({ data: { title, label }, color }) => {
  return (
    <li className="group flex w-min items-center space-x-2">
      {color ? (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Checkbox
                color={color ? color : ""}
                id={`productFilter-${title}`}
                className="mr-2 cursor-pointer opacity-50 data-[state=checked]:opacity-100 lg:group-hover:opacity-80"
              />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <>
          <Checkbox
            id={`productFilter-${title}`}
            className="mr-2 cursor-pointer opacity-50 data-[state=checked]:opacity-100 lg:group-hover:opacity-80"
          />
          <Label
            htmlFor={`productFilter-${title}`}
            className="cursor-pointer text-base opacity-50 peer-data-[state=checked]:opacity-100 lg:group-hover:opacity-80"
          >
            {label}(25)
          </Label>
        </>
      )}
    </li>
  );
};
export default StoreFilterCheckbox;

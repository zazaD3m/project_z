import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "../../../components/ui/Command";
import { Button } from "../../../components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/Popover";
import { cn } from "../../../lib/utils";

import { Link } from "react-router-dom";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

const ProductFormColorField = ({ control, productColorsArray, form }) => {
  return (
    <FormField
      control={control}
      name="productColor"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-semibold">Color</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? productColorsArray.find(
                        (productColor) => productColor.name === field.value,
                      )?.label
                    : "Select color"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search color..." />
                <CommandEmpty className="px-8 py-4">
                  <p className="mb-2 text-center text-sm">No colors found...</p>
                  <Button asChild className="w-full" variant="ghost">
                    <Link to="/catalog/colors/addcolor" target="_blank">
                      Add new color
                    </Link>
                  </Button>
                </CommandEmpty>
                <CommandGroup>
                  {productColorsArray.map((color) => (
                    <CommandItem
                      value={color.label}
                      key={color.id}
                      onSelect={() => {
                        form.setValue("productColor", color.name, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          color.name === field.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {color.label}
                    </CommandItem>
                  ))}
                  <CommandSeparator />
                  <CommandItem className="justify-center">
                    <Link
                      to="/catalog/colors/addcolor"
                      target="_blank"
                      className="w-full text-center"
                    >
                      Add new
                    </Link>
                  </CommandItem>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default ProductFormColorField;

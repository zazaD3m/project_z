import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/Form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "../../../../components/ui/Command";
import { Button } from "../../../../components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/Popover";
import { cn } from "../../../../lib/utils";

import { Link } from "react-router-dom";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

const ProductFormBrandField = ({ control, productBrandsArray, form }) => {
  return (
    <FormField
      control={control}
      name="productBrand"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-semibold">Brand</FormLabel>
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
                    ? productBrandsArray.find(
                        (productBrand) => productBrand.name === field.value,
                      )?.label
                    : "Select brand"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandEmpty className="px-8 py-4">
                  <p className="mb-2 text-center text-sm">No brands found...</p>
                  <Button asChild className="w-full" variant="ghost">
                    <Link to="/catalog/brands/addbrand" target="_blank">
                      Add new brand
                    </Link>
                  </Button>
                </CommandEmpty>
                <CommandGroup>
                  {productBrandsArray.map((brand) => (
                    <CommandItem
                      value={brand.label}
                      key={brand.id}
                      onSelect={() => {
                        form.setValue("productBrand", brand.name, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          brand.name === field.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {brand.label}
                    </CommandItem>
                  ))}
                  <CommandSeparator />
                  <CommandItem className="justify-center">
                    <Link
                      to="/catalog/brands/addbrand"
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
export default ProductFormBrandField;

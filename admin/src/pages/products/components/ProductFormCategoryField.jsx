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

const ProductFormCategoryField = ({
  control,
  productCategoriesArray,
  form,
}) => {
  return (
    <FormField
      control={control}
      name="productCategory"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg font-semibold">Category</FormLabel>
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
                    ? productCategoriesArray.find(
                        (productCategory) =>
                          productCategory.name === field.value,
                      )?.label
                    : "Select category"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandEmpty className="px-8 py-4">
                  <p className="mb-2 text-center text-sm">
                    No category found...
                  </p>
                  <Button asChild className="w-full" variant="ghost">
                    <Link to="/catalog/categories/addcategory" target="_blank">
                      Add new category
                    </Link>
                  </Button>
                </CommandEmpty>
                <CommandGroup>
                  {productCategoriesArray.map((category) => (
                    <CommandItem
                      value={category.label}
                      key={category.id}
                      onSelect={() => {
                        form.setValue("productCategory", category.name, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          category.name === field.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                  <CommandSeparator />
                  <CommandItem className="justify-center">
                    <Link
                      to="/catalog/categories/addcategory"
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
export default ProductFormCategoryField;

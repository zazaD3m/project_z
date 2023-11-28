import { Fragment } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/RadioGroup";

const ProductFormParentCategory = ({
  control,
  setProductCategoriesArray,
  productCategoriesArray,
  productCategoriesArrayInitial,
  resetField,
  getValues,
}) => {
  const parentCategoriesArray = [
    { id: 1, value: "men", label: "Men" },
    { id: 2, value: "women", label: "Women" },
    { id: 3, value: "kids", label: "Kids" },
  ];

  return (
    <FormField
      control={control}
      name="productParentCategory"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <p className="text-lg font-semibold">Parent category</p>
          <FormControl>
            <RadioGroup
              onValueChange={(event) => {
                setProductCategoriesArray(
                  productCategoriesArrayInitial.filter((category) =>
                    category.parentCategory.includes(event),
                  ),
                );

                const selectedCategory = getValues("productCategory");
                if (selectedCategory) {
                  !productCategoriesArray
                    .find((el) => el.name === selectedCategory)
                    .parentCategory.includes(event) &&
                    resetField("productCategory");
                }

                field.onChange(event);
              }}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {parentCategoriesArray.map((radioItem) => (
                <Fragment key={radioItem.id}>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={radioItem.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {radioItem.label}
                    </FormLabel>
                  </FormItem>
                </Fragment>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default ProductFormParentCategory;

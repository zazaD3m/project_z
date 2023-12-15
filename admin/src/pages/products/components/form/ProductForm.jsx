import ProductFormTextInput from "./ProductFormTextInput";
import ProductFormParentCategory from "./ProductFormParentCategory";
import ProductFormCategoryField from "./ProductFormCategoryField";
import ProductFormBrandField from "./ProductFormBrandField";
import ProductFormColorField from "./ProductFormColorField";

import { Button } from "../../../../components/ui/Button";
import { Form } from "../../../../components/ui/Form";
import { Card } from "../../../../components/ui/Card";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ProductFormImageField from "./ProductFormImageField";

const productCategoriesArrayInitial = [
  { id: 0, label: "Skirt", name: "skirt", parentCategory: ["men"] },
  { id: 1, label: "Blouse", name: "blouse", parentCategory: ["men", "women"] },
  {
    id: 2,
    label: "Swimwear",
    name: "swimwear",
    parentCategory: ["men", "women", "kids"],
  },
  { id: 3, label: "Jeans", name: "jeans", parentCategory: ["men", "kids"] },
  { id: 4, label: "Shirt", name: "shirt", parentCategory: ["women"] },
];

const productBrandsArray = [
  { id: 0, label: "Adidas", name: "adidas" },
  { id: 1, label: "Nike", name: "nike" },
  { id: 2, label: "Zara", name: "zara" },
  { id: 3, label: "Bershka", name: "bershka" },
  { id: 4, label: "Puma", name: "puma" },
];

const productColorsArray = [
  { id: 0, label: "Blue", name: "blue" },
  { id: 1, label: "Red", name: "red" },
  { id: 2, label: "Black", name: "black" },
  { id: 3, label: "Green", name: "green" },
  { id: 4, label: "Yellow", name: "yellow" },
];

let renderCount = 0;

const schema = yup.object().shape({
  productTitle: yup.string().required("Product title is required"),
  productDesc: yup.string().required("Product description is required"),
  productPrice: yup
    .number()
    .typeError("Product price is required")
    .positive("Product price must be greater than 0"),
  productParentCategory: yup
    .string()
    .required("Product parent category is required"),
  productCategory: yup.string().required("Product category is required"),
  productBrand: yup.string().required("Product brand is required"),
  productColor: yup.string().required("Product color is required"),
  productFirstImage: yup.mixed().required("Add first picture"),
  productSecondImage: yup.mixed().required("Add second picture"),
});

const ProductForm = ({ page }) => {
  renderCount++;
  const [productCategoriesArray, setProductCategoriesArray] = useState(
    productCategoriesArrayInitial,
  );

  const form = useForm({
    defaultValues: {
      productTitle: page === "edit" ? "adidas" : "",
      productDesc: page === "edit" ? "asdfhsaf" : "",
      productPrice: page === "edit" ? 120 : "",
      productParentCategory: "women",
      productCategory: page === "edit" ? "jeans" : "",
      productBrand: page === "edit" ? "adidas" : "",
      productColor: page === "edit" ? "red" : "",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { handleSubmit, control, resetField, getValues, setValue, watch } =
    form;

  const watchFirstImage = watch("productFirstImage");
  const watchSecondImage = watch("productSecondImage");
  const watchThirdImage = watch("productThirdImage");
  const watchForthImage = watch("productForthImage");

  const productImagesArray = [
    {
      id: 0,
      label: "First Image",
      name: "productFirstImage",
      watchImage: watchFirstImage,
    },
    {
      id: 1,
      label: "Second Image",
      name: "productSecondImage",
      watchImage: watchSecondImage,
    },
    {
      id: 2,
      label: "Third Image",
      name: "productThirdImage",
      watchImage: watchThirdImage,
    },
    {
      id: 3,
      label: "Forth Image",
      name: "productForthImage",
      watchImage: watchForthImage,
    },
  ];

  function onSubmit(data) {
    console.log(URL.createObjectURL(data.productFirstImage));

    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <h1>render cound: {renderCount / 2}</h1>
        <div className="">
          <ProductFormTextInput
            control={control}
            name="productTitle"
            placeholder="Title"
          />
        </div>
        <div className="">
          <ProductFormTextInput
            control={control}
            name="productDesc"
            placeholder="Description"
          />
        </div>
        <div className="">
          <ProductFormTextInput
            control={control}
            name="productPrice"
            placeholder="Price"
            inputType="number"
          />
        </div>

        <div className="flex justify-between">
          <div>
            <ProductFormParentCategory
              control={control}
              setProductCategoriesArray={setProductCategoriesArray}
              productCategoriesArray={productCategoriesArray}
              productCategoriesArrayInitial={productCategoriesArrayInitial}
              resetField={resetField}
              getValues={getValues}
            />
          </div>
          <div>
            <ProductFormCategoryField
              control={control}
              productCategoriesArray={productCategoriesArray}
              form={form}
            />
          </div>
          <div>
            <ProductFormBrandField
              form={form}
              control={control}
              productBrandsArray={productBrandsArray}
            />
          </div>
          <div>
            <ProductFormColorField
              form={form}
              control={control}
              productColorsArray={productColorsArray}
            />
          </div>
        </div>
        <Card className="flex justify-between p-4">
          {productImagesArray.map((el) => (
            <ProductFormImageField
              key={el.id}
              control={control}
              label={el.label}
              name={el.name}
              watch={watch}
              resetField={resetField}
              watchImage={el.watchImage}
              setValue={setValue}
            />
          ))}
        </Card>
        <Button type="submit">Add product</Button>
      </form>
      <DevTool control={control} />
    </Form>
  );
};
export default ProductForm;

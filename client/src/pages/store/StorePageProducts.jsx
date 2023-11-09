import { useOutletContext, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import ProductCard from "../../components/ProductCard";
import { products } from "../../assets/productDetails";
import { useEffect } from "react";

const validCategories = ["smartphone", "laptop", "monitor"];
const validBrands = [
  "samsung",
  "apple",
  "dell",
  "acer",
  "oneplus",
  "hp",
  "lenovo",
  "asus",
  "lg",
  "xiaomi",
  "sony",
  "microsoft",
  "benq",
  "oppo",
  "motorola",
];

const StorePageProducts = () => {
  let { category, brand } = useParams();

  const [productListDetails, setProductListDetails] = useOutletContext();
  return (
    <>
      {products
        .filter((productToFilter) => {
          if (category) {
            if (brand) {
              return (
                productToFilter.category.toLowerCase() ===
                  category.toLowerCase() &&
                productToFilter.brand.toLowerCase() === brand.toLowerCase()
              );
            }
            return (
              productToFilter.category.toLowerCase() === category.toLowerCase()
            );
          }
          return productToFilter;
        })
        .map((product) => (
          <div
            key={product.id}
            className={cn("", {
              "h-[325px] sm:h-[420px] lg:h-[364px] xl:h-[420px]":
                productListDetails.numOfColumns === "max",
              "h-[350px] sm:h-[540px] xl:h-[560px]":
                productListDetails.numOfColumns === "min",
              "h-[504px]": productListDetails.numOfColumns === "mid",
            })}
          >
            <ProductCard data={product} className="my-0 sm:mt-0" />
          </div>
        ))}
    </>
  );
};
export default StorePageProducts;

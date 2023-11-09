import ProductCard from "../../../components/ProductCard";
import { cn } from "../../../lib/utils";
import StoreBottomNav from "../components/StoreBottomNav";
import StoreTopNav from "../components/StoreTopNav";

const StoreMainSection = ({ productListDetails, className }) => {
  return (
    <>
      <div className="flex flex-col items-center lg:px-2.5">
        <StoreTopNav productListDetails={productListDetails} />
        <section className="w-full">
          <div
            className={cn("my-4 grid gap-x-2.5 gap-y-4 lg:gap-x-4", className, {
              "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5":
                productListDetails.productListDetails.numOfColumns === "max",
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2":
                productListDetails.productListDetails.numOfColumns === "min",
              "grid-cols-3":
                productListDetails.productListDetails.numOfColumns === "mid",
            })}
          >
            {[...Array(20).keys()].map((item) => (
              <div
                key={item}
                className={cn("", {
                  "h-[325px] sm:h-[420px] lg:h-[364px] xl:h-[420px]":
                    productListDetails.productListDetails.numOfColumns ===
                    "max",
                  "h-[350px] sm:h-[540px] xl:h-[560px]":
                    productListDetails.productListDetails.numOfColumns ===
                    "min",
                  "h-[504px]":
                    productListDetails.productListDetails.numOfColumns ===
                    "mid",
                })}
              >
                <ProductCard className="my-0 sm:mt-0" />
              </div>
            ))}
          </div>
        </section>
        <StoreBottomNav />
      </div>
    </>
  );
};

export default StoreMainSection;

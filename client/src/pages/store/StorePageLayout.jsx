import { useState } from "react";
import StoreSideSection from "./container/StoreSideSection";
import StoreTopNav from "./components/StoreTopNav";
import { cn } from "../../lib/utils";
import { Outlet, useParams } from "react-router-dom";
import StoreBottomNav from "./components/StoreBottomNav";

const StorePageLayout = () => {
  let { productId } = useParams();
  const [productListDetails, setProductListDetails] = useState({
    numOfColumns: "max",
    sortType: "date-desc",
  });

  return (
    <>
      {productId ? (
        <Outlet />
      ) : (
        <section className="container flex bg-bggray pb-12 pt-7">
          <aside className="hidden basis-1/5 lg:block">
            <StoreSideSection />
          </aside>
          <main className="basis-full lg:basis-4/5">
            <div className="flex flex-col items-center lg:px-2.5">
              <StoreTopNav
                productListDetails={productListDetails}
                setProductListDetails={setProductListDetails}
              />
              <section className="w-full">
                <div
                  className={cn("my-4 grid gap-x-2.5 gap-y-4 lg:gap-x-4", "", {
                    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5":
                      productListDetails.numOfColumns === "max",
                    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2":
                      productListDetails.numOfColumns === "min",
                    "grid-cols-3": productListDetails.numOfColumns === "mid",
                  })}
                >
                  <Outlet
                    context={[productListDetails, setProductListDetails]}
                  />
                </div>
              </section>
              <StoreBottomNav />
            </div>
          </main>
        </section>
      )}
    </>
  );
};
export default StorePageLayout;

import { useState } from "react";
import StoreMainSection from "./container/StoreMainSection";
import StoreSideSection from "./container/StoreSideSection";

const StorePage = () => {
  const [productListDetails, setProductListDetails] = useState({
    numOfColumns: "max",
    sortType: "date-desc",
  });

  return (
    <>
      <section className="container flex bg-bggray pb-12 pt-7">
        <aside className="hidden basis-1/5 lg:block">
          <StoreSideSection />
        </aside>
        <main className="basis-full lg:basis-4/5">
          <StoreMainSection
            productListDetails={{ productListDetails, setProductListDetails }}
          />
        </main>
      </section>
    </>
  );
};
export default StorePage;

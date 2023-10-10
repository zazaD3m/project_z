import StoreFilterBrand from "./StoreFilterBrand";
import StoreFilterColor from "./StoreFilterColor";
import StoreFilterPrice from "./StoreFilterPrice";
import StoreFilterSize from "./StoreFilterSize";

const StoreSideFilter = () => {
  return (
    <section>
      <h2 className="mb-4 tracking-wide">Filter By</h2>
      <StoreFilterPrice className="ml-2" />
      <StoreFilterSize className="my-2 ml-2" />
      <StoreFilterBrand className="mb-2 ml-2" />
      <StoreFilterColor className="ml-2" />
    </section>
  );
};
export default StoreSideFilter;

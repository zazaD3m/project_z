import ProductCard from "../../components/ProductCard";
import { products } from "../../assets/productDetails";

const Wishlist = () => {
  return (
    <>
      <section className="container bg-bggray pb-12 pt-7">
        <section className="grid grid-cols-2 gap-x-2.5 gap-y-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
          {[products[0], products[3], products[11]].map((product) => (
            <div
              key={product.id}
              className="h-[325px] sm:h-[420px] lg:h-[384px] xl:h-[400px]"
            >
              <ProductCard data={product} className="my-0 sm:mt-0" />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};
export default Wishlist;

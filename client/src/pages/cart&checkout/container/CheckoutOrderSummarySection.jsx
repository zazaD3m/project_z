import { Fragment } from "react";
import { products } from "../../../assets/productDetails";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import CartCheckoutDetailedPrice from "../components/CartCheckoutDetailedPrice";
import CartProductCard from "../components/CartProductCard";

const CheckoutOrderSummarySection = ({ className }) => {
  const data = products.filter((product, i) => i < 3);

  return (
    <section className={className}>
      <h2 className="mb-4 text-xl">Order summary</h2>
      <div className="rounded-xl bg-background shadow-sm">
        <ul className="">
          {data.map((product, i) => (
            <Fragment key={product.id}>
              <li>
                <CartProductCard className="pl-2" product={product} />
              </li>
              {i < data.length - 1 && <Separator className="bg-gray-300" />}
            </Fragment>
          ))}
        </ul>
        <Separator className="mb-6 mt-5 bg-[#DDDDDD]" />
        <div className="px-4">
          <CartCheckoutDetailedPrice />
        </div>
        <Separator className="mb-6 mt-1 bg-gray-300" />
        <div className="flex items-center justify-center px-4 pb-6">
          <Button size="lg" className="w-full">
            Confirm Order
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CheckoutOrderSummarySection;

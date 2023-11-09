import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import CartProductCard from "./components/CartProductCard";
import { Separator } from "../../components/ui/separator";
import { products } from "../../assets/productDetails";
import CartCheckoutDetailedPrice from "./components/CartCheckoutDetailedPrice";

const Cart = () => {
  const data = products.filter((product, i) => i < 3);

  return (
    <section className="container flex flex-col items-center bg-bggray pb-12 pt-4 lg:px-16 xl:px-56">
      <h1 className="mt-4 w-full text-3xl font-medium sm:max-w-xl sm:text-4xl lg:max-w-none">
        Shopping Cart
      </h1>
      <div className="flex w-full flex-col sm:max-w-xl lg:max-w-none lg:flex-row lg:gap-x-16">
        <section className="mb-10 mt-8  w-full border-b border-t border-[#DDDDDD] py-4 lg:w-3/5">
          <ul>
            {data.map((product, i) => (
              <li key={product.id}>
                <CartProductCard product={product} />
                {i < data.length - 1 && (
                  <Separator className="mx-auto w-5/6 bg-[#DDDDDD]" />
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full lg:mt-8 lg:w-2/5">
          <div className="rounded-xl bg-background p-4 pt-6 shadow-sm">
            <h2 className="mb-4 text-xl">Order Summary</h2>
            <CartCheckoutDetailedPrice />
            <div className="px-1">
              <Button asChild size="xl" className="mb-2 w-full rounded-sm">
                <Link to="checkout">Checkout</Link>
              </Button>
              <p className="text-center">
                or{" "}
                <Button asChild variant="link" size="link">
                  <Link to="/store">Continue Shopping</Link>
                </Button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Cart;

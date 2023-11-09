import { Link } from "react-router-dom";
import CartModalProductCard from "./CartModalProductCard";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SheetClose } from "./ui/sheet";
import { products } from "../assets/productDetails";

const CartModal = () => {
  const data = products.filter((product, i) => i < 5);
  return (
    <section className="h-full w-full">
      <h1 className="absolute left-4 top-4">My Cart</h1>
      <ul>
        {data.map((product, i) => (
          <li key={product.id}>
            {i < 1 && <Separator className="mx-auto mt-2 w-3/4 bg-[#DDDDDD]" />}
            <CartModalProductCard product={product} />
            {i < 4 && <Separator className="mx-auto w-3/4 bg-[#DDDDDD]" />}
          </li>
        ))}
      </ul>
      <div className="border-t border-t-[#DDDDDD] bg-bggray">
        <div className="flex justify-between border-b border-b-[#DDDDDD] px-5 py-3.5 text-sm font-medium">
          <div className="">
            <h2 className="leading-6">Total Item</h2>
            <span className="text-sm font-light leading-6">5</span>
          </div>
          <div className="">
            <h2 className="leading-6">Subtotal</h2>
            <span className="block text-right text-sm font-light leading-6">
              $540.00
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-x-2 px-2.5 py-5">
          <SheetClose asChild>
            <Button
              variant="ghost"
              asChild
              className="w-full max-w-[160px] rounded-full bg-primary-light font-normal tracking-wider text-primary-foreground lg:transition-opacity lg:hover:opacity-90"
            >
              <Link to="cart">View Cart</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="ghost"
              asChild
              className="w-full max-w-[160px] rounded-full bg-yellow font-normal tracking-wider text-black lg:transition-opacity lg:hover:opacity-70"
            >
              <Link to="/cart/checkout">Check Out</Link>
            </Button>
          </SheetClose>
        </div>
      </div>
    </section>
  );
};
export default CartModal;

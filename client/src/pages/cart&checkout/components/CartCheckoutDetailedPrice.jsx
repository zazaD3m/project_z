import { Separator } from "../../../components/ui/separator";

const CartCheckoutDetailedPrice = () => {
  return (
    <>
      <div className="flex justify-between">
        <span className="mb-2 font-light">Subtotal</span>
        <span>$99.00</span>
      </div>
      <div className="flex justify-between">
        <span className="my-2 font-light">Shipping</span>
        <span className="my-2">$99.00</span>
      </div>
      <Separator className="bg-gray-300" />
      <div className="flex justify-between text-lg">
        <span className="my-4">Total</span>
        <span className="my-4">$99.00</span>
      </div>
    </>
  );
};
export default CartCheckoutDetailedPrice;

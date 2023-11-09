import { useState } from "react";
import { Checkbox } from "../../../components/ui/checkbox";

const CheckoutPaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit card");
  return (
    <div>
      <h2 className="mb-4 text-xl">Payment</h2>
      <div className="sm:flex sm:gap-x-8">
        <div className="mb-3 flex items-center space-x-2 sm:mb-0">
          <Checkbox
            circle
            id="checkoutPaymentMethodCreditcard"
            checked={paymentMethod === "Credit card"}
            className="h-5 w-5 rounded-full border-[1.5px] border-gray-300 bg-background 
          data-[state=checked]:border-[6px] data-[state=checked]:border-blue-600"
            onCheckedChange={() => {
              setPaymentMethod("Credit card");
            }}
          />
          <label
            htmlFor="checkoutPaymentMethodCreditcard"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Credit card
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            circle
            id="checkoutPaymentMethodPaypal"
            checked={paymentMethod === "Paypal"}
            className="h-5 w-5 rounded-full border-[1.5px] border-gray-300 bg-background 
          data-[state=checked]:border-[6px] data-[state=checked]:border-blue-600"
            onCheckedChange={() => {
              setPaymentMethod("Paypal");
            }}
          />
          <label
            htmlFor="checkoutPaymentMethodPaypal"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Paypal
          </label>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPaymentMethod;

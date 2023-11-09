import { Separator } from "../../../components/ui/separator";
import CheckoutContactInformation from "../components/CheckoutContactInformation";
import CheckoutAddressForm from "../components/CheckoutAddressForm";
import { cn } from "../../../lib/utils";
import { Checkbox } from "../../../components/ui/checkbox";
import { useState } from "react";
import CheckoutBillingAddressForm from "../components/CheckoutBillingAddressForm";
import CheckoutDeliveryMethod from "../components/CheckoutDeliveryMethod";
import CheckoutPaymentMethod from "../components/CheckoutPaymentMethod";

const CheckoutMainSection = ({ className }) => {
  const [showBillingAddressForm, setShowBillingAddressForm] = useState(true);

  return (
    <section className={cn("", className)}>
      <CheckoutContactInformation />
      <Separator className="mb-6 mt-5" />
      <CheckoutAddressForm />
      <Separator className="mb-6 mt-5" />
      <CheckoutDeliveryMethod />
      <div className="mt-6 flex items-center space-x-2">
        <Checkbox
          id="checkoutBillingAddressCheckbox"
          checked={showBillingAddressForm}
          className="h-5 w-5 rounded-full border-[1.5px] border-gray-300 bg-background data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white

          "
          onCheckedChange={setShowBillingAddressForm}
        />
        <label
          htmlFor="checkoutBillingAddressCheckbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Billing address is same as Shipping address
        </label>
      </div>
      <Separator className="mb-6 mt-5" />
      {!showBillingAddressForm && (
        <>
          <CheckoutBillingAddressForm />
          <Separator className="mb-6 mt-5" />
        </>
      )}
      <CheckoutPaymentMethod />
    </section>
  );
};
export default CheckoutMainSection;

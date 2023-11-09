import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/utils";

const CheckoutDeliveryMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");

  return (
    <div>
      <h2 className="mb-4 text-xl">Delivery method</h2>
      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
        <div
          className={cn(
            "relative w-full rounded-lg border-2 bg-background px-2.5 py-4",
            shippingMethod === "standard"
              ? "border-blue-600"
              : "border-gray-300",
          )}
          onClick={(e) => {
            e.preventDefault();
            setShippingMethod("standard");
          }}
        >
          <h4>Standard</h4>
          <p className="mb-8 mt-1 text-sm font-light">4-10 business days</p>
          <span>$5.00</span>
          {shippingMethod === "standard" ? (
            <div className="absolute right-2.5 top-4">
              <CheckCircle2 className="stroke-1.5 fill-blue-600 stroke-background" />
            </div>
          ) : null}
        </div>
        <div
          className={cn(
            "relative w-full rounded-lg border-2 border-gray-300 bg-background px-2.5 py-4",
            shippingMethod === "express"
              ? "border-blue-600"
              : "border-gray-300",
          )}
          onClick={(e) => {
            e.preventDefault();
            setShippingMethod("express");
          }}
        >
          <h4>Express</h4>
          <p className="mb-8 mt-1 text-sm font-light">2-5 business days</p>
          <span>$10.00</span>
          {shippingMethod === "express" ? (
            <div className="absolute right-2.5 top-4">
              <CheckCircle2 className="stroke-1.5 fill-blue-600 stroke-background" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CheckoutDeliveryMethod;

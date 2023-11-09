import { Separator } from "../../components/ui/separator";
import CheckoutMainSection from "./container/CheckoutMainSection";
import CheckoutOrderSummarySection from "./container/CheckoutOrderSummarySection";

const Checkout = () => {
  return (
    <section className="container bg-bggray px-6 pb-12 pt-4 lg:px-16 xl:px-56">
      <div className="flex flex-col lg:flex-row lg:gap-x-8">
        <CheckoutMainSection className="w-full lg:w-3/5" />
        <Separator className="mb-6 mt-5 lg:hidden" />
        <CheckoutOrderSummarySection className="w-full lg:w-2/5" />
      </div>
    </section>
  );
};
export default Checkout;

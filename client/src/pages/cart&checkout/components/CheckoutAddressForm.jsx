import { Input } from "../../../components/ui/input";

const CheckoutAddressForm = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl">Shipping Infomation</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <Input label="First Name" id="checkoutAddressFirstName" type="text" />

        <Input label="Last Name" id="checkoutAddressLastName" type="text" />
        <div className="sm:col-span-2">
          <Input label="Address" id="checkoutAddressMainAddress" type="text" />
        </div>
        <div className="sm:col-span-2">
          <Input label="City" id="checkoutAddressCity" type="text" />
        </div>
      </div>
    </div>
  );
};
export default CheckoutAddressForm;

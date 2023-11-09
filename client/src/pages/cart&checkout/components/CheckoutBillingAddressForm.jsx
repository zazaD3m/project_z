import { Input } from "../../../components/ui/input";

const CheckoutBillingAddressForm = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl">Billing Infomation</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <Input
          label="First Name"
          id="checkoutBillingAddressFirstName"
          type="text"
        />
        <Input
          label="Last Name"
          id="checkoutBillingAddressLastName"
          type="text"
        />
        <div className="sm:col-span-2">
          <Input
            label="Address"
            id="checkoutBillingAddressMainAddress"
            type="text"
          />
        </div>
        <div className="sm:col-span-2">
          <Input label="City" id="checkoutBillingAddressCity" type="text" />
        </div>
      </div>
    </div>
  );
};
export default CheckoutBillingAddressForm;

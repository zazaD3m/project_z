import { Input } from "../../../components/ui/input";

const CheckoutContactInformation = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl">Contact Information</h2>
      <div className="sm:flex sm:gap-x-8">
        <Input
          className="mb-4 sm:mb-0"
          label="Email address"
          id="checkoutContactEmail"
          type="email"
        />
        <Input
          label="Phone number"
          id="checkoutContactPhoneNumber"
          type="tel"
        />
      </div>
    </div>
  );
};
export default CheckoutContactInformation;

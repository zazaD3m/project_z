import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useState } from "react";

const AccountAddress = () => {
  const [addNewAddressComp, setAddNewAddressComp] = useState(false);
  return (
    <section className="flex flex-col px-8">
      <h2 className="mb-6 self-center text-xl">
        {addNewAddressComp ? "Add A New Address" : "My Addresses"}
      </h2>
      <Button
        size="xl"
        className={addNewAddressComp ? "hidden" : "" + "w-44 rounded-sm"}
        onClick={(e) => {
          e.preventDefault();
          setAddNewAddressComp(true);
        }}
      >
        Add A New Address
      </Button>
      {addNewAddressComp ? (
        <>
          <div className="mb-8 flex flex-col gap-4 sm:items-center lg:items-start">
            <Input
              className="max-w-xs sm:w-80"
              label="City"
              id="accountAddressCity"
              type="text"
            />
            <Input
              className="max-w-xs sm:w-80"
              label="Address"
              id="accountAddress"
              type="text"
            />
            <Input
              className="max-w-xs sm:w-80"
              label="Phone Number"
              id="accountAddressPhoneNumber"
              type="text"
            />
          </div>
          <div className="flex justify-center gap-8 lg:justify-end ">
            <Button variant="ghost" className="">
              Cancel
            </Button>
            <Button className="">Save Changes</Button>
          </div>
        </>
      ) : null}
    </section>
  );
};
export default AccountAddress;

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const AccountProfile = () => {
  return (
    <section className="px-8">
      <h2 className="mb-6 text-xl">Edit Your Profile</h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Input
          className="max-w-xs"
          label="First Name"
          id="accountProfilePageFormName"
          type="text"
        />
        <Input
          className="max-w-xs"
          label="Last Name"
          id="accountProfilePageFormSurname"
          type="text"
        />
        <Input
          className="max-w-xs"
          label="Email"
          id="accountProfilePageFormEmail"
          type="email"
        />
        <Input
          className="max-w-xs"
          label="Address"
          id="accountProfilePageFormAddress"
          type="text"
        />
      </div>
      <h2 className="my-6 text-xl">Change Your Password</h2>
      <div className="mb-6 flex flex-col gap-4">
        <Input
          label="Current Password"
          id="accountProfilePageFormCurrentPassword"
          type="password"
          className="max-w-xs"
        />
        <Input
          label="New Password"
          id="accountProfilePageFormNewPassword"
          type="password"
          className="max-w-xs"
        />
        <Input
          label="Confirm New Password"
          id="accountProfilePageFormConfirmNewPassword"
          type="password"
          className="max-w-xs"
        />
      </div>
      <div className="flex justify-center gap-8 lg:justify-end ">
        <Button variant="ghost" className="">
          Cancel
        </Button>
        <Button className="">Save Changes</Button>
      </div>
    </section>
  );
};
export default AccountProfile;

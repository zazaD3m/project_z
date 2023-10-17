import { ArrowLeft, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import AccountProfile from "../components/AccountProfile";
import AccountAddress from "../components/AccountAddress";
import AccountOrders from "../components/AccountOrders";

const AccountMain = ({
  className,
  windowSize,
  openedAccountComponent,
  setOpenedAccountComponent,
}) => {
  return (
    <section className={className}>
      <div className="h-full w-full overflow-auto bg-primary-foreground p-4 shadow-sm lg:rounded-md">
        <div className="fixed left-0 top-0 flex w-full justify-between bg-primary-foreground px-2 py-1 lg:hidden">
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              setOpenedAccountComponent("closed");
            }}
            className="gap-2 pl-2"
          >
            <ArrowLeft />
            Go Back
          </Button>
          <Button
            variant="ghost"
            className="pr-2"
            onClick={(e) => {
              e.preventDefault();
              setOpenedAccountComponent("closed");
            }}
          >
            <X />
          </Button>
        </div>
        <div className="mt-[60px] lg:mt-0">
          {(() => {
            if (windowSize > 1023 && openedAccountComponent === "default") {
              return <AccountProfile />;
            } else if (openedAccountComponent === "MyProfile") {
              return <AccountProfile />;
            } else if (openedAccountComponent === "MyAddress") {
              return <AccountAddress />;
            } else if (openedAccountComponent === "MyOrders") {
              return <AccountOrders />;
            } else null;
          })()}
        </div>
      </div>
    </section>
  );
};
export default AccountMain;

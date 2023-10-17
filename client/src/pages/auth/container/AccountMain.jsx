import { ArrowLeft, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import AccountProfile from "../components/AccountProfile";
import AccountAddress from "../components/AccountAddress";
import AccountOrders from "../components/AccountOrders";
import { Link } from "react-router-dom";

const AccountMain = ({ className, accountPage }) => {
  return (
    <section className={className}>
      <div className="h-full w-full overflow-auto bg-primary-foreground p-4 shadow-sm lg:rounded-md">
        <div className="fixed left-0 top-0 flex w-full justify-between bg-primary-foreground px-2 py-1 lg:hidden">
          <Button variant="ghost" asChild className="gap-2 pl-2">
            <Link to="/account">
              <ArrowLeft className="-translate-y-[1px]" />
              Go Back
            </Link>
          </Button>
          <Button variant="ghost" className="pr-2" asChild>
            <Link to="/account">
              <X />
            </Link>
          </Button>
        </div>
        <div className="mt-[60px] h-full w-full lg:mt-0">
          {accountPage === "profile" ? (
            <AccountProfile />
          ) : accountPage === "address" ? (
            <AccountAddress />
          ) : accountPage === "orders" ? (
            <AccountOrders />
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default AccountMain;

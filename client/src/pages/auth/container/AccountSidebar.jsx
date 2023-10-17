import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";

const AccountSidebar = ({
  className,
  openedAccountComponent,
  windowSize,
  setOpenedAccountComponent,
}) => {
  return (
    <section className={className}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setOpenedAccountComponent("MyProfile");
        }}
        className={cn(
          "w-2/3 rounded-sm",
          windowSize < 1024
            ? ""
            : openedAccountComponent === "MyProfile"
            ? "bg-yellow text-primary"
            : openedAccountComponent === "default"
            ? "bg-yellow text-primary"
            : "",
        )}
      >
        My Profile
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setOpenedAccountComponent("MyAddress");
        }}
        className={cn(
          "w-2/3 rounded-sm",
          openedAccountComponent === "MyAddress"
            ? "bg-yellow text-primary"
            : "",
        )}
      >
        My Address
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setOpenedAccountComponent("MyOrders");
        }}
        className={cn(
          "w-2/3 rounded-sm",
          openedAccountComponent === "MyOrders" ? "bg-yellow text-primary" : "",
        )}
      >
        My Orders
      </Button>
      <Button asChild className="w-2/3 rounded-sm">
        <Link to="/wishlist">My Wishlist</Link>
      </Button>
    </section>
  );
};
export default AccountSidebar;

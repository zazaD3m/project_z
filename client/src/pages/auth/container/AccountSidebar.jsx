import { Link, NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const AccountSidebar = ({ className }) => {
  return (
    <section className={className}>
      <Button
        asChild
        className="w-2/3 rounded-sm aria-[current=page]:bg-yellow aria-[current=page]:text-primary"
      >
        <NavLink to="/account/profile">My Profile</NavLink>
      </Button>
      <Button
        asChild
        className="w-2/3 rounded-sm aria-[current=page]:bg-yellow aria-[current=page]:text-primary"
      >
        <NavLink to="/account/address">My Address</NavLink>
      </Button>
      <Button
        asChild
        className="w-2/3 rounded-sm aria-[current=page]:bg-yellow aria-[current=page]:text-primary"
      >
        <NavLink to="/account/orders">My Orders</NavLink>
      </Button>
      <Button asChild className="w-2/3 rounded-sm">
        <Link to="/wishlist">My Wishlist</Link>
      </Button>
    </section>
  );
};
export default AccountSidebar;

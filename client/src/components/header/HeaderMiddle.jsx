import { Link } from "react-router-dom";
import { RefreshCcw, Heart, ShoppingBag } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import HeaderMiddleProfile from "./HeaderMiddleProfile";
import HeaderMobileNav from "./HeaderMobileNav";

const HeaderMiddle = () => {
  return (
    <>
      <HeaderMobileNav />
      <div className="ml-2 mr-auto sm:ml-4 lg:ml-0">
        <Link to="/">
          <p className="cursor-pointer text-3xl font-semibold">Digitic.</p>
        </Link>
      </div>
      <ul className="flex gap-2 sm:gap-6">
        <li className="flex items-center gap-2">
          <Button variant="ghost" asChild className="m-0 gap-2 p-0">
            <Link to="/">
              <RefreshCcw
                strokeWidth={1.5}
                className=" sm:h-8 sm:w-8 lg:h-9 lg:w-9"
              />
              <p className="hidden select-none lg:block">
                Compare
                <br />
                Products
              </p>
            </Link>
          </Button>
        </li>
        <li className="flex items-center">
          <Button variant="ghost" asChild className="m-0 gap-2 p-0">
            <Link to="wishlist">
              <div className="relative inline-flex items-center">
                <Heart
                  strokeWidth={1.5}
                  className="sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                />
                <Badge className="text-yellow sm:h-4 sm:w-4 sm:text-sm lg:h-5 lg:w-5 lg:bg-primary lg:text-base">
                  1
                </Badge>
              </div>
              <p className="hidden select-none lg:block">
                Favorite
                <br />
                Wishlist
              </p>
            </Link>
          </Button>
        </li>
        <li className="flex items-center">
          <HeaderMiddleProfile />
        </li>
        <li className="flex items-center">
          <Button variant="ghost" asChild className="m-0 gap-2 p-0">
            <Link to="/">
              <div className="relative inline-flex items-center">
                <ShoppingBag
                  strokeWidth={2}
                  className="text-yellow  sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                />
                <Badge className="sm:h-4 sm:w-4 sm:text-sm lg:h-5 lg:w-5 lg:bg-primary lg:text-base">
                  2
                </Badge>
              </div>
            </Link>
          </Button>
        </li>
      </ul>
    </>
  );
};
export default HeaderMiddle;

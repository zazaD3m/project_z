import { Link } from "react-router-dom";
import { RefreshCcw, Heart, ShoppingBag } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import HeaderMiddleProfile from "./HeaderMiddleProfile";
import HeaderMobileNav from "./HeaderMobileNav";
import CartModal from "../CartModal";
import useWindowSize from "../../hooks/useWindowSize";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const HeaderMiddle = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 1024 && <HeaderMobileNav />}
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="m-0 gap-2 p-0">
                <div className="relative inline-flex items-center">
                  <ShoppingBag
                    strokeWidth={2}
                    className="text-yellow  sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  />
                  <Badge className="sm:h-4 sm:w-4 sm:text-sm lg:h-5 lg:w-5 lg:bg-primary lg:text-base">
                    2
                  </Badge>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              onOpenAutoFocus={(e) => {
                e.preventDefault();
              }}
              className="z-[9999] max-h-screen overflow-auto p-0 pt-12"
            >
              <CartModal />
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </>
  );
};
export default HeaderMiddle;

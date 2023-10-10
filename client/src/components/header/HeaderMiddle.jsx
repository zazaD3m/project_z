import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import {
  RefreshCcw,
  AlignJustify,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { navContent } from "../../assets/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const postNavContent = (navContent) =>
  navContent.map((cont, i) =>
    cont.dropDown ? (
      <li key={i}>
        <Accordion type="single" collapsible className="pl-4">
          <AccordionItem value={`item-${i}`} className="border-none">
            <Button
              className="my-1 inline-flex justify-start gap-1 pl-0  text-sm shadow-none active:text-yellow"
              variant="ghost"
              asChild
            >
              <AccordionTrigger className="text-primary-foreground no-underline focus:no-underline [&[data-state=open]]:text-yellow">
                {cont.title}
              </AccordionTrigger>
            </Button>
            <AccordionContent className=" mt-4  w-[298px] -translate-x-[16px] overflow-hidden bg-white text-black sm:w-[400px]">
              {cont.dropDown.map((item, i) => (
                <Fragment key={i}>
                  <h3 className="text-base">{item.title}</h3>
                  <ul className="my-2 ml-4 flex flex-col pt-2 text-sm">
                    {item.content.map((contentItem, contentI) => (
                      <li key={contentI}>
                        <SheetClose asChild>
                          <Button
                            asChild
                            variant="link"
                            className="h-6 justify-start p-0 opacity-50 transition-all duration-200 hover:no-underline hover:opacity-80 active:scale-x-105 active:text-yellow active:duration-0"
                          >
                            <NavLink to={contentItem.link}>
                              <p>{contentItem.contentTitle}</p>
                            </NavLink>
                          </Button>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />
      </li>
    ) : (
      <li key={i}>
        <SheetClose asChild>
          <Button
            className="my-1 justify-start pl-4 text-sm shadow-none active:text-yellow"
            variant="ghost"
            asChild
            key={i}
          >
            <NavLink to={cont.link} className="w-full">
              {cont.title}
            </NavLink>
          </Button>
        </SheetClose>
        <Separator />
      </li>
    ),
  );

const HeaderMiddle = () => {
  return (
    <>
      <Sheet className="lg:hidden">
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" className="p-0">
            <AlignJustify size={26} strokeWidth={2.5} />
            <span className="sr-only">Navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="max-h-screen w-[300px] max-w-[300px]  overflow-auto bg-primary px-0 pt-12 text-primary-foreground sm:w-[400px] sm:max-w-[400px]"
        >
          <Separator />
          <ul>{postNavContent(navContent)}</ul>
        </SheetContent>
      </Sheet>
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
          <Button variant="ghost" asChild className="m-0 gap-2 p-0">
            <Link to="/">
              <User
                strokeWidth={1.75}
                className=" sm:h-8 sm:w-8 lg:h-9 lg:w-9"
              />
              <p className="hidden select-none lg:block">
                My
                <br />
                Account
              </p>
            </Link>
          </Button>
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

import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AlignJustify } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { navContent } from "../../assets/data";
import { Separator } from "../ui/separator";

const HeaderMobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-0">
            <AlignJustify size={26} strokeWidth={2.5} />
            <span className="sr-only">Navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
          side="left"
          className="max-h-screen w-[300px] max-w-[300px] overflow-auto bg-primary px-0 pt-12 text-primary-foreground sm:w-[400px] sm:max-w-[400px]"
        >
          <Separator />
          <ul>{postNavContent(navContent)}</ul>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default HeaderMobileNav;

function postNavContent(navContent) {
  return navContent.map((cont, i) =>
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
            <AccordionContent className="w-[298px] -translate-x-[16px] overflow-hidden bg-white text-black sm:w-[400px]">
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
            className="my-1 justify-start pl-4 text-sm shadow-none active:text-yellow aria-[current=page]:text-yellow"
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
}

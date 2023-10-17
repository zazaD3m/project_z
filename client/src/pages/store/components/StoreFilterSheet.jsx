import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import StoreAccordion from "./StoreAccordion";
import StoreFilterPrice from "./StoreFilterPrice";

const StoreFilterSheet = () => {
  return (
    <>
      <Sheet key={"left"} className="lg:hidden">
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-20 rounded-sm text-sm font-normal tracking-wider shadow-sm sm:w-28"
          >
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
          side="left"
          className="flex max-h-screen w-[320px] max-w-[320px] flex-col overflow-auto px-2 py-4 sm:w-[400px] sm:max-w-[400px]"
          closestyles="p-2 text-primary right-2 top-2 text-xl"
        >
          <SheetHeader>
            <SheetTitle className="text-sm font-normal opacity-70 ">
              Filter <br /> 21 products
            </SheetTitle>
          </SheetHeader>
          <Separator className="opacity-30" />
          <div className="flex grow flex-col p-2 text-sm font-normal ">
            <StoreFilterPrice />
            <ul className="space-y-2">
              {[
                {
                  title: "categories",
                  content: ["home", "smartphones", "monitors"],
                  id: 1,
                },
                {
                  title: "categories",
                  content: ["home", "smartphones", "monitors"],
                  id: 2,
                },
                {
                  title: "categories",
                  content: ["home", "smartphones", "monitors"],
                  id: 3,
                },
                {
                  title: "size",
                  id: 4,
                },
                {
                  title: "brand",
                  id: 5,
                },
                {
                  title: "color",
                  id: 6,
                },
              ].map((item, i) => (
                <li key={item.title + i}>
                  <StoreAccordion data={item} />
                </li>
              ))}
            </ul>
          </div>
          <Separator className="opacity-30" />
          <SheetFooter className="flex w-full flex-row justify-around pb-4">
            <Button
              variant="ghost"
              className="w-5/12 rounded-full font-light tracking-wider active:bg-accent"
              size="lg"
            >
              Clear
            </Button>
            <SheetClose asChild>
              <Button
                type="submit"
                className="w-5/12 rounded-full bg-yellow font-normal  tracking-wider text-black"
                size="lg"
              >
                Apply
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default StoreFilterSheet;

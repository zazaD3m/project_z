import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { cn } from "../../../lib/utils";

import { Grid2X2, Grid3X3, Maximize2 } from "lucide-react";
import StoreFilterSheet from "./StoreFilterSheet";
import { useState } from "react";

const StoreTopNav = ({
  className,
  productListDetails: { numOfColumns, sortType },
  setProductListDetails,
}) => {
  const [storeSelectContainer, setStoreSelectContainer] = useState(null);

  return (
    <div className="w-full rounded-sm bg-primary-foreground p-1.5 shadow-sm">
      <nav className="h-10">
        <ul className="flex h-full items-center justify-between">
          <li className="flex h-full basis-1/3 items-center justify-start gap-3 lg:order-2 lg:justify-end ">
            <div
              onClick={(e) => {
                e.preventDefault();
                return setProductListDetails((prevState) => ({
                  ...prevState,
                  numOfColumns: "max",
                }));
              }}
              className={cn(
                "h-9 w-9 rounded-sm border border-input bg-bggray p-2 text-primary shadow",
                className,
                {
                  "bg-primary-light text-primary-foreground ":
                    numOfColumns === "max",
                },
              )}
            >
              <Grid3X3 className="h-full w-full" />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                return setProductListDetails((prevState) => ({
                  ...prevState,
                  numOfColumns: "mid",
                }));
              }}
              className={cn(
                "hidden h-9 w-9 rounded-sm border border-input bg-bggray p-2 text-primary shadow lg:block",
                className,
                {
                  "bg-primary-light text-primary-foreground":
                    numOfColumns === "mid",
                },
              )}
            >
              <Grid2X2 className="h-full w-full" />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                return setProductListDetails((prevState) => ({
                  ...prevState,
                  numOfColumns: "min",
                }));
              }}
              className={cn(
                "h-9 w-9 rounded-sm border border-input bg-bggray p-2 text-primary shadow",
                className,
                {
                  "bg-primary-light text-primary-foreground":
                    numOfColumns === "min",
                },
              )}
            >
              <Maximize2 className="h-full w-full" />
            </div>
          </li>
          <li className="flex h-full max-w-[250px] basis-1/3 items-center lg:order-1">
            <span className="ml-3 hidden w-28 lg:block">Sort By:</span>
            <Select
              value={sortType}
              onValueChange={(value) => {
                setProductListDetails((prevState) => ({
                  ...prevState,
                  sortType: value,
                }));
              }}
            >
              <SelectTrigger className="h-9 bg-bggray">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="date-desc">date-desc</SelectItem>
                  <SelectItem value="date-asc">date-asc</SelectItem>
                  <SelectItem value="price-desc">price-desc</SelectItem>
                  <SelectItem value="price-asc">price-asc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li className="flex h-full basis-1/3 items-center justify-end lg:hidden">
            <StoreFilterSheet />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StoreTopNav;

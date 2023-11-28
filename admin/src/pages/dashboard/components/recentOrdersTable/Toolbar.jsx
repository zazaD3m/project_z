import { X } from "lucide-react";

import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";

import { ViewOptions } from "./ViewOptions";
import { FacetedFilter } from "./FacetedFilter";

import { deliveries } from "./data/data";

export function Toolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("delivery") && (
          <FacetedFilter
            column={table.getColumn("delivery")}
            title="Delivery"
            options={deliveries}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <ViewOptions table={table} />
    </div>
  );
}

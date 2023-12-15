import { X } from "lucide-react";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

import { ViewOptions } from "./ViewOptions";
import { FacetedFilter } from "./FacetedFilter";

export function Toolbar({ table, filter, facetedFilter }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-x-2 gap-y-2">
        {!filter ? null : !Array.isArray(filter) ? (
          <Input
            placeholder={filter.placeHolder}
            value={table.getColumn(filter.value)?.getFilterValue() ?? ""}
            onChange={(event) => {
              return table
                .getColumn(filter.value)
                ?.setFilterValue(event.target.value);
            }}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        ) : (
          filter.map((f, i) => (
            <Input
              key={i}
              placeholder={f.placeHolder}
              value={table.getColumn(f.value)?.getFilterValue() ?? ""}
              onChange={(event) => {
                return table
                  .getColumn(f.value)
                  ?.setFilterValue(event.target.value);
              }}
              className="h-8 w-[150px] lg:w-[200px]"
            />
          ))
        )}

        {facetedFilter &&
          facetedFilter.map(
            (item, id) =>
              table.getColumn(item.value) && (
                <FacetedFilter
                  column={table.getColumn(item.value)}
                  title={item.title}
                  options={item.options}
                  key={id}
                />
              ),
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

import { Badge } from "../../../../components/ui/Badge";
import { Checkbox } from "../../../../components/ui/Checkbox";

import { ColumnHeader } from "./ColumnHeader";
import { RowActions } from "./RowActions";

import { labels, deliveries } from "./data/data";

export const columns = [
  // first column of table checkboxes...
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <ColumnHeader column={column} title="Task" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <ColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "order date",
    header: ({ column }) => <ColumnHeader column={column} title="Order date" />,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("order date")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "delivery",
    header: ({ column }) => <ColumnHeader column={column} title="Delivery" />,
    cell: ({ row }) => {
      const delivery = deliveries.find(
        (delivery) => delivery.value === row.getValue("delivery"),
      );

      if (!delivery) {
        return null;
      }

      return (
        <div className="flex items-center">
          {delivery.icon && (
            <delivery.icon
              className={`mr-2 h-4 w-4 ${
                delivery.value === "waiting"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            />
          )}
          <span>{delivery.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row} />,
  },
];

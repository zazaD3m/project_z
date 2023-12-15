import { ColumnHeader } from "../../../../components/table/ColumnHeader";
import { RowActions } from "../../../../components/table/RowActions";
import { Checkbox } from "../../../../components/ui/Checkbox";

import {
  productList as data,
  categories,
  parentCategories,
  brands,
  colors,
  statuses,
} from "../../data/data";

const columns = [
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
    accessorKey: "sid",
    header: ({ column }) => <ColumnHeader column={column} title="SID" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("sid")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: ({ column }) => <ColumnHeader column={column} title="Product" />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-2">
          <div className="aspect-square h-full">
            <img
              className="h-full w-full object-cover"
              src={row.getValue("product").picture}
            />
          </div>
          <span className="font-medium">{row.getValue("product").title}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <ColumnHeader column={column} title="Category" />,
    cell: ({ row }) => {
      const category = categories.find(
        (category) => category.value === row.getValue("category"),
      );

      if (!category) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{category.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "parentCategory",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Parent-category" />
    ),
    cell: ({ row }) => {
      const parentCategory = parentCategories.find(
        (parentCategory) =>
          parentCategory.value === row.getValue("parentCategory"),
      );

      if (!parentCategory) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{parentCategory.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => <ColumnHeader column={column} title="Brand" />,
    cell: ({ row }) => {
      const brand = brands.find(
        (brand) => brand.value === row.getValue("brand"),
      );

      if (!brand) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{brand.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "color",
    header: ({ column }) => <ColumnHeader column={column} title="Color" />,
    cell: ({ row }) => {
      const color = colors.find(
        (color) => color.value === row.getValue("color"),
      );

      if (!color) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{color.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => <ColumnHeader column={column} title="Price" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("price")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row} />,
  },
];

export default columns;

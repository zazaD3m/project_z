import { DashboardCard } from "../../components/ui/Card";
import DynamicTable from "../../components/dynamic-table/Table";
import { ArrowUpDown, MoreHorizontal, User2 } from "lucide-react";
import { Checkbox } from "../../components/ui/Checkbox";
import { Button } from "../../components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/DropdownMenu";

const data = [
  {
    id: "m5gr84i9",
    "parent-category": "men",
    category: "t-shirt",
  },
  {
    id: "3u1reuv4",
    "parent-category": "men",
    category: "jeans",
  },
  {
    id: "derv1ws0",
    "parent-category": "women",
    category: "hoodie",
  },
  {
    id: "5kma53ae",
    "parent-category": "women",
    category: "skirt",
  },
  {
    id: "bhqecj4p",
    "parent-category": "kids",
    category: "shorts",
  },
  {
    id: "3u1reuv4",
    "parent-category": "kids",
    category: "shirt",
  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "parent-category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Parent-category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="mr-auto w-36 text-left font-medium">
          {row.getValue("parent-category")}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const filters = ["category"];

const facetedFilter = [
  {
    column: "parent-category",
    title: "Parent-category",
    options: [
      {
        label: "Men",
        value: "men",
        icon: User2,
      },
      {
        label: "Women",
        value: "women",
        icon: User2,
      },
      {
        label: "Kids",
        value: "kids",
        icon: User2,
      },
    ],
  },
];

const addNewLink = "addcategory";

const defaultSort = [{ id: "parent-category", asc: true }];

const Categories = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-52">
      <h1 className="text-center text-3xl lg:text-left">Categories</h1>
      <DashboardCard className="pt-2">
        <DynamicTable
          filters={filters}
          data={data}
          columns={columns}
          defaultSort={defaultSort}
          facetedFilter={facetedFilter}
          addNewLink={addNewLink}
        />
      </DashboardCard>
    </div>
  );
};
export default Categories;

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import DynamicTable from "../../components/dynamic-table/DynamicTable";
import { Button } from "../../components/ui/Button";
import { DashboardCard } from "../../components/ui/Card";
import { Checkbox } from "../../components/ui/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/DropdownMenu";

const data = [
  {
    id: "1a2b3c",
    amount: 25,
    brand: "Nike",
  },
  {
    id: "4d5e6f",
    amount: 30,
    brand: "Adidas",
  },
  {
    id: "7g8h9i",
    amount: 15,
    brand: "Puma",
  },
  {
    id: "jklmno",
    amount: 40,
    brand: "Under Armour",
  },
  {
    id: "pqrstv",
    amount: 20,
    brand: "Reebok",
  },
  {
    id: "wxyz12",
    amount: 35,
    brand: "Converse",
  },
  {
    id: "345678",
    amount: 18,
    brand: "New Balance",
  },
  {
    id: "90abcd",
    amount: 22,
    brand: "Fila",
  },
  {
    id: "efghij",
    amount: 28,
    brand: "Vans",
  },
  {
    id: "klmnop",
    amount: 33,
    brand: "Tommy Hilfiger",
  },
];

const filters = ["brand"];

const defaultSort = [{ id: "brand", asc: true }];

const addNewLink = "addbrand";

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
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("brand")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("amount")}</div>
    ),
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

const Brands = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-52">
      <h1 className="text-center text-3xl lg:text-left">Brands</h1>
      <DashboardCard className="pt-2">
        <DynamicTable
          filters={filters}
          data={data}
          columns={columns}
          defaultSort={defaultSort}
          addNewLink={addNewLink}
        />
      </DashboardCard>
    </div>
  );
};
export default Brands;

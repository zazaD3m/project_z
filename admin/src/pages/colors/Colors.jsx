import { ArrowUpDown, Circle } from "lucide-react";
import { Link } from "react-router-dom";

import DynamicTable from "../../components/dynamic-table/DynamicTable";
import { Button } from "../../components/ui/Button";
import { DashboardCard } from "../../components/ui/Card";
import { Checkbox } from "../../components/ui/Checkbox";

const data = [
  {
    id: "1a2b3c",
    color: "Red",
    hex: "#FF0000",
  },
  {
    id: "4d5e6f",
    color: "Blue",
    hex: "#0000FF",
  },
  {
    id: "7g8h9i",
    color: "Green",
    hex: "#00FF00",
  },
  {
    id: "jklmno",
    color: "Yellow",
    hex: "#FFFF00",
  },
  {
    id: "pqrstv",
    color: "Purple",
    hex: "#800080",
  },
  {
    id: "wxyz12",
    color: "Orange",
    hex: "#FFA500",
  },
  {
    id: "345678",
    color: "Pink",
    hex: "#FFC0CB",
  },
  {
    id: "90abcd",
    color: "Brown",
    hex: "#A52A2A",
  },
  {
    id: "efghij",
    color: "Cyan",
    hex: "#00FFFF",
  },
  {
    id: "klmnop",
    color: "Magenta",
    hex: "#FF00FF",
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
    accessorKey: "color",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Color
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2 lowercase">
        <span className="w-32 py-1">{row.getValue("color")}</span>
        <Circle size={20} fill={row.original.hex} color={row.original.hex} />
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="flex items-center gap-x-8">
          <Button variant="ghost" asChild size="sm">
            <Link to={`editcolor/${id}`}>Edit Color</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => console.log(row.original.id)}
          >
            Delete Color
          </Button>
        </div>
        /* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link to={`editcolor/${id}`}>Edit Color</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer bg-destructive text-destructive-foreground focus:bg-destructive/60"
              
            >
              Delete Color
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */
      );
    },
  },
];

const filters = ["color"];

const defaultSort = [{ id: "color", asc: true }];

const addNewLink = "addcolor";

const Colors = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-52">
      <h1 className="text-center text-3xl lg:text-left">Colors</h1>
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
export default Colors;

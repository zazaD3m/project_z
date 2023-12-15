import { ColumnHeader } from "../../../components/table/ColumnHeader";
import { RowActions } from "../../../components/table/RowActions";
import { Checkbox } from "../../../components/ui/Checkbox";
import { customerList as data } from "../data/data";

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
    accessorKey: "firstName",
    header: ({ column }) => <ColumnHeader column={column} title="First name" />,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => <ColumnHeader column={column} title="Last name" />,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column} title="E-Mail" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Phone number" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => <ColumnHeader column={column} title="Address" />,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("address")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row} />,
  },
];

export default columns;

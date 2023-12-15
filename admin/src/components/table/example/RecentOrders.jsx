import { columns } from "./columns";
import DataTable from "./DataTable";

import { tasks } from "./data/tasks";

const RecentOrders = () => {
  return (
    <div className="pt-4">
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};
export default RecentOrders;

import { columns } from "../components/recentOrdersTable/columns";
import DataTable from "../components/recentOrdersTable/DataTable";

import { tasks } from "../components/recentOrdersTable/data/tasks";

const RecentOrders = () => {
  return (
    <div className="pt-4">
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};
export default RecentOrders;

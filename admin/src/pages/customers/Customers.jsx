import { DashboardCard } from "../../components/ui/Card";
import CustomerTable from "./customer-table/CustomerTable";

const Customers = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-52">
      <h1 className="text-center text-3xl lg:text-left">Customers</h1>
      <DashboardCard className="pt-2">
        <CustomerTable />
      </DashboardCard>
    </div>
  );
};
export default Customers;

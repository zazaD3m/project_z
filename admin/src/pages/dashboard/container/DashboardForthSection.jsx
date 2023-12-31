import {
  DashboardCard,
  DashboardCardHeader,
} from "../../../components/ui/Card";
import RecentOrders from "../../../components/table/example/RecentOrders";

const DashboardForthSection = () => {
  return (
    <>
      <DashboardCard>
        <DashboardCardHeader className="text-lg font-semibold">
          Recent orders
        </DashboardCardHeader>
        <RecentOrders />
      </DashboardCard>
    </>
  );
};
export default DashboardForthSection;

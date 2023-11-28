import {
  DashboardCard,
  DashboardCardHeader,
} from "../../../components/ui/Card";
import RecentOrders from "../components/RecentOrders";

const DashboardThirdSection = () => {
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
export default DashboardThirdSection;

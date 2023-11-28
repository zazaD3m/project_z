import {
  DashboardCard,
  DashboardCardHeader,
} from "../../../components/ui/Card";
import IncomeStats from "../components/IncomeStats";

const DashboardSecondSection = () => {
  return (
    <>
      <DashboardCard>
        <DashboardCardHeader className="text-lg font-semibold">
          Income statistics
        </DashboardCardHeader>
        <IncomeStats />
      </DashboardCard>
    </>
  );
};
export default DashboardSecondSection;

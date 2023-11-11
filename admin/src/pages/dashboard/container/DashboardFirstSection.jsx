import { MoveDownRight, MoveUpRight } from "lucide-react";
import {
  DashboardCard,
  DashboardCardHeader,
} from "../../../components/ui/Card";

const DashboardFirstSection = () => {
  return (
    <>
      <DashboardCard className="col-span-2">
        <DashboardCardHeader>Total sells</DashboardCardHeader>
        <div className="flex items-center justify-between pt-4">
          <span className="text-3xl font-semibold tracking-wide">$4000.00</span>
          <div className="flex flex-col items-end ">
            <div className="flex items-center gap-x-1 font-semibold text-green-600">
              <MoveUpRight size={14} />
              33.3%
            </div>
            <div>
              <p className="text-sm font-light tracking-wide">
                Compared to April 2023
              </p>
            </div>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard className="col-span-2">
        <DashboardCardHeader>Average order value</DashboardCardHeader>
        <div className="flex items-center justify-between pt-4">
          <span className="text-3xl font-semibold tracking-wide">$254.11</span>
          <div className="flex flex-col items-end ">
            <div className="flex items-center gap-x-1 font-semibold text-red-600">
              <MoveDownRight size={14} />
              33.3%
            </div>
            <div>
              <p className="text-sm font-light tracking-wide">
                Compared to April 2023
              </p>
            </div>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard className="col-span-2">
        <DashboardCardHeader>Total orders</DashboardCardHeader>
        <div className="flex items-center justify-between pt-4">
          <span className="text-3xl font-semibold tracking-wide">587</span>
          <div className="flex flex-col items-end ">
            <div className="flex items-center gap-x-1 font-semibold text-green-600">
              <MoveUpRight size={14} />
              33.3%
            </div>
            <div>
              <p className="text-sm font-light tracking-wide">
                Compared to April 2023
              </p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </>
  );
};
export default DashboardFirstSection;

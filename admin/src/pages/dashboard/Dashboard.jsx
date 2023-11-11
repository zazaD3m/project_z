import { useState } from "react";
import { subDays } from "date-fns";
import DashboardHeaderContainer from "./container/DashboardHeaderContainer";
import DashboardFirstSection from "./container/DashboardFirstSection";
import DashboardSecondSection from "./container/DashboardSecondSection";
import DashboardThirdSection from "./container/DashboardThirdSection";
import DashboardForthSection from "./container/DashboardForthSection";

const Dashboard = () => {
  const [date, setDate] = useState({
    from: subDays(new Date(), 20),
    to: new Date(),
  });

  return (
    <div className="space-y-6 px-8 py-6 2xl:px-52">
      <section className="flex justify-between">
        <DashboardHeaderContainer date={date} setDate={setDate} />
      </section>
      <section className="grid grid-cols-6 gap-x-6">
        <DashboardFirstSection />
      </section>
      <section className="grid grid-cols-8 gap-x-6">
        <DashboardSecondSection />
      </section>
      <section className="grid grid-cols-8 gap-x-6">
        <DashboardThirdSection />
      </section>
      <section className="grid grid-cols-2 gap-x-6">
        <DashboardForthSection />
      </section>
    </div>
  );
};
export default Dashboard;

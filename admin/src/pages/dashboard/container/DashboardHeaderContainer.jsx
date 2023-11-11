import DateRangePicker from "../../../components/DateRangePicker";

const DashboardHeaderContainer = ({ date, setDate }) => {
  return (
    <>
      <h2 className="text-3xl">Dashboard</h2>
      <div>
        <DateRangePicker date={date} setDate={setDate} />
      </div>
    </>
  );
};
export default DashboardHeaderContainer;

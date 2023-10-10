import StoreSideCategories from "../components/StoreSideCategories";
import StoreSideFilter from "../components/StoreSideFilter";

const StoreSideSection = () => {
  return (
    <div className="flex flex-col gap-5 pr-2.5">
      <div className="w-full rounded-sm bg-primary-foreground p-4 pb-6 pt-3 shadow-sm">
        <StoreSideCategories />
      </div>
      <div className="w-full rounded-sm bg-primary-foreground p-4 pb-6 pt-3 shadow-sm">
        <StoreSideFilter />
      </div>
    </div>
  );
};
export default StoreSideSection;

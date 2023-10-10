import { cn } from "../../../lib/utils";
import StoreFilterCheckbox from "./StoreFilterCheckbox";

const StoreFilterBrand = ({ className, mobile }) => {
  return (
    <div className={cn("", className)}>
      {mobile ? null : <h2 className="mb-2">Brand</h2>}
      <ul className="space-y-1">
        {[
          { title: mobile ? "appleM" : "apple", label: "Apple", id: 1 },
          { title: mobile ? "samsungM" : "samsung", label: "Samsung", id: 2 },
          { title: mobile ? "lgM" : "Lg", label: "Lg", id: 3 },
        ].map((item) => (
          <StoreFilterCheckbox key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
export default StoreFilterBrand;

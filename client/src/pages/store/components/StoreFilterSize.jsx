import { cn } from "../../../lib/utils";
import StoreFilterCheckbox from "./StoreFilterCheckbox";

const StoreFilterSize = ({ className, mobile }) => {
  return (
    <div className={cn("", className)}>
      {mobile ? null : <h2 className="mb-2">Size</h2>}
      <ul className="space-y-1">
        {[
          { title: mobile ? "smallM" : "small", label: "S", id: 1 },
          { title: mobile ? "mediumM" : "medium", label: "M", id: 2 },
          { title: mobile ? "largeM" : "large", label: "L", id: 3 },
        ].map((item) => (
          <StoreFilterCheckbox data={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default StoreFilterSize;

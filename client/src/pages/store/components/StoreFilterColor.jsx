import { cn } from "../../../lib/utils";
import StoreFilterCheckbox from "./StoreFilterCheckbox";

const StoreFilterColor = ({ className, mobile }) => {
  return (
    <div className={cn("", className)}>
      {mobile ? null : <h2 className="mb-2">Color</h2>}
      <ul className="flex flex-wrap gap-4">
        {[
          { title: "red1", label: "red", id: 1 },
          { title: "black2", label: "black", id: 2 },
          { title: "blue3", label: "blue", id: 3 },
          { title: "red4", label: "red", id: 4 },
          { title: "black5", label: "black", id: 5 },
          { title: "blue6", label: "blue", id: 6 },
          { title: "red7", label: "red", id: 7 },
          { title: "blue8", label: "blue", id: 8 },
          { title: "red9", label: "red", id: 9 },
          { title: "black10", label: "black", id: 10 },
        ].map((item) => (
          <StoreFilterCheckbox key={item.id} data={item} color={item.label} />
        ))}
      </ul>
    </div>
  );
};
export default StoreFilterColor;

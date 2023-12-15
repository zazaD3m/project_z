import { DashboardCard } from "../../components/ui/Card";
import ProductTable from "./components/product-table/ProductTable";

const Products = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-52">
      <h1 className="text-center text-3xl lg:text-left">Products</h1>
      <DashboardCard className="pt-2">
        <ProductTable />
      </DashboardCard>
    </div>
  );
};
export default Products;

import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import BrandForm from "./components/BrandForm";

const AddBrand = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-96">
      <div className="flex justify-between">
        <h2 className="text-center text-3xl lg:text-left">Add brand</h2>
        <Button asChild variant="outline" size="lg">
          <Link to="/catalog/brands">All Brands</Link>
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <BrandForm />
        </CardContent>
      </Card>
    </div>
  );
};
export default AddBrand;

import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import ProductForm from "./components/form/ProductForm";
import { Input } from "../../components/ui/Input";

const EditProduct = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-96">
      <div className="flex justify-between">
        <h2 className="text-center text-3xl lg:text-left">Edit Product</h2>
        <Button asChild variant="outline" size="lg">
          <Link to="/catalog/products">All Products</Link>
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          {/* <div className="mx-auto flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button type="button">Search</Button>
          </div> */}
          <ProductForm page="edit" />
        </CardContent>
      </Card>
    </div>
  );
};
export default EditProduct;

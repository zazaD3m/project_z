import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import { Link } from "react-router-dom";
import ColorForm from "./components/ColorForm";

const AddColor = () => {
  return (
    <div className="space-y-6 py-6 lg:px-8 2xl:px-96">
      <div className="flex justify-between">
        <h2 className="text-center text-3xl lg:text-left">Add color</h2>
        <Button asChild variant="outline" size="lg">
          <Link to="/catalog/colors">All Colors</Link>
        </Button>
      </div>
      <Card>
        <CardContent>
          <ColorForm />
        </CardContent>
      </Card>
    </div>
  );
};
export default AddColor;

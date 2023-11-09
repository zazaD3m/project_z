import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SheetClose } from "./ui/sheet";

const CartModalProductCard = ({
  product: { id, title, price, category, brand, model, color, size, images },
}) => {
  return (
    <div className="relative flex items-center pl-3 pr-5">
      <div className="w-2/5 p-2">
        <img
          src={images}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <SheetClose asChild>
        <Link
          to={`/store/${category}/${brand}/${id}`}
          className="flex w-3/5 flex-col gap-0.5 p-2 text-sm"
        >
          <h1 className="font-semibold">{title}</h1>
          <span className="text-xs font-light">{category}</span>
          <span className="text-xs font-light">{price}</span>
          <p className="font-normal">
            Brand: <span className="text-xs font-light">{brand}</span>
          </p>
          <p>
            Size: <span className="text-xs font-light">{size}</span>
          </p>
          <p>
            Color: <span className="text-xs font-light">{color}</span>
          </p>
        </Link>
      </SheetClose>
      <div className="absolute right-0 top-0 flex h-full items-center">
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="z-50"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Trash2 strokeWidth={1.25} />
          </Button>
        </SheetClose>
      </div>
    </div>
  );
};
export default CartModalProductCard;

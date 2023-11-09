import { Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

const CartProductCard = ({
  product: { id, title, price, category, brand, model, color, size, images },
  className,
}) => {
  return (
    <div className={cn("relative flex items-center py-2 pr-5", className)}>
      <div className="w-auto max-w-[220px] p-2 pl-0 ">
        <img
          src={images}
          alt=""
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          className="rounded-sm"
        />
      </div>
      <Link
        to={`/store/${category}/${brand}/${id}`}
        className="flex w-3/5 flex-col gap-0.5 self-stretch p-2 text-sm"
      >
        <h1 className="font-semibold">{title}</h1>
        <span className="text-xs font-light">{category}</span>
        <p className="font-normal">
          Brand: <span className="text-xs font-light">{brand}</span>
        </p>
        <p>
          Size: <span className="text-xs font-light">{size}</span>
        </p>
        <p>
          Color: <span className="text-xs font-light">{color}</span>
        </p>
        <div className="flex flex-grow items-end text-xs font-light">
          <span>$ {price}</span>
        </div>
      </Link>
      <div className="absolute right-0 top-0 flex h-full items-center">
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
      </div>
    </div>
  );
};
export default CartProductCard;

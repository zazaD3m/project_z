import { Expand, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useState } from "react";
import ProductCardModal from "./ProductCardModal";

const ProductCard = ({
  className,
  data: { id, title, price, category, brand, model, color, size, images },
  data,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <>
      <div
        className={cn(
          "group my-8 flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm sm:mt-6",
          className,
        )}
      >
        <div className="relative flex h-full overflow-hidden">
          <Link
            to={`/store/${category.toLowerCase()}/${brand.toLowerCase()}/${id}`}
          >
            <img
              className="absolute top-0 h-full w-full object-contain transition-all duration-300 lg:group-hover:scale-105"
              src={images}
              alt="product image"
            />
          </Link>
          <div className="absolute right-2 top-2 rounded-full transition-all duration-100 lg:active:bg-yellow">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent ">
              <Button
                variant="icon"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  setIsFavorite((prevState) => !prevState);
                }}
              >
                <Heart
                  size={20}
                  strokeWidth={1.5}
                  className={
                    isFavorite
                      ? "fill-yellow transition-all duration-100 active:scale-75"
                      : "transition-all duration-100 active:scale-75 lg:hover:fill-yellow"
                  }
                />
              </Button>
            </div>
          </div>
          <div className="absolute right-2 top-10  rounded-full lg:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent">
              <Button
                variant="icon"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInCart((prevState) => !prevState);
                }}
              >
                <ShoppingBag
                  size={20}
                  strokeWidth={1.5}
                  className={
                    isInCart
                      ? "fill-yellow transition-all duration-100 active:scale-75"
                      : "transition-all duration-100 active:scale-75 lg:hover:fill-yellow"
                  }
                />
              </Button>
            </div>
          </div>
          <div className="absolute right-2 top-10 hidden  rounded-full lg:block">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent transition-all duration-500 ">
              <Button
                variant="icon"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowProductModal((prevState) => !prevState);
                }}
                className="cursor-pointer hover:text-yellow"
              >
                <Expand size={20} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-between p-2 pb-3 sm:px-5 lg:px-5 lg:pb-6">
          <Link
            to={`/store/${category.toLowerCase()}/${brand.toLowerCase()}`}
            className="text-sm text-[#c45614] opacity-80"
          >
            {brand}
          </Link>
          <Link
            to={`/store/${category.toLowerCase()}/${brand.toLowerCase()}/${id}`}
          >
            <h5 className="my-2 text-start text-sm font-medium tracking-normal sm:my-3 sm:text-base 2xl:my-4">
              {title}
            </h5>
          </Link>
          <div className="flex justify-center">
            <span className="pr-1 pt-1 text-gray-900">{price}</span>
            <span className="text-sm text-gray-400 line-through">
              {price + 100}
            </span>
          </div>
          <div className="absolute -right-40 bottom-4 hidden transition-all duration-300 group-hover:right-4 lg:block">
            <Button
              size="xs"
              className="uppercase"
              onClick={(e) => {
                e.preventDefault();
                setIsInCart((prevState) => !prevState);
              }}
            >
              {isInCart ? "Remove From Cart" : "add to cart"}
            </Button>
          </div>
        </div>
      </div>
      {showProductModal && (
        <ProductCardModal
          open={showProductModal}
          onOpenChange={setShowProductModal}
          data={data}
          isInCart={isInCart}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          setIsInCart={setIsInCart}
        />
      )}
    </>
  );
};
export default ProductCard;

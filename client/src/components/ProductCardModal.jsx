import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import ProductDetailDialogThumb from "./ProductDetailDialogThumb";

const ProductCardModal = ({
  open,
  onOpenChange,
  isInCart,
  setIsInCart,
  isFavorite,
  setIsFavorite,
  data: {
    id,
    title,
    price,
    category,
    brand,
    model,
    color,
    size,
    images,
    imagesArr,
  },
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="h-[600px] w-[900px] xl:h-[750px] xl:w-[1100px]">
          <section className="flex h-full w-full">
            <div className="relative w-3/5">
              <ProductDetailDialogThumb images={imagesArr} />
            </div>
            <div className="h-full w-2/5 px-8 py-12 xl:py-24">
              <div className="flex h-full flex-col text-sm xl:text-lg">
                <h1 className="mb-2 cursor-default text-2xl xl:text-4xl">
                  {title}
                </h1>
                <Button
                  className="mb-8 text-xs text-[#c45614] opacity-80 xl:text-sm"
                  asChild
                  variant="link"
                  size="link"
                >
                  <Link
                    to={`/store/${category.toLowerCase()}/${brand.toLowerCase()}`}
                    onClick={() => {
                      onOpenChange(false);
                    }}
                  >
                    {brand}
                  </Link>
                </Button>
                <div className="mb-4 cursor-default">
                  <span className="mr-4 inline-block w-12 font-light xl:text-base">
                    Size:
                  </span>
                  <span>{size}</span>
                </div>
                <div className="mb-auto cursor-default">
                  <span className="mr-4 inline-block w-12 font-light xl:text-base">
                    Color:
                  </span>
                  <span>{color}</span>
                </div>
                <div className="mb-4 flex cursor-default">
                  <span className="pr-1 pt-1 text-gray-900">$ {price}</span>
                  <span className="text-sm text-gray-400 line-through">
                    {price + 100}
                  </span>
                </div>
                <div className="mb-2 flex justify-center">
                  <Button
                    className="mr-8 h-8 w-4/5 text-sm xl:h-10"
                    size="default"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInCart((prevState) => !prevState);
                    }}
                  >
                    {isInCart ? "Remove From Cart" : "add to cart"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-sm bg-background p-1 shadow-sm xl:h-10 xl:w-10"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsFavorite((prevState) => !prevState);
                    }}
                  >
                    <Heart
                      strokeWidth={1.5}
                      className={
                        isFavorite
                          ? "h-full w-full fill-yellow text-primary-light"
                          : "h-full w-full fill-primary-foreground text-primary-light hover:fill-yellow hover:opacity-90 "
                      }
                    />
                  </Button>
                </div>
                <Button variant="link" size="link" asChild>
                  <Link
                    to={`/store/${category.toLowerCase()}/${brand.toLowerCase()}/${id}`}
                  >
                    View Full Product Details
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ProductCardModal;

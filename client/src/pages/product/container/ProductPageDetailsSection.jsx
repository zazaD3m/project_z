import { Heart } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import ProductPageDetailsInfoAccordion from "../components/ProductPageDetailsInfoAccordion";

const ProductPageDetailsSection = ({
  product: { brand, category, color, id, model, price, size, title },
}) => {
  return (
    <section className="w-full lg:w-1/2 lg:pl-6">
      <div className="space-y-2  text-black">
        <h1 className="inline-block w-1/2 sm:w-full">{title}</h1>
        <h3 className="inline-block w-1/2 text-right sm:text-left">
          Model: <span className="font-light">{model}</span>
        </h3>
        <Separator />
        <h3>
          <span>${price}</span>
        </h3>
        <Separator />
        <h3>
          Brand: <span className="font-light">{brand}</span>
        </h3>
        <Separator />
        <h3>
          Category: <span className="font-light">{category}</span>
        </h3>
        <Separator />
        <div className="flex items-center gap-x-4">
          <h3>Size</h3>
          <div className="w-min border border-black p-1 px-5">
            <span>{size}</span>
          </div>
        </div>
        <Separator />
        <div>
          <h3>
            Color: <span className="font-light">{color}</span>
          </h3>
        </div>
        <div className="mb-2 flex w-full justify-between sm:w-3/5 sm:justify-start lg:w-2/5">
          <Button
            className="mr-8 h-8 w-1/2 text-sm lg:w-4/6 xl:h-10"
            size="default"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setIsInCart((prevState) => !prevState);
            // }}
          >
            {/* {isInCart ? "Remove From Cart" : "add to cart"} */}
            Add To Cart
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-sm bg-background p-1 shadow-sm xl:h-10 xl:w-10"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setIsFavorite((prevState) => !prevState);
            // }}
          >
            <Heart
              strokeWidth={1.5}
              // className={
              //   isFavorite
              //     ? "h-full w-full fill-yellow text-primary-light"
              //     : "h-full w-full fill-primary-foreground text-primary-light hover:fill-yellow hover:opacity-90 "
              // }
              className="h-full w-full fill-yellow text-primary-light"
            />
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <ProductPageDetailsInfoAccordion />
      </div>
      <div className="my-4 space-y-4 bg-bggray py-6">
        <h1 className="text-center">Payment Methods</h1>
        <div className="mx-auto flex w-min space-x-2">
          <div className="h-6 w-12 border bg-white text-center text-xs font-light">
            visa
          </div>
          <div className="h-6 w-12 border bg-white text-center text-xs font-light">
            visa
          </div>
          <div className="h-6 w-12 border bg-white text-center text-xs font-light">
            visa
          </div>
          <div className="h-6 w-12 border bg-white text-center text-xs font-light">
            visa
          </div>
          <div className="h-6 w-12 border bg-white text-center text-xs font-light">
            visa
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductPageDetailsSection;

// brand:"Lenovo"
// category:"Laptop"
// color:"Black"
// id:10
// images:"/src/assets/images/catlaptop.jpg"
// imagesArr:(6) ['/src/assets/images/catlaptop.jpg', '/src/assets/images/catmonitor.jpg', '/src/assets/images/catsmartphone2.jpg', '/src/assets/images/catsmartphone.jpg', '/src/assets/images/catsmartwatch.jpg', '/src/assets/images/catcontroller.jpg']
// model:"ThinkPad X1 Carbon"
// price:1099.99
// size:"M"
// title:"Laptop 4"

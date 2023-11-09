import { cn } from "../../../lib/utils";
import images from "../../../constants/images";
import { Expand } from "lucide-react";
import { Link } from "react-router-dom";

const OrdersProductCard = ({ className }) => {
  return (
    <div
      className={cn(
        "group my-8 flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm sm:mt-6",
        className,
      )}
    >
      <a className="relative flex h-full overflow-hidden" href="#">
        <img
          className="absolute top-0 h-full w-full object-contain transition-all duration-300 lg:group-hover:scale-105"
          src={images.Tab}
          alt="product image"
        />
        <div className="absolute right-2 top-2 hidden rounded-full lg:block">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent transition-all duration-500 ">
            <Expand size={20} strokeWidth={1.5} className="hover:text-yellow" />
          </div>
        </div>
      </a>
      <div className="relative flex flex-col items-start justify-between p-2 pb-3 sm:px-5 lg:px-5 lg:pb-6">
        <Link to="/" className="text-sm text-[#c45614] opacity-80">
          Haveils
        </Link>
        <Link to="#">
          <h5 className="my-2 text-start text-sm font-medium tracking-normal sm:my-3 sm:text-base 2xl:my-4">
            Piped Linen Blend Blazer adfasfbjl asfkjl
          </h5>
        </Link>
        <div className="flex justify-center">
          <span className="pr-1 pt-1 text-gray-900">$179</span>
          <span className="text-sm text-gray-400 line-through">$499</span>
        </div>
      </div>
    </div>
  );
};
export default OrdersProductCard;

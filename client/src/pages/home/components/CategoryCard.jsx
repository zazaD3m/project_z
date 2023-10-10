import { cn } from "../../../lib/utils";

const CategoryCard = ({ className, data: { title, p, img } }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-1.5 lg:px-8 lg:py-7",
        className,
      )}
    >
      <div className="self-stretch">
        <div className="flex h-full flex-col justify-evenly sm:justify-center sm:gap-y-2 sm:pl-5 sm:pt-2.5 lg:px-0 ">
          <h5 className="text-sm font-semibold leading-4 sm:leading-none">
            {title}
          </h5>
          <p className="text-xs font-light">{p}</p>
        </div>
      </div>
      <img
        className="h-full max-w-[70px] object-cover sm:max-w-[90px]"
        src={img}
        alt={title}
      />
    </div>
  );
};
export default CategoryCard;

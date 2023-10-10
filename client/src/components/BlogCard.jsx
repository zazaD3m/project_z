import { images } from "../constants";
import { Button } from "./ui/button";

const BlogCard = () => {
  return (
    <div className="rounded-xl bg-white text-primary shadow-sm">
      <a href="#" className="flex justify-stretch">
        <img className="w-full rounded-t-xl" src={images.Blog01} alt="" />
      </a>
      <div className="px-4 py-7">
        <span className="text-xs opacity-80 sm:text-sm">11 JUNE. 2022</span>
        <h3 className="mb-2.5 mt-2 font-semibold text-black opacity-90 sm:text-lg">
          A Beautiful Sunday Renaissance
        </h3>
        <p className="mb-3 text-xs opacity-80 sm:mb-4 sm:text-sm">
          You&apos;re Only As Good As Your Last Collection. Which Is An Enormous
          Pressure. I Think There is...
        </p>
        <Button
          type="button"
          asChild
          size="xl"
          className="h-[34px] w-[100px] p-0 text-xs font-normal sm:h-[40px] sm:w-[120px] sm:text-base "
        >
          <a href="#" className="">
            Read more
          </a>
        </Button>
      </div>
    </div>
  );
};
export default BlogCard;

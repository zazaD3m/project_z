import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container py-2.5 text-primary sm:pt-5 lg:py-16">
      <section className="grid gap-2.5 lg:grid-cols-2 lg:gap-5">
        <section className="relative rounded-xl">
          <img
            className="h-auto w-full rounded-xl"
            src={images.MainBanner01}
            alt="Image Description"
          />
          <div className="absolute left-6 right-0 top-9 sm:left-14 sm:top-14 xl:left-16 xl:top-16">
            <h3 className="text-xs font-medium text-[#C66D39]  xl:text-lg">
              SUPERCHARGED FOR PROS.
            </h3>
            <p className="my-2 font-semibold sm:text-3xl lg:my-4 lg:text-4xl xl:my-8 xl:text-5xl">
              IPad S13+ Pro.
            </p>
            <p className="mb-6 mt-0 text-xs font-normal  leading-4 lg:leading-5 xl:mb-8 xl:mt-5 xl:text-lg xl:leading-6">
              From $999 or $41/mo. <br /> for 24 mo. Footnote*
            </p>
            <Button
              size="xl"
              className="h-7 w-20 text-xs sm:h-9 sm:w-24 xl:h-11 xl:w-32 xl:text-sm"
            >
              <Link>BUY NOW</Link>
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-2 lg:gap-5">
          <div className="group relative overflow-hidden rounded-xl">
            <img
              className="h-auto w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={images.CatBanner01}
              alt="Image Description"
            />
            <div className="absolute left-4 top-11 cursor-pointer sm:left-3 sm:top-4 lg:left-8 lg:top-9 xl:left-8 xl:top-12">
              <h3 className="text-xs font-medium text-[#C66D39] sm:font-normal xl:text-sm">
                BEST SALE
              </h3>
              <p className="text-xs font-semibold sm:text-sm sm:font-medium lg:my-2 lg:text-xl xl:my-4 xl:text-3xl">
                Laptops Max
              </p>
              <p className="mb-6 mt-0 hidden text-xs font-normal leading-4 sm:block lg:leading-5 xl:mb-8 xl:mt-5 xl:text-lg xl:leading-6">
                From $999 or <br /> $41/mo.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img
              className="h-auto w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={images.CatBanner03}
              alt="Image Description"
            />
            <div className="absolute left-4 top-11 cursor-pointer sm:left-3 sm:top-4 lg:left-8 lg:top-9 xl:left-8 xl:top-12">
              <h3 className="text-xs font-medium text-[#C66D39] sm:font-normal xl:text-sm">
                BEST SALE
              </h3>
              <p className="text-xs font-semibold sm:text-sm sm:font-medium lg:my-2 lg:text-xl xl:my-4 xl:text-3xl">
                Laptops Max
              </p>
              <p className="mb-6 mt-0 hidden text-xs font-normal leading-4 sm:block lg:leading-5 xl:mb-8 xl:mt-5 xl:text-lg xl:leading-6">
                From $999 or <br /> $41/mo.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img
              className="h-auto w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={images.CatBanner02}
              alt="Image Description"
            />
            <div className="absolute left-4 top-11 cursor-pointer sm:left-3 sm:top-4 lg:left-8 lg:top-9 xl:left-8 xl:top-12">
              <h3 className="text-xs font-medium text-[#C66D39] sm:font-normal xl:text-sm">
                BEST SALE
              </h3>
              <p className="text-xs font-semibold sm:text-sm sm:font-medium lg:my-2 lg:text-xl xl:my-4 xl:text-3xl">
                Laptops Max
              </p>
              <p className="mb-6 mt-0 hidden text-xs font-normal leading-4 sm:block lg:leading-5 xl:mb-8 xl:mt-5 xl:text-lg xl:leading-6">
                From $999 or <br /> $41/mo.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img
              className="h-auto w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={images.CatBanner04}
              alt="Image Description"
            />
            <div className="absolute left-4 top-11 cursor-pointer sm:left-3 sm:top-4 lg:left-8 lg:top-9 xl:left-8 xl:top-12">
              <h3 className="text-xs font-medium text-[#C66D39] sm:font-normal xl:text-sm">
                BEST SALE
              </h3>
              <p className="text-xs font-semibold sm:text-sm sm:font-medium lg:my-2 lg:text-xl xl:my-4 xl:text-3xl">
                Laptops Max
              </p>
              <p className="mb-6 mt-0 hidden text-xs font-normal leading-4 sm:block lg:leading-5 xl:mb-8 xl:mt-5 xl:text-lg xl:leading-6">
                From $999 or <br /> $41/mo.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Hero;

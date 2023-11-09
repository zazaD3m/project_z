import ProductCard from "../../../components/ProductCard";
import { products } from "../../../assets/productDetails";
import { cn } from "../../../lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturedCollection = ({ className }) => {
  return (
    <section
      className={cn(
        "container relative bg-bggray pb-8 text-primary sm:pt-9",
        className,
      )}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-medium lg:text-2xl">Featured Collection</h3>
        <div className="flex gap-1">
          <button className="featuredCollectionNavigationPrev flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow disabled:invisible lg:p-1.5 lg:hover:bg-yellow ">
            <ChevronLeft className="h-full w-full  active:scale-125" />
          </button>
          <button className="featuredCollectionNavigationNext flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow disabled:invisible lg:p-1.5 lg:hover:bg-yellow ">
            <ChevronRight className="h-full w-full active:scale-125" />
          </button>
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".featuredCollectionNavigationNext",
          prevEl: ".featuredCollectionNavigationPrev",
        }}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          799: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1900: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        pagination={{
          dynamicBullets: true,
          el: ".featuredCollectionPaginationWrapper",
        }}
        modules={[Pagination, Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard data={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="featuredCollectionPaginationWrapper absolute"
        style={{ bottom: "20px" }}
      ></div>
    </section>
  );
};
export default FeaturedCollection;

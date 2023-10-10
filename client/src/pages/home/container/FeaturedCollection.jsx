import ProductCard from "../../../components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedCollection = () => {
  return (
    <section className="container relative bg-bggray pb-8 text-primary sm:pt-9">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium lg:text-2xl">Featured Collection</h3>
        <div className="flex gap-1">
          <button className="featuredCollectionNavigationPrev flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow lg:p-1.5 lg:hover:bg-yellow ">
            <ChevronLeft className="h-full w-full  active:scale-125" />
          </button>
          <button className="featuredCollectionNavigationNext flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow lg:p-1.5 lg:hover:bg-yellow ">
            <ChevronRight className="h-full w-full  active:scale-125" />
          </button>
        </div>
      </div>
      <div className="">
        <Swiper
          navigation={{
            enabled: true,
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
          className="featuredCollectionSwiper "
        >
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[304px] sm:h-[342px] lg:h-[402px] xl:h-[424px]">
              <ProductCard />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="featuredCollectionPaginationWrapper absolute"
        style={{ bottom: "20px" }}
      ></div>
    </section>
  );
};
export default FeaturedCollection;

import BlogCard from "../../../components/BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  return (
    <section className="container relative bg-bggray py-8 pb-24 text-primary sm:pt-9 ">
      <div className="flex justify-between pb-6">
        <h3 className="text-xl font-medium lg:text-2xl">Our Latest News</h3>
        <div className="flex gap-1">
          <button className="blogsNavigationPrev flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow lg:p-1.5 lg:hover:bg-yellow">
            <ChevronLeft className="h-full w-full active:scale-125" />
          </button>
          <button className="blogsNavigationNext flex cursor-pointer items-center justify-center rounded-full p-0 px-0.5 transition-all duration-100 active:bg-yellow lg:p-1.5 lg:hover:bg-yellow">
            <ChevronRight className="h-full w-full active:scale-125" />
          </button>
        </div>
      </div>
      <div className="px-1 sm:px-0">
        <Swiper
          navigation={{
            enabled: true,
            nextEl: ".blogsNavigationNext",
            prevEl: ".blogsNavigationPrev",
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          pagination={{
            dynamicBullets: true,
            el: ".blogsPaginationWrapper",
          }}
          modules={[Pagination, Navigation]}
          className="blogsSwiper"
        >
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="blogsPaginationWrapper absolute"
        style={{ bottom: "50px" }}
      ></div>
    </section>
  );
};
export default Blogs;

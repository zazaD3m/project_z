import CategoryCard from "../components/CategoryCard";
import Service from "../components/Service";
import categories from "../assets/categoriesData";
import services from "../assets/servicesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <section className="bg-bggray container relative pb-8">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay]}
        className="servicesSwiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Service data={service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="rounded-xl bg-white p-4 py-2 shadow-sm">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".categoriesPaginationWrapper",
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
          className="categoriesSwiper"
        >
          <SwiperSlide>
            <CategoryCard
              data={categories[0]}
              className="border-b sm:border-r"
            />
            <CategoryCard data={categories[1]} className="sm:border-r" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              data={categories[2]}
              className="border-b sm:border-r"
            />
            <CategoryCard data={categories[3]} className="sm:border-r" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard data={categories[4]} className="border-b" />
            <CategoryCard data={categories[5]} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              data={categories[6]}
              className="border-b sm:border-l"
            />
            <CategoryCard data={categories[7]} className="sm:border-l" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              data={categories[8]}
              className="border-b sm:border-l "
            />
            <CategoryCard data={categories[9]} className="sm:border-l" />
          </SwiperSlide>
        </Swiper>
      </section>
      <div
        className="categoriesPaginationWrapper absolute text-center"
        style={{ bottom: "32px" }}
      ></div>
    </section>
  );
};
export default Categories;

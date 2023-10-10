import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import brandsData from "../assets/brandsData";
import Brand from "../components/Brand";

const Brands = () => {
  return (
    <section className="bg-bggray container pt-8 sm:pb-8">
      <div className="rounded-xl bg-white  shadow-sm">
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1366: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="brandsSwiper"
        >
          {brandsData.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="group flex items-center justify-center px-2.5 sm:px-3.5 sm:py-2.5"
            >
              <Brand data={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Brands;

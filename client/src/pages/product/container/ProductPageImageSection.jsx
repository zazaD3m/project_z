import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, ZoomIn, ZoomOut } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

import { Zoom, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";

const ProductPageImageSection = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageFullScreen, setImageFullScreen] = useState(false);

  const toggleImageFullScreen = (e) => {
    e.preventDefault();
    setImageFullScreen((prevState) => !prevState);
  };

  return (
    <>
      {/* w-full lg:w-1/2 lg:pr-6 */}
      <section
        className={cn(
          "w-full lg:w-1/2 lg:pr-6",
          " ",
          imageFullScreen &&
            "fixed left-1/2 top-1/2 z-50 h-full -translate-x-1/2 -translate-y-1/2 rounded-sm border bg-bggray p-4 shadow-sm lg:w-full lg:bg-background lg:px-[250px] lg:py-12 xl:px-[500px] xl:py-28",
        )}
      >
        <div className="relative h-4/5 border">
          <Swiper
            zoom={true}
            loop={true}
            navigation={{
              nextEl: "#productDetailsPageImgNextBtn",
              prevEl: "#productDetailsPageImgPrevBtn",
            }}
            scrollbar={{
              enabled: true,
              hide: false,
              el: "#productDetailsPageScrollbarDiv",
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Thumbs, Scrollbar, Zoom]}
            className="h-full w-full"
          >
            {images.map((image, i) => (
              <SwiperSlide key={image + i}>
                <div className="swiper-zoom-container  h-full w-full items-center justify-center">
                  <div className="aspect-square w-full max-w-[500px] xl:max-w-[600px]">
                    <img
                      src={image}
                      alt=""
                      style={{
                        objectFit: "fill",
                        width: "100%",
                        aspectRatio: "1/1",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            variant="ghost"
            id="productDetailsPageImgPrevBtn"
            className="invisible absolute bottom-24 left-0 top-24 z-10 block p-4 transition-all hover:bg-black hover:bg-opacity-20 lg:visible"
          >
            <ArrowBigLeft className="h-8 w-8 fill-black stroke-white" />
          </Button>
          <Button
            variant="ghost"
            id="productDetailsPageImgNextBtn"
            className="invisible absolute bottom-24 right-0 top-24 z-10 block p-4 transition-all hover:bg-black hover:bg-opacity-20 lg:visible"
          >
            <ArrowBigRight className="h-8 w-8 fill-black stroke-white" />
          </Button>
          <Button
            onClick={toggleImageFullScreen}
            variant="ghost"
            className="absolute -right-2 -top-2 z-20 block p-4 lg:right-0 lg:top-0 lg:hover:bg-black lg:hover:bg-opacity-20"
          >
            {imageFullScreen ? (
              <ZoomOut className="h-8 w-8 stroke-primary-light opacity-60" />
            ) : (
              <ZoomIn className="h-8 w-8 stroke-primary-light opacity-60" />
            )}
          </Button>
        </div>
        <div className="h-1/5">
          <Swiper
            onSwiper={setThumbsSwiper}
            breakpoints={{
              520: {
                slidesPerView: 5,
              },
              700: {
                slidesPerView: 6,
              },
              1023: {
                slidesPerView: 5,
              },
              1060: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={10}
            slidesPerView={4}
            className="productDetailsPageThumb h-5/6 py-2.5"
          >
            {images.map((image, i) => (
              <SwiperSlide
                key={image + i}
                className={`h-full max-w-fit rounded-sm p-0.5`}
              >
                <img
                  src={image}
                  alt=""
                  style={{
                    objectFit: "contain",
                    height: "100%",
                  }}
                  className="aspect-square rounded-sm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="h-1/6">
            <div
              id="productDetailsPageScrollbarDiv"
              className="h-1 bg-black bg-opacity-10"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductPageImageSection;

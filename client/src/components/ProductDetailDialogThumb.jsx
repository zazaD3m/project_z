import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

import { Zoom, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import { Button } from "./ui/button";

const ProductDetailDialogThumb = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="relative h-4/5">
        <Swiper
          zoom={true}
          loop={true}
          navigation={{
            nextEl: "#productDetailDialogImgNextBtn",
            prevEl: "#productDetailDialogImgPrevBtn",
          }}
          scrollbar={{
            enabled: true,
            hide: false,
            el: "#productDetailDialogScrollbarDiv",
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
              <div className="swiper-zoom-container h-full w-full">
                <img
                  src={image}
                  alt=""
                  style={{
                    objectFit: "fill",
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          variant="ghost"
          id="productDetailDialogImgPrevBtn"
          className="absolute bottom-0 left-0 top-0 z-50 block p-4 transition-all hover:bg-black hover:bg-opacity-20"
        >
          <ArrowBigLeft className="h-8 w-8 fill-black stroke-white" />
        </Button>
        <Button
          variant="ghost"
          id="productDetailDialogImgNextBtn"
          className="absolute bottom-0 right-0 top-0 z-50 block p-4 transition-all hover:bg-black hover:bg-opacity-20"
        >
          <ArrowBigRight className="h-8 w-8 fill-black stroke-white" />
        </Button>
      </div>
      <div className="h-1/5">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={images.length}
          className="productDetailDialogThumb h-5/6 py-2.5"
        >
          {images.map((image, i) => (
            <SwiperSlide
              key={image + i}
              className={`h-full max-w-[150px] rounded-xl p-0.5`}
            >
              <img
                src={image}
                alt=""
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                className="rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="h-1/6">
          <div
            id="productDetailDialogScrollbarDiv"
            className="h-1 bg-black bg-opacity-10"
          ></div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailDialogThumb;

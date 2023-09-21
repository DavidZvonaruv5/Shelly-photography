import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import Image from "next/image";

export default function Banner() {
  const images = ["/9.jpg", "/10.jpg", "/7.jpg", "/3.jpg"];
  const imageText = ["Hello", "Shelly", "Shoval", "Nagger"]; // Added text for each image
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loading="lazy"
          sizes="100vw"
          autoplay={{
            delay: 5000,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="min-w-full h-full flex-none relative"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  width={900}
                  height={900}
                  decoding="async"
                  fetchPriority="high"
                  priority
                  className="w-full h-full object-cover sm:object-cover"
                  alt={`Banner ${index + 1}`}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl text-white">{imageText[index]}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

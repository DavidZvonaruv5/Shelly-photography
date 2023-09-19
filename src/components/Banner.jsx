
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore,{autoplay} from 'swiper'

export default function Banner() {

  const images = ["/8.jpg", "/6.jpg", "/3.jpg","/7.jpg"]
  SwiperCore.use([Autoplay])

  return (
  <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
        
      >
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000
          }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

    
        {images.map((img, index) => (
     
      <SwiperSlide key={index} className="min-w-full h-full flex-none">
        <img src={images[index]} className='w-full h-full object-cover'></img>
      </SwiperSlide>
        ))}
          </Swiper>
      </div>

    </div>
    
  );
};
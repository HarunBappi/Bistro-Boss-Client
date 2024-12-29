import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// category Slider Image
import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';

import { Pagination } from 'swiper/modules';

export default function Category() {
  return (
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className='text-3xl uppercase text-center text-white -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Salads</h3>
        </SwiperSlide>
      </Swiper>

  )
}

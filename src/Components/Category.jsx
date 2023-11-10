import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../CustomCss/swiperCustom.css';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionHeading from './Shared/SectionHeading';

export default function Category() {

  return (
    <section className='my-20'>
        <SectionHeading subHeading='From 11:00am to 10:00pm' heading='ORDER ONLINE' />

        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <img src={slide1}/> </SwiperSlide>
        <SwiperSlide> 
            <img src={slide2}/> </SwiperSlide>
        <SwiperSlide>
             <img src={slide3}/> </SwiperSlide>
        <SwiperSlide>
             <img src={slide4}/> </SwiperSlide>
        <SwiperSlide>
             <img src={slide5}/> </SwiperSlide>
     
      </Swiper>
    </section>
  )
}

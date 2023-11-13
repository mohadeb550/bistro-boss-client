import FoodCard from "./Shared/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

export default function OrderTab({items}) {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
     <section>
        
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12">
          {items.map(item => <FoodCard key={item._id} food={item} /> )}
          </div>
        </SwiperSlide>
      
      </Swiper>
    </section>
  )
}

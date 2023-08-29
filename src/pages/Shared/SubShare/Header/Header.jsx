import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../../../assets/home/01.jpg';
import img2 from '../../../../assets/home/02.jpg';
import img3 from '../../../../assets/home/03.jpg';
import img4 from '../../../../assets/home/04.jpg';
import img5 from '../../../../assets/home/05.jpg';
import img6 from '../../../../assets/home/06.jpg';

const Header = ({ image, name }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><div><img src={img1}  /></div></SwiperSlide>
      <SwiperSlide><div><img src={img2}  /></div></SwiperSlide>
      <SwiperSlide><div><img src={img3}  /></div></SwiperSlide>
      <SwiperSlide><div><img src={img4}  /></div></SwiperSlide>
      <SwiperSlide><div><img src={img5}  /></div></SwiperSlide>
      <SwiperSlide><div><img src={img6}  /></div></SwiperSlide>
      
      
    </Swiper>
  );
};

export default Header;

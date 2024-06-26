import React from 'react';
import './Slides.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import slide from '../../../assets/img/slide.jpg';
import slide2 from '../../../assets/img/slide2.jpg';
import slide3 from '../../../assets/img/slide3.jpg';
import slide4 from '../../../assets/img/slide4.jpg';

import "swiper/css";
import "swiper/css/navigation";

const Slides = () => {
  return (
    <section className="slider">
      <h2 className="slider-title">
        Фотографии
      </h2>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 500
        }}
        speed={2000}
        modules={[Navigation]}
        className="sliderSwiper"
      >
        <SwiperSlide>
          <div className="slider-block">
            <img src={slide} alt="" className="slider-block-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-block">
            <img src={slide2} alt="" className="slider-block-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-block">
            <img src={slide3} alt="" className="slider-block-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-block">
            <img src={slide4} alt="" className="slider-block-img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slides;

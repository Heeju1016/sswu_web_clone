import React from 'react'
import '../../assets/scss/setting/common.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';

import Slider01 from '../../assets/img/png/slider01.png'
import Slider02 from '../../assets/img/png/slider02.png'
import Slider03 from '../../assets/img/png/slider03.png'
import Slider04 from '../../assets/img/png/slider04.png'

const Slider = () => {
    return (
        <Swiper
            modules={[Scrollbar, A11y, Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 1000}}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide><img src={Slider01} className='Slider_img' ></img></SwiperSlide>
        <SwiperSlide><img src={Slider02} className='Slider_img'></img></SwiperSlide>
        <SwiperSlide><img src={Slider03} className='Slider_img'></img></SwiperSlide>
        <SwiperSlide><img src={Slider04} className='Slider_img'></img></SwiperSlide>
        ...
        </Swiper>
    )
}

export default Slider
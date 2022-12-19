import React, { Children, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper';
import { Block } from 'vcc-ui';

import { SliderNavigation } from './SliderNavigation';
import { SliderPagination } from './SliderPagination';

import 'swiper/css';

interface ISliderProps {
  children: React.ReactNode;
}

export const Slider = ({children}: ISliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItemsLength = Children.count(children);

  return (
    <Block extend={{marginLeft: 15, fromM: {marginRight: 15}}}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={item => {
          setCurrentSlide(item.realIndex);
        }}
        modules={[Keyboard]}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
        <SliderNavigation />
        <SliderPagination currentSlide={currentSlide} sliderLength={sliderItemsLength} />
      </Swiper>
    </Block>
  )
}

import React from 'react';
import { useSwiper } from 'swiper/react';
import { Flex, Click } from 'vcc-ui';

interface ISliderPaginationProps {
  currentSlide: number;
  sliderLength: number;
}

export const SliderPagination = ({ currentSlide, sliderLength }: ISliderPaginationProps) => {
  const swiper = useSwiper();

  return (
    <Flex extend={{
      justifyContent: 'center',
      margin: '25px 0',
      fromM: {
        display: 'none'
      }
    }}>
      <Flex extend={{
        listStyle: 'none', 
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        {[...Array(sliderLength).keys()].map(slideIndex => (
          <li key={slideIndex}>
            <Click
              extend={{
                width: 12,
                height: 12,
                backgroundColor: 'black',
                borderRadius: '50%',
                padding: 0,
                border: 0,
                margin: '0 2px'
              }}
              style={currentSlide === slideIndex ? {opacity: 1} : {opacity: 0.2} }
              aria-label="dot"
              onClick={() => swiper.slideTo(slideIndex)}
            />
          </li>
        ))}
      </Flex>
    </Flex>
  );
};

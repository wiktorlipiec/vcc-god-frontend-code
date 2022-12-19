import React from 'react';
import { Flex, Click } from 'vcc-ui';
import { useSwiper } from 'swiper/react';

import { Chevron } from '../../Icons';

export const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <Flex extend={{ 
      display: 'none', 
      fromM: { 
        display: 'flex',
        justifyContent: 'flex-end', 
        margin: 15, 
      } 
    }}>
      <Flex extend={{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end' 
      }}>
        <Click onClick={() => swiper.slidePrev()} aria-label='previous'>
          <Chevron rotate={180} />
        </Click>
        <Click style={{marginLeft: 10}} onClick={() => swiper.slideNext()} aria-label='next'>
          <Chevron />
        </Click>
      </Flex>
    </Flex>
  )
}

import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesWorkGDSlide = [
  {
    id: 0,
    path: `../assets/images/work/gd/1.png`,
    text: 'sliderworkgd1',
  },
  {
    id: 1,
    path: `../assets/images/work/gd/2.png`,
    text: 'sliderworkgd2',
  },
  {
    id: 2,
    path: `../assets/images/work/gd/3.png`,
    text: 'sliderworkgd3',
  },
  {
    id: 3,
    path: `../assets/images/work/gd/4.png`,
    text: 'sliderworkgd4',
  },
  {
    id: 4,
    path: `../assets/images/work/gd/5.png`,
    text: 'sliderworkgd5',
  },
  {
    id: 5,
    path: `../assets/images/work/gd/6.png`,
    text: 'sliderworkgd6',
  },
  {
    id: 6,
    path: `../assets/images/work/gd/7.png`,
    text: 'sliderworkgd7',
  },
  {
    id: 7,
    path: `../assets/images/work/gd/8.png`,
    text: 'sliderworkgd8',
  },

  {
    id: 8,
    path: `../assets/images/work/gd/9.png`,
    text: 'sliderworkgd9',
  },
  {
    id: 9,
    path: `../assets/images/work/gd/10.png`,
    text: 'sliderworkgd10',
  },
  {
    id: 10,
    path: `../assets/images/work/gd/11.png`,
    text: 'sliderworkgd11',
  },

  {
    id: 11,
    path: `../assets/images/work/gd/12.png`,
    text: 'sliderworkgd12',
  },
  {
    id: 12,
    path: `../assets/images/work/gd/13.png`,
    text: 'sliderworkgd13',
  },
  {
    id: 13,
    path: `../assets/images/work/gd/14.png`,
    text: 'sliderworkgd14',
  },
  {
    id: 14,
    path: `../assets/images/work/gd/15.png`,
    text: 'sliderworkgd15',
  },
]

export default function SlideWorkGD() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={false}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        {ImagesWorkGDSlide.map((ImagesWorkGD) => (
          <SwiperSlide key={ImagesWorkGD.id}>
            <div>
              <img
                src={ImagesWorkGD.path}
                alt={ImagesWorkGD.text}
                className="h-full w-auto object-contain hidden md:block"
              />
              <img
                src={ImagesWorkGD.path}
                alt={ImagesWorkGD.text}
                className="h-auto w-screen object-contain object-center block md:hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

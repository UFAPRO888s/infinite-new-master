import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesWorkACSlide = [
  {
    id: 0,
    path: `../assets/images/work/ac/1.png`,
    text: 'sliderworkgd1',
  },
  {
    id: 1,
    path: `../assets/images/work/ac/2.png`,
    text: 'sliderworkgd2',
  },
  {
    id: 2,
    path: `../assets/images/work/ac/3.png`,
    text: 'sliderworkgd3',
  },
  {
    id: 3,
    path: `../assets/images/work/ac/4.png`,
    text: 'sliderworkgd4',
  },
  {
    id: 4,
    path: `../assets/images/work/ac/5.png`,
    text: 'sliderworkgd5',
  },
  {
    id: 5,
    path: `../assets/images/work/ac/6.png`,
    text: 'sliderworkgd6',
  },
  {
    id: 6,
    path: `../assets/images/work/ac/7.png`,
    text: 'sliderworkgd7',
  },
  {
    id: 7,
    path: `../assets/images/work/ac/8.png`,
    text: 'sliderworkgd8',
  },
]

export default function SlideWorkAC() {
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
        {ImagesWorkACSlide.map((ImagesWorkAC) => (
          <SwiperSlide key={ImagesWorkAC.id}>
            <div>
              <img
                src={ImagesWorkAC.path}
                alt={ImagesWorkAC.text}
                className="h-full w-auto object-contain hidden md:block"
              />
              <img
                src={ImagesWorkAC.path}
                alt={ImagesWorkAC.text}
                className="h-auto w-screen object-contain object-center block md:hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesWorkWASlide = [
  {
    id: 0,
    path: `../assets/images/work/wa/1.png`,
    text: 'sliderwork1',
  },
  {
    id: 1,
    path: `../assets/images/work/wa/2.png`,
    text: 'sliderwork2',
  },
  {
    id: 2,
    path: `../assets/images/work/wa/3.png`,
    text: 'sliderwork3',
  },
  {
    id: 3,
    path: `../assets/images/work/wa/4.png`,
    text: 'sliderwork4',
  },
  {
    id: 4,
    path: `../assets/images/work/wa/5.png`,
    text: 'sliderwork5',
  },
  {
    id: 5,
    path: `../assets/images/work/wa/6.png`,
    text: 'sliderwork6',
  },
  {
    id: 6,
    path: `../assets/images/work/wa/7.png`,
    text: 'sliderwork7',
  },
  {
    id: 7,
    path: `../assets/images/work/wa/8.png`,
    text: 'sliderwork8',
  },
  {
    id: 8,
    path: `../assets/images/work/wa/9.png`,
    text: 'sliderwork9',
  },
  {
    id: 9,
    path: `../assets/images/work/wa/10.png`,
    text: 'sliderwork10',
  }
]

export default function SlideWorkWA() {
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
        {ImagesWorkWASlide.map((ImagesWorkWA) => (
          <SwiperSlide key={ImagesWorkWA.id}>
            <div>
              <img
                src={ImagesWorkWA.path}
                alt={ImagesWorkWA.text}
                className="h-full w-auto object-contain hidden md:block"
              />
              <img
                src={ImagesWorkWA.path}
                alt={ImagesWorkWA.text}
                className="h-auto w-screen object-contain object-center block md:hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

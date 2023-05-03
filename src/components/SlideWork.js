import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesWorkSlide = [
  {
    id: 0,
    path: `../assets/images/work/1.jpg`,
    text: 'sliderwork1',
  },
  {
    id: 1,
    path: `../assets/images/work/2.jpg`,
    text: 'sliderwork2',
  },
  {
    id: 2,
    path: `../assets/images/work/3.jpg`,
    text: 'sliderwork3',
  },
  {
    id: 3,
    path: `../assets/images/work/4.jpg`,
    text: 'sliderwork4',
  },
  {
    id: 4,
    path: `../assets/images/work/5.jpg`,
    text: 'sliderwork5',
  },
  {
    id: 5,
    path: `../assets/images/work/6.jpg`,
    text: 'sliderwork6',
  }
]

export default function SlideWork() {
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
        {ImagesWorkSlide.map((ImagesWork) => (
          <SwiperSlide key={ImagesWork.id}>
            <div>
              <img
                src={ImagesWork.path}
                alt={ImagesWork.text}
                className="h-full w-auto container-slider object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

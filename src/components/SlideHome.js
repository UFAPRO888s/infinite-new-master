import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesHomeSlide = [
  {
    id: 0,
    path: '../assets/images/home/sliderhome/1-2.jpg',
    text: 'sliderhome1',
  },
  {
    id: 1,
    path: '../assets/images/home/sliderhome/2-2.jpg',
    text: 'sliderhome2',
  },
  {
    id: 2,
    path: '../assets/images/home/sliderhome/3-2.jpg',
    text: 'sliderhome3',
  },
  {
    id: 3,
    path: '../assets/images/home/sliderhome/4-2.jpg',
    text: 'sliderhome4',
  },
  {
    id: 4,
    path: '../assets/images/home/sliderhome/5-2.jpg',
    text: 'sliderhome5',
  },
  {
    id: 5,
    path: '../assets/images/home/sliderhome/6-2.jpg',
    text: 'sliderhome6',
  },
  {
    id: 6,
    path: '../assets/images/home/sliderhome/7-2.jpg',
    text: 'sliderhome7',
  },
]

export default function SlideHome() {
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
        className="swiper"
      >
        {ImagesHomeSlide.map((ImagesHome) => (
          <SwiperSlide key={ImagesHome.id}>
            <div className="h-full w-auto object-cover">
              <img
                src={ImagesHome.path}
                alt={ImagesHome.text}
                className="3xl:w-[1584px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

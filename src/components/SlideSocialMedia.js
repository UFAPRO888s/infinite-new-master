import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesSlideSocialMediaSlide = [
  {
    id: 0,
    path: `../assets/images/service/SocialMedia/printing/01.jpg`,
    text: 'sliderprinting1',
  },
  {
    id: 1,
    path: `../assets/images/service/SocialMedia/printing/02.jpg`,
    text: 'sliderprinting2',
  },
  {
    id: 2,
    path: `../assets/images/service/SocialMedia/printing/03.jpg`,
    text: 'sliderprinting3',
  },
  {
    id: 3,
    path: `../assets/images/service/SocialMedia/printing/04.jpg`,
    text: 'sliderprinting4',
  },
  {
    id: 4,
    path: `../assets/images/service/SocialMedia/printing/05.jpg`,
    text: 'sliderprinting5',
  },
  {
    id: 5,
    path: `../assets/images/service/SocialMedia/printing/06.jpg`,
    text: 'slideprinting6',
  }
]

export default function SlideSocialMedia() {
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
        {ImagesSlideSocialMediaSlide.map((ImagesWork) => (
          <SwiperSlide key={ImagesWork.id}>
            <div>
              <img
                src={ImagesWork.path}
                alt={ImagesWork.text}
                className="h-full w-auto container-sliderprinting object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

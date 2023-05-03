import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/navigation'

const ImagesSlideSocialMedia2Slide = [
  {
    id: 0,
    path: `../assets/images/service/SocialMedia/online/1.jpg`,
    text: 'slideronline7611',
  },
  {
    id: 1,
    path: `../assets/images/service/SocialMedia/online/2.jpg`,
    text: 'slideronline6842',
  },
  {
    id: 2,
    path: `../assets/images/service/SocialMedia/online/3.jpg`,
    text: 'slideronline943',
  },
  {
    id: 3,
    path: `../assets/images/service/SocialMedia/online/4.jpg`,
    text: 'slideronline464',
  },
  {
    id: 4,
    path: `../assets/images/service/SocialMedia/online/5.jpg`,
    text: 'slideronline555',
  },
  {
    id: 5,
    path: `../assets/images/service/SocialMedia/online/6.jpg`,
    text: 'slideonline6946',
  },
  {
    id: 6,
    path: `../assets/images/service/SocialMedia/online/07-1.jpg`,
    text: 'slideonline716',
  },
  {
    id: 7,
    path: `../assets/images/service/SocialMedia/online/07-2.jpg`,
    text: 'slideonline756',
  },
  {
    id: 8,
    path: `../assets/images/service/SocialMedia/online/07-3.jpg`,
    text: 'slideonline636',
  },
  {
    id: 9,
    path: `../assets/images/service/SocialMedia/online/7.jpg`,
    text: 'slideonline76',
  },
  {
    id: 10,
    path: `../assets/images/service/SocialMedia/online/8.jpg`,
    text: 'slideonline86',
  },
  {
    id:11,
    path: `../assets/images/service/SocialMedia/online/9.jpg`,
    text: 'slideonline96',
  },
  {
    id:12,
    path: `../assets/images/service/SocialMedia/online/10.jpg`,
    text: 'slideonline106',
  },
  {
    id:13,
    path: `../assets/images/service/SocialMedia/online/11.jpg`,
    text: 'slide11online6',
  },
  {
    id:14,
    path: `../assets/images/service/SocialMedia/online/12.jpg`,
    text: 'slideonline126',
  },
  {
    id:15,
    path: `../assets/images/service/SocialMedia/online/13.jpg`,
    text: 'slideonline136',
  },
  {
    id:16,
    path: `../assets/images/service/SocialMedia/online/14.jpg`,
    text: 'slideonline146',
  },
  {
    id:17,
    path: `../assets/images/service/SocialMedia/online/15.jpg`,
    text: 'slideonline156',
  },
  {
    id:18,
    path: `../assets/images/service/SocialMedia/online/16.jpg`,
    text: 'slideonline166',
  },
  {
    id:19,
    path: `../assets/images/service/SocialMedia/online/17.jpg`,
    text: 'slideonline176',
  },
  {
    id:20,
    path: `../assets/images/service/SocialMedia/online/18.jpg`,
    text: 'slideonline186',
  },
  {
    id:21,
    path: `../assets/images/service/SocialMedia/online/19.jpg`,
    text: 'slideprinting6',
  },
  {
    id:22,
    path: `../assets/images/service/SocialMedia/online/20.jpg`,
    text: 'slideonline206',
  },
  {
    id:23,
    path: `../assets/images/service/SocialMedia/online/21.jpg`,
    text: 'slideonline216',
  },
  {
    id:24,
    path: `../assets/images/service/SocialMedia/online/22-1.jpg`,
    text: 'slideonline216',
  },
  {
    id:25,
    path: `../assets/images/service/SocialMedia/online/22-2.jpg`,
    text: 'slideonline2226',
  },
  {
    id:26,
    path: `../assets/images/service/SocialMedia/online/22.jpg`,
    text: 'slideonline226',
  }
]

export default function SlideSocialMedia2() {
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
        {ImagesSlideSocialMedia2Slide.map((ImagesWork) => (
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

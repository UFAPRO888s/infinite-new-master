import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SlideWorkWA from "../SlideWorkWA";
import SlideWorkAC from "../SlideWorkAC";
import SlideWorkGD from "../SlideWorkGD";

const HWorkSlide = [
  {
    id: 0,
    com: <SlideWorkWA />,
    text: "Website Design",
    link: "/services/design",
  },
  {
    id: 1,
    com: <SlideWorkAC />,
    text: "Advertising Online & Content",
    link: "/services/digital",
  },
  {
    id: 2,
    com: <SlideWorkGD />,
    text: "Graphic Design",
    link: `/services/digital`,
  },
];

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function WorkSection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="bg-infinite1-100 px-0">
            <div className="columns-1 mb-5">
              <div className="grid justify-items-center">
                <img
                  className="object-cover object-center w-full h-auto"
                  src="../../assets/images/work/pic-work.jpg"
                  alt="/pic-work"
                />
              </div>
            </div>
            <div className="columns-1 my-20 ">
              <div className="grid justify-items-center">
                <blockquote className="mx-10 text-center">
                    <h1 className="text-5xl 3xl:text-7xl font-semibold leading-[2rem] 3xl:leading-[3rem]">
                      ผลงานของเรา
                    </h1>
                   </blockquote>
              </div>
            </div>
            {HWorkSlide.map((HWork) => (
              <div className="columns-1 mt-5 ">
                <blockquote className="px-10 my-10 text-start border-s-8">
                  <h2 className="text-5xl 3xl:text-6xl font-bold leading-[2rem] 3xl:leading-[3rem]">
                    {HWork.text}
                  </h2>
                </blockquote>
                <div className="relative">
                  <div>
                    <div className="max-w-full flex items-center justify-end">
                      <p className="inline-block h-144 w-screen bg-infinite2-4"></p>
                    </div>
                    <div className="max-w-full flex items-center justify-end">
                      <p className="inline-block h-[21.5rem] w-screen bg-infinite2-4"></p>
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <div className="grid grid-cols-12">
                      
                      <div className="col-span-12 m-5">{HWork.com}</div>
                      <div className="col-span-12">
                        <div className="grid justify-items-center w-full mt-10">
                          <a href={HWork.link}>
                            <button className="in-button">
                              <img
                                className=" object-contain object-center h-20"
                                src="../../assets/images/mobile/about/ปุ่ม-service.png"
                                alt="ปุ่ม6"
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="columns-1">
              <div className="grid grid-cols-12 my-10">
                <div className="col-span-5">
                  <blockquote className="mr-10 my-10">
                    <h2 className="text-3xl 3xl:text-4xl font-semibold leading-[2rem] 3xl:leading-[3rem]">
                      Infinite Digital
                      ถูกสร้างขึ้นมาจากกลุ่มคนที่มีความทะเยอทะยาน
                      และหลงใหลในสื่อดิจิทัล
                    </h2>
                    <div className="mt-10">
                      <a href="/services/design">
                        <button className="in-button">
                          <img
                            className="object-cover object-center w-38 h-auto"
                            src="../../assets/images/about/ปุ่มservice.png"
                            alt="ปุ่มservice"
                          />
                        </button>
                      </a>
                    </div>
                  </blockquote>
                </div>
                <div className="col-span-7">
                  <blockquote className="mr-10 my-11">
                    <p className="2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                      เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน
                      ภารกิจของเราในทุกๆ
                      วันคือการทำให้ทีมเรามีประสิทธิภาพมากขึ้น
                      เพื่อสร้างสรรค์ผลงานที่มีคุณภาพสำหรับลูกค้าของเรา
                    </p>
                    <div className="mt-5">
                      <p className="inline-block h-1 w-4/12 bg-in-purple-3"></p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <img
                className="object-cover object-bottom w-screen h-auto"
                src="../../assets/images/work/pic-work.jpg"
                alt="work"
              />
            </div>
          </div>
          {HWorkSlide.map((HWork) => (
            <div className="columns-1 my-5 items-center text-center justify-center">
              <blockquote className="mx-5">
                <h2 className="text-2xl font-semibold my-5">{HWork.text}</h2>
              </blockquote>
              {/* <div className="grid justify-items-center mb-5">
                <a href={HWork.link}>
                  <button className="in-button">
                    <img
                      className="object-cover object-top w-20 "
                      src="../../assets/images/mobile/about/ปุ่ม-service.png"
                      alt="ปุ่ม6"
                    />
                  </button>
                </a>
              </div> */}

              <div className="object-cover object-bottom w-screen h-auto">
                {HWork.com}
              </div>
            </div>
          ))}
          <div className="columns-1 mx-5 mb-2">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 my-5">
                <div className="grid items-center text-center py-0">
                  <div>
                    <p className="leading-3">
                      <span className="inline-block h-1 w-14 rounded bg-infinite1-900"></span>
                    </p>
                  </div>
                </div>
                <blockquote>
                  <div className="grid justify-items-start">
                    <img
                      className="object-cover object-center w-8 h-auto"
                      src="../../assets/images/mobile/about/ลูกน้ำ1.png"
                      alt="ลูกน้ำ1"
                    />
                  </div>
                  <p className="text-2xl font-semibold mx-10 my-2 text-center">
                  Infinite Digital ถูกสร้างขึ้นมาจากกลุ่มคนที่มีความทะเยอทะยาน
                และหลงใหลในสื่อดิจิทัล
                  </p>
                  <div className="grid justify-items-end">
                    <img
                      className="object-cover object-center w-8 h-auto"
                      src="../../assets/images/mobile/about/ลูกน้ำ2.png"
                      alt="ลูกน้ำ2"
                    />
                  </div>
                </blockquote>
              </div>
              <div className="col-span-12 my-5">
                <blockquote>
                  <p className="text-base mb-5 text-center">
                    เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน
                    ภารกิจของเราในทุกๆ วันคือการทำให้ทีมเรามีประสิทธิภาพมากขึ้น
                    เพื่อสร้างสรรค์ผลงานที่มีคุณภาพสำหรับลูกค้าของเรา
                  </p>
                  <div className="grid justify-items-center my-10">
                    <a href="/work">
                      <button className="in-button">
                        <img
                          className="object-cover object-center w-32 h-auto"
                          src="../../assets/images/mobile/about/ปุ่ม-service.png"
                          alt="ปุ่มservice"
                        />
                      </button>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

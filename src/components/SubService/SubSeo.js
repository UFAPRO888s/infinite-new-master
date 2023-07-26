import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubSeo() {
  return (
    <>
      <div className="block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 h-[16rem] sm:h-72 md:h-screen">
            <div className="columns-1 mb-10">
              <div className="grid justify-items-center">
                <img
                  className="object-contain md:object-cover object-center w-full h-auto"
                  src="../../assets/images/service/Seo/Seo-Digital-Marketing.jpg"
                  alt="SEO-Digital-Marketing"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto lg:flex lg:items-center lg:justify-end">
                <p className="inline-block h-[80vh] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute top-0 md:top-10 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-12 md:col-span-6 mx-10 md:mx-16 text-left font-bold">
                    <div className="grid justify-items-start w-full">
                      <blockquote>
                        <h2 className="text-4xl md:text-7xl 3xl:text-8xl mt-5 text-in-purple-1 font-R-FLEX">
                          SEO Digital Marketing
                        </h2>
                        <h3 className="block md:hidden text-xl md:text-3xl 3xl:text-4xl font-normal mt-3 md:mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                          สร้างคอนเทนท์ SEO ให้เว็บไซต์ติดหน้าแรกบน Google
                        </h3>
                        <h3 className="hidden md:block md:text-3xl 3xl:text-4xl font-normal mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                          สร้างคอนเทนท์ SEO <br />
                          ให้เว็บไซต์ติดหน้าแรก <br />
                          บน Google
                        </h3>
                      </blockquote>
                    </div>
                    <div className="grid justify-items-center md:justify-items-start w-28 md:w-full my-5 md:my-10">
                      <a href="/contact">
                        <button className="in-button">
                          <img
                            className=" object-contain md:object-none object-center"
                            src="../assets/images/home/section6/ปุ่ม6.png"
                            alt="ปุ่ม6"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 mx-10 md:mx-16 text-left leading-8 3xl:leading-10 whitespace-pre-wrap">
                    <h3 className="text-xl md:text-3xl 3xl:text-4xl mt-5 md:mt-10 font-normal text-in-purple-2">
                      การทำ SEO คือการทำให้ชื่อแบรนด์
                    </h3>
                    <p className="text-base md:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                      ชื่อผลิตภัณฑ์/บริการ ของคุณ ติดอันดับการค้นหา
                      ผลลัพธ์ที่ตามมาคือความน่าเชื่อถือ
                       และจำนวนผู้คนวิ่งเข้าเว็บ
                      ยิ่งคนวิ่งเข้าเยอะมากขึ้นเท่าไหร่
                      ผลิตภัณฑ์ของคุณก็จะมีโอกาสเพิ่มยอดขายได้มากเท่านั้น
                    </p>
                    <p className="text-base md:text-xl 3xl:text-2xl font-normal mt-5 md:mt-12 leading-8 3xl:leading-10 whitespace-pre-wrap">
                      อีกข้อสำคัญของการทำ SEO คือการใช้
                      <br />
                      <span className="text-xl md:text-3xl 3xl:text-4xl font-normal text-in-purple-2">
                        กฎแห่งแรงดึงดูดเราเรียกสิ่งนี้ว่า Evergreen Content
                      </span>{" "}
                      การทำ Evergreen Content
                      เป็นการสร้างคอนเทนต์ที่น่าสนใจเฉพาะด้านให้เว็บไซต์เยอะ ๆ
                      เพื่อเพิ่มคำสำคัญให้ติดคำค้นหายอดฮิตสิ่งนี้จะเป็นแรงดึงดูดที่คอยช่วยดึงให้คนที่สนใจ
                      เกี่ยวกับธุรกิจของคุณได้เข้ามาค้นหา และเจอเว็บไซต์ของคุณผ่าน
                      Search Engine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5 md:mt-28">
          <div className="relative">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 md:col-span-5 mb-2 mt-24 md:mt-0 mx-10 md:mx-0 text-left font-bold">
                  <div className="grid justify-items-center md:justify-items-start w-full">
                    <img
                      className="object-contain w-screen h-auto"
                      src="../../assets/images/service/Seo/pic-illustration-1.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7 mx-10 md:mx-20 text-left">
                  <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-5 md:mt-10 font-semibold font-Prompt text-in-purple-1">
                    เพิ่มอันดับเว็บไซต์ด้วย SEO
                  </h3>
                  <p className="text-xl md:text-3xl 3xl:text-4xl font-light mt-1 md:mt-2 leading-8 3xl:leading-10 font-Prompt text-in-purple-1">
                    Search Engine Optimization
                  </p>
                  <div className="grid justify-items-center w-full my-5 md:my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <div className=" text-base md:text-xl 3xl:text-2xl font-normal mt-5 md:mt-12 leading-8 3xl:leading-10 whitespace-pre-wrap">
                    <ul className="list-inside list-disc">
                      <li className="font-Prompt">
                        เพิ่มจํานวนการเข้าชมเว็บไซต์แบบออแกนิค
                      </li>
                      <li className="font-Prompt">
                        50% ของคีย์เวิร์ดที่เลือกมาติดหน้าแรก ภายใน 6 เดือน
                      </li>
                      <li className="font-Prompt">
                        เหนือกว่าคู่แข่ง ด้วยกลยุทธ์ SEO สายขาว
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full text-right"></div>
          </div>
        </div>
        <div className="container mx-auto mt-5 md:mt-10 3xl:mt-22">
          <div className="relative mb-28">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 md:col-span-6 mx-10 md:mx-16 text-left z-10">
                  <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-5 md:mt-10 font-semibold font-Prompt text-in-purple-1 leading-snug">
                    เพิ่มยอดผู้เข้าชมเว็บไซต์
                  </h3>
                  <p className="text-2xl md:text-4xl 3xl:text-5xl font-semibold mt-1 first-letter:md:mt-4 leading-8 3xl:leading-10 font-Prompt text-in-purple-1">
                    ด้วยการทำ SEO
                  </p>
                  <p className="text-base md:text-xl 3xl:text-2xl font-normal mt-5 md:mt-12 leading-8 3xl:leading-10 whitespace-pre-wrap ">
                    SEO หรือ Search Engine Optimization คือ
                    การเพิ่มประสิทธิภาพให้คอนเทนต์
                     และเว็บไซต์เป็นไปตามมาตรฐานของ Search Engine
                    เพื่อให้ติดอันดับต้น ๆ ในหน้าการค้นหาโดยใช้ Keywords
                    เป็นตัวกําหนด
                    เมื่อเว็บไซต์ติดอันดับจะทําให้มีคนเข้ามาชมมากขึ้น
                    กลายเป็นร้านค้า อันดับต้น ๆ ที่ลูกค้าจะเลือกซื้อ
                     และทําให้ยอดขายของธุรกิจคุณเพิ่มขึ้น
                    โดยที่คุณไม่ต้องเสียเงินค่าโฆษณาให้กับ Google หรือ Facebook
                  </p>
                  <div className="grid justify-items-center w-full my-7 md:my-16 md:border md:bg-gray-dark">
                    <hr />
                  </div>
                </div>
                <div className="hidden md:block col-span-12 md:col-span-6 mx-10 md:mx-0 text-left font-bold z-10 md:w-full">
                  <div className="grid justify-items-start w-full mt-5 md:mt-28 3xl:mt-44">
                    <img
                      className=" object-contain md:object-cover h-auto "
                      src="../../assets/images/service/Seo/pic-illustration-2.png"
                       alt="Infinite"
                    />
                  </div>
                </div>

                <div className="col-span-12 mt-20 z-0">
                  <div className="relative ">
                    <div>
                      <div className="max-w-full mx-auto -py-2 md:px-4 lg:flex lg:items-center lg:justify-end -mt-20">
                        <p className="inline-block h-96 w-full bg-white"></p>
                      </div>
                      <div className="max-w-full mx-auto -py-2 md:px-4 lg:flex lg:items-center lg:justify-end -mt-20">
                        <p className="inline-block h-80 w-full bg-white"></p>
                      </div>
                      <div className="max-w-full mx-auto -py-4 px-4 lg:flex lg:items-center lg:justify-end -mt-10">
                        <p className="inline-block md:h-10 w-full bg-infinite2-4"></p>
                      </div>
                    </div>
                    <div className="absolute top-8 md:top-28 w-full text-right">
                      <div className="h-full w-full">
                        <div className="grid grid-cols-12 mx-10 md:mx-5 relative">
                          <div className="col-span-12 md:col-span-5 md:mx-20 text-left font-bold">
                            <div className="grid justify-items-start w-full">
                              <img
                                className="origin-none origin-cover w-full h-auto"
                                src="../../assets/images/service/Seo/pic-illustration-3.png"
                                alt="Infinite"
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-7 text-left">
                            <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-10 font-semibold text-in-purple-1">
                              เพิ่มอันดับเว็บไซต์ด้วย SEO ดีอย่างไร?
                            </h3>
                            <div className="text-base md:text-xl 3xl:text-2xl font-normal mt-2 md:mt-12 leading-7 md:leading-8 3xl:leading-10 whitespace-pre-wrap">
                              <ul className="list-inside list-disc">
                                <li>
                                  ธุรกิจเข้าถึงผู้ใช้งานได้ง่าย
                                  ตรงตามกลุ่มเป้าหมาย ได้ทุกที่ทุกเวลา
                                </li>
                                <li>
                                  ส่งเสริมให้ธุรกิจของคุณมีความโดดเด่นเป็นที่น่าจดจำ
                                </li>
                                <li>
                                  เข้าใจผู้ใช้งานที่จะเป็นลูกค้าของธุรกิจได้มากขึ้นจากการวิเคราะห์ข้อมูล
                                </li>
                                <li>
                                  เพิ่มโอกาสให้แบรนด์หรือธุรกิจของคุณปิดการขายได้มากขึ้น
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

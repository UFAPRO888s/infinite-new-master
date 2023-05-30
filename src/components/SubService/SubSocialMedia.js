import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import SlideSocialMedia2 from "../SlideSocialMedia2";
import SlideSocialMedia from "../SlideSocialMedia";
gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubSocialMedia() {
  return (
    <>
      <div className="hidden md:block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 h-screen">
            <div className="columns-1 mb-10">
              <div className="grid justify-items-center">
                <img
                  className="object-cover object-center w-full h-auto"
                  src="../../assets/images/service/SocialMedia/Creative-Online.jpg"
                  alt="Creative-Online"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto lg:flex lg:items-center lg:justify-end">
                <p className="inline-block h-[80vh] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute top-10 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-6 mx-16 text-left font-bold">
                    <div className="grid justify-items-start w-full">
                      <h2 className="text-7xl 3xl:text-8xl mt-5 text-in-purple-1 font-R-FLEX">
                        Creative online
                        <br />
                        and printing
                      </h2>
                      <h3 className="text-3xl 3xl:text-4xl font-normal mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                        เอเจนซี่การตลาด
                        <br />
                        และโฆษณาออนไลน์
                      </h3>
                    </div>
                    <div className="grid justify-items-start w-full my-10">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-6 ml-7 mr-16 text-left leading-8 3xl:leading-10 whitespace-pre-wrap">
                    <h3 className="text-3xl 3xl:text-4xl mt-10 font-normal text-in-purple-2">
                      ให้บริการด้านการตลาดและโฆษณาดิจิตอลแบบครบวงจร ที่{" "}
                      <span className="text-infinite3 uppercase ">
                        Infinity Digital Agency
                      </span>{" "}
                    </h3>
                    <p className="text-xl 3xl:text-2xl font-normal mt-2 leading-8 3xl:leading-10 whitespace-pre-wrap">
                      เราให้บริการด้านการตลาดและโฆษณาออนไลน์แบบครบวงจร
                      เราเริ่มต้นด้วยการทำวิจัย ที่ครอบคลุม
                      นั่นรวมถึงการวิจัยตลาดการวิจัยทางธุรกิจการวิจัยผลิตภัณฑ์และบริการ
                      การวิจัยคู่แข่ง และการวิจัย{" "}
                      <span className="text-infinite3">Trend</span> ของตลาด
                    </p>
                    <p className="text-xl 3xl:text-2xl font-normal mt-2 leading-8 3xl:leading-10 whitespace-pre-wrap">
                      <span className="text-3xl 3xl:text-4xl mt-10 font-normal text-in-purple-2">
                        ทีมการตลาดออนไลน์ของเรา
                      </span>
                      พัฒนากลยุทธ์ทางการตลาดและการวางแผนแคมเปญที่เต็ม รูปแบบ
                      แผนการตลาดดิจิทัลและการทำงาน จะรวมถึงการพัฒนา{" "}
                      <span className="text-infinite3">Concept</span> และ{" "}
                      <span className="text-infinite3">Creative</span>{" "}
                      วางทิศทางของแคมเปญ วางแผนการใช้และ ซื้อสื่อ
                      การสร้างตอนเท้นท์ต่างๆ เช่นกราฟิก และวิดีโอ การซื้อสื่อ
                      และการเพิ่มประสิทธิภาพหลังจากแคมเปญการตลาดออนไลน์ของ
                      คุณเปิดตัวแล้ว
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-28">
          <div className="relative">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-5 ml-4 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="w-screen h-auto"
                      src="../../assets/images/service/SocialMedia/pic-illustration-01.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="col-span-7 mr-4 ml-10 text-left">
                  <h3 className="text-4xl 3xl:text-5xl mt-10 font-semibold font-Prompt text-in-purple-1">
                    วิจัยและวางแผนการตลาดออนไลน์
                  </h3>
                  <p className="text-2xl 3xl:text-3xl font-light mt-2 leading-8 3xl:leading-10 font-Prompt">
                    เราพัฒนาแผนการตลาดดิจิตอลจากวัตถุประสงค์ ของบริษัทคุณ
                    ไม่ว่าจะเป็นการเปิดตัวผลิตภัณฑ์และบริการ
                    เพิ่มการรับรู้ถึงแบรนด์ และเพิ่มยอดขาย
                  </p>
                  <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-6 mx-4 text-left font-bold">
                      <div className="text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>การวิจัยและการวางแผน</li>
                          <li>สร้าง Concept Creative</li>
                          <li>การสร้างคอนเทนท์ต่างๆ</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-6 mx-4 text-left font-bold">
                      <div className="text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>วางทิศทางของแผนงาน</li>
                          <li>การวางแผนสื่อ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 mx-4 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-28">
                <div className="col-span-7 mr-4 ml-10 text-left">
                  <h3 className="text-4xl 3xl:text-5xl mt-10 font-semibold font-Prompt text-in-purple-1">
                    โฆษณาดิจิตอลและการซื้อสื่อดิจิตอล
                  </h3>
                  <p className="text-2xl 3xl:text-3xl font-light mt-2 leading-8 3xl:leading-10 font-Prompt">
                    เราโฆษณาแคมเปญการตลาดของคุณบนโซเชียล
                    มีเดียเครื่องมือค้นหาและแพลตฟอร์มดิจิทัลอื่นๆ
                    ไปยังกลุ่มเป้าหมายของคุณ
                  </p>
                  <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-6 mx-4 text-left font-bold">
                      <div className="text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>โฆษณากูเกิล</li>
                          <li>โฆษณาเฟซบุ๊ก</li>
                          <li>โฆษณาอินสตาแกรม</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-6 mx-4 text-left font-bold">
                      <div className="text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>โฆษณายูทูบ</li>
                          <li>โฆษณาทวิตเตอร์</li>
                          <li>โฆษณาไลน์</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 ml-4 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="w-screen h-auto"
                      src="../../assets/images/service/SocialMedia/pic-illustration-02.png"
                      alt="Infinite"
                    />
                  </div>
                </div>

                <div className="col-span-12 mx-4 text-left font-bold">
                  <div className="grid justify-items-center w-full my-10 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5">
          <div className="relative mb-28">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 z-0">
                  <div className="relative">
                    <div>
                      <div className="max-w-full mx-auto -py-4 lg:flex lg:items-center lg:justify-end">
                        <p className="inline-block h-10 w-full bg-infinite2-4"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-5">
                <div className="col-span-full mx-20 text-center font-bold">
                  <div className="grid justify-items-start w-full my-20">
                    <a href="/services/digital">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../../assets/images/service/Seo/ปุ่ม-ผลงานของเรา.png"
                          alt="ปุ่ม6"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative">
                <div className="col-span-6 ml-32 text-left font-bold">
                  <SlideSocialMedia2 />
                  <div className="grid justify-items-start w-full m-5">
                    <h2 className="text-2xl 3xl:text-3xl">Creative</h2>
                    <p className="text-xl 3xl:text-2xl font-light text-infinite2-2">
                      Online
                    </p>
                  </div>
                </div>
                <div className="col-span-6 ml-32 text-left font-bold">
                  <SlideSocialMedia />
                  <div className="grid justify-items-start w-full m-5">
                    <h2 className="text-2xl 3xl:text-3xl">Creative</h2>
                    <p className="text-xl 3xl:text-2xl font-light text-infinite2-2">
                      Printing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden"></div>
    </>
  );
}

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import SlideWorkWA from "../SlideWorkWA";

const textSalepage = [
  {
    id: 0,
    text: "จด Domain ฟรี 1 ปี .com",
  },
  {
    id: 1,
    text: "ติดตั้ง SSL Certificates",
  },
  {
    id: 2,
    text: "โครงสร้างถูกหลัก SEO และ Google Ads",
  },
  {
    id: 3,
    text: "ติดตั้ง Google Analytics",
  },
  {
    id: 4,
    text: "ทำ Responsive สำหรับทุก Device",
  },
  {
    id: 5,
    text: "ปรับ Page Speed หน้าเว็บ",
  },
  {
    id: 6,
    text: "ให้คำปรึกษา Google Ads ฟรี",
  },
  {
    id: 7,
    text: "มีระบบหลังบ้านให้ อัพเดทข้อมูลและแก้ไขเนื้อหาหน้าเว็บไซต์ได้",
  },
  {
    id: 8,
    text: "จำนวนเว็บ 1 หน้า (Sale-Page)",
  },
  {
    id: 9,
    text: "ไม่เกิน 5-6 Section",
  },
  {
    id: 10,
    text: "ออกแบบหน้าเว็บ + จัดทำรูปฟรี",
  },
];

const textBusiness = [
  {
    id: 0,
    text: "จด Domain ฟรี 1 ปี .com",
  },
  {
    id: 1,
    text: "ติดตั้ง SSL Certificates",
  },
  {
    id: 2,
    text: "โครงสร้างถูกหลัก SEO และ Google Ads",
  },
  {
    id: 3,
    text: "ติดตั้ง Google Analytics",
  },
  {
    id: 4,
    text: "ทำ Responsive สำหรับทุก Device",
  },
  {
    id: 5,
    text: "ปรับ Page Speed หน้าเว็บ",
  },
  {
    id: 6,
    text: "ให้คำปรึกษา Google Ads ฟรี",
  },
  {
    id: 7,
    text: "มีระบบหลังบ้านให้ อัพเดทข้อมูล และแก้ไขเนื้อหาหน้าเว็บไซต์ได้",
  },
  {
    id: 8,
    text: "จำนวนเว็บ 3 หน้า",
  },
  {
    id: 9,
    text: "ไม่เกิน 5-6 Section",
  },
  {
    id: 10,
    text: "แก้งานได้ 2 ครั้ง",
  },
  {
    id: 11,
    text: "ตั้งค่าการเชื่อมโยง Social Media",
  },
  {
    id: 12,
    text: "ฟรี Banner 3 รูป",
  },
  {
    id: 13,
    text: "ไม่รวมออกแบบ และจัดทำรูป",
  },
];

const textEcommerce = [
  {
    id: 0,
    text: "ลงสินค้าให้ 10 รายการ",
  },
  {
    id: 1,
    text: "มีระบบ catalog ด้วย Woocommerce",
  },
  {
    id: 2,
    text: "มีระบบ stock management",
  },
  {
    id: 3,
    text: "มีระบบ payment gateway",
  },
  {
    id: 4,
    text: "Filter หมวดหมู่สินค้าได้",
  },
  {
    id: 5,
    text: "สามารถ export excel ยอดการซื้อได้",
  },
  {
    id: 6,
    text: "สร้างคูปอง, โปรโมชั่นให้สินค้าได้",
  },
  {
    id: 7,
    text: "จำนวนหน้าเว็บไม่เกิน 5 หน้า",
  },
  {
    id: 8,
    text: "ติดตั้ง Facebook pixel",
  },
  {
    id: 9,
    text: "แจ้งเตือนคำสั่งซื้อทาง Line Notify",
  },
  {
    id: 10,
    text: "แก้งานได้ 2 ครั้ง",
  },
  {
    id: 11,
    text: "ฟรี Banner 3 รูป",
  },
  {
    id: 12,
    text: "ไม่รวมออกแบบ และจัดทำรูป",
  },
];

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SubWebDesign() {
  return (
    <>
      <div className=" block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 md:h-screen">
            <div className="columns-1 mb-5">
              <div className="grid justify-items-center">
                <img
                  className="object-contain md:object-cover object-center w-full h-auto"
                  src="../../assets/images/service/WebDesign/Web-Design.jpg"
                  alt="Web Design"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto lg:flex lg:items-center lg:justify-end ">
                <p className="inline-block h-screen 3xl:h-[80vh] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute top-0 md:top-10 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-12 md:col-span-6 ml-10 mr-10 md:ml-20 md:mr-5 text-left font-bold">
                    <div className="grid justify-items-start w-full">
                      <blockquote>
                        <h2 className="text-4xl md:text-7xl 3xl:text-8xl mt-5 text-in-purple-1 font-R-FLEX">
                          Web Design
                        </h2>
                        <h3 className="block md:hidden text-xl md:text-3xl 3xl:text-4xl font-normal mt-3 md:mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                          ออกแบบพัฒนาเว็บไซต์ครบวงจร
                        </h3>
                        <h3 className="hidden md:block md:text-3xl 3xl:text-4xl font-normal mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                          ออกแบบพัฒนาเว็บไซต์ <br />
                          ครบวงจร
                        </h3>
                      </blockquote>
                    </div>
                    <div className="grid justify-items-start w-28 my-5 md:w-full md:my-10">
                      <a href="/contact">
                        <button className="in-button">
                          <img
                            className=" object-contain object-center md:object-none md:object-center"
                            src="../assets/images/home/section6/ปุ่ม6.png"
                            alt="infinite-ปุ่ม6"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 mx-10 md:mx-16 text-left leading-normal whitespace-pre-wrap">
                    <blockquote className="md:my-14">
                      <h3 className="text-xl md:text-2xl 3xl:text-3xl mt-2 md:mt-10 font-normal text-in-purple-2">
                        Infinity Digital Agency ให้บริการออกแบบและพัฒนาเว็บไซต์
                        เว็บแอปพลิเคชันและแอปพลิเคชันมือถือครบวงจร
                      </h3>
                      <p className="text-base md:text-xl 3xl:text-2xl mt-1 font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        เราเริ่มต้นทุกงานด้วยการวิจัยและการวางแผน การออกแบบ UX
                        UI การออกแบบเว็บไซต์ การพัฒนาเว็บไซต์ การ deploy ขึ้น
                        server และบริการดูแลหลังการขาย
                      </p>
                    </blockquote>
                    <blockquote>
                      <p className="text-xl md:text-2xl 3xl:text-3xl mt-5 md:mt-10 font-normal text-in-purple-2">
                        เราออกแบบเว็บไซต์และแอปพลิเคชันมือถือเฉพาะเจาะจงเพื่อธุรกิจของคุณเท่านั่น
                      </p>
                      <p className="text-base md:text-xl 3xl:text-2xl mt-1 font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        เราไม่ใช้เทมเพลต
                        หรือธีมในการออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชันมือถือของคุณ
                        เราออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชันมือถือของคุณตั้งแต่เริ่มต้น!
                        ดังนั้นคุณสามารถมั่นใจได้ว่าเว็บไซต์หรือแอปพลิเคชันมือถือของคุณจะไม่เหมือนใครและดีที่สุดสำหรับธุรกิจของคุณเท่านั้น
                      </p>
                    </blockquote>
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
                <div className="col-span-12 md:col-span-6 mb-2 mx-10 md:mx-0 text-left font-bold block md:hidden">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="object-contain w-screen h-auto"
                      src="../../assets/images/service/WebDesign/pic-illustration-01.png"
                      alt="infinite-pic-illustration-01"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 mx-10 md:mx-20 text-left">
                  <blockquote className="md:my-20">
                    <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-5 md:mt-10 font-semibold text-in-purple-1">
                      ออกแบบ UX UI
                    </h3>
                    <p className="text-xl md:text-3xl 3xl:text-4xl font-light mt-0 md:mt-2 leading-normal font-Prompt text-in-purple-1">
                      เราคือผู้เชี่ยวชาญด้านการออกแบบ
                    </p>
                    <p className="text-xl md:text-3xl 3xl:text-4xl font-light mt-0 md:mt-2 leading-normal font-Prompt text-in-purple-1 ">
                      UX & UI สำหรับเว็บไซต์และแอปมือถือ
                    </p>
                  </blockquote>
                  <div className="grid justify-items-center w-full my-5 md:my-10 border-1 md:border bg-gray-dark">
                    <hr />
                  </div>
                  <blockquote>
                    <div className="text-base md:text-xl 3xl:text-2xl font-normal md:mt-12 leading-normal whitespace-pre-wrap ">
                      <ul className="list-inside list-disc">
                        <li>การออกแบบ UX & UI</li>
                        <li>การออกแบบกราฟฟิก / ระบบสีและภาพ</li>
                        <li>การออกแบบ Transitions และ Animations</li>
                      </ul>
                    </div>
                  </blockquote>
                  <div className="grid justify-items-start w-full mt-5 md:mt-10 ">
                    <img
                      className="object-contain object-center md:object-none md:object-center w-auto h-24 "
                      src="../../assets/images/service/WebDesign/pic-icon-01.png"
                      alt="infinite-pic-icon-01"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 mx-10 md:mx-0 text-left font-bold hidden md:block">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="object-contain w-screen h-auto"
                      src="../../assets/images/service/WebDesign/pic-illustration-01.png"
                      alt="infinite-pic-illustration-01"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-10">
                <div className="col-span-12 md:col-span-6 mx-10 md:mx-0 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="object-contain w-screen h-auto"
                      src="../../assets/images/service/WebDesign/pic-illustration-02.png"
                      alt="infinite-pic-illustration-02"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 mx-10 md:mx-5 text-left">
                  <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-10 font-semibold text-in-purple-1">
                    ออกแบบเว็บไซต์อย่างไรให้เหมาะกับธุรกิจของคุณ ?
                  </h3>
                  <p className="text-base md:text-xl 3xl:text-2xl font-normal mt-2 md:mt-8 leading-8 3xl:leading-10">
                    รูปแบบการทำเว็บไซต์หรือออกแบบเว็บไซต์นั้น
                    จะขึ้นอยู่กับเป้าหมายของคุณเป็นหลัก
                    ถ้าหากคุณต้องการให้ลูกค้าสามารถเข้ามาเลือกซื้อสินค้า
                    และจ่ายเงินที่เว็บไซต์ การทำเว็บไซต์แบบ E-commerce website
                    จะตอบโจทย์ได้อย่างมากที่สุด ลองคิดถึงการซื้อของ
                    ถ้าหากคุณเลือกสินค้าได้แล้ว
                    แต่ไม่สามารถสั่งซื้อได้ในขณะนั้นเลย คุณอาจจะหมดความต้องการ
                    และไม่อยากได้สินค้าชิ้นนั้นไปแล้ว
                    แต่ถ้าเราออกแบบเว็บไซต์ให้ตรงกับความต้องการ ใช้งานง่าย
                    แน่นอนว่าลูกค้าของคุณจะได้รับประสบการณ์ที่ดีจากการใช้บริการ
                    ส่งผลให้ภาพลักษณ์ของแบรนด์ดีขึ้นตามด้วยเช่นกัน
                  </p>
                  <div className="grid justify-items-start w-32 my-5 md:w-full md:my-10">
                    <a href="/contact">
                      <button className="in-button">
                        <img
                          className="object-contain object-center md:object-none md:object-center"
                          src="../../assets/images/service/WebDesign/ปุ่ม-ปรึกษาเราตอนนี้.png"
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
        <div className="container mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 my-5 md:my-10 px-10">
            <blockquote>
              <h3 className="text-center text-4xl md:text-5xl 3xl:text-6xl mt-5 md:mt-10 font-semibold text-in-purple-1">
                WEBSITE
              </h3>
            </blockquote>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center place-items-center gap-1 ">
            <div className="rounded-xl shadow-lg mt-2 md:mt-0">
              <div class="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 md:max-w-md ">
                <div>
                  <blockquote className="bg-infinite2-2 p-3 rounded-t-xl ">
                    <h3 className="text-center text-3xl md:text-3xl pb-0  font-semibold text-white">
                      Salepage
                    </h3>
                  </blockquote>
                  <blockquote className="p-5 h-auto w-[300px] md:h-[420px] md:w-[400px] lg:h-[420px] lg:w-[400px]">
                    <ul className="list-disc px-5">
                      {textSalepage.map((Salepage) => (
                        <li
                          key={Salepage.id}
                          className=" text-base md:text-base font-semibold pb-1 text-infinite3"
                        >
                          {Salepage.text}
                        </li>
                      ))}
                    </ul>
                  </blockquote>
                </div>
                <div>
                  <blockquote className="bg-infinite2-4 p-3 rounded-b-xl ">
                    <h5 className="text-center text-xl md:text-2xl font-bold md:font-semibold text-infinite3">
                      เริ่มต้น <span className="font-Prompt">6,990</span> บาท
                    </h5>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-lg md:shadow-xl mt-10 md:mt-0">
              <div class="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-lg">
                <div>
                  <blockquote className="bg-infinite2-2 p-2 md:p-5 rounded-t-xl">
                    <h3 className="text-center text-3xl md:text-5xl pb-0 md:pb-2 font-semibold text-white">
                      Business
                    </h3>
                  </blockquote>
                  <blockquote className="p-5 h-auto w-[300px] md:h-[550px] md:w-[500px]">
                    <ul className="list-disc px-10">
                      {textBusiness.map((Business) => (
                        <li
                          key={Business.id}
                          className="text-base md:text-xl font-semibold pb-1 text-infinite3"
                        >
                          {Business.text}
                        </li>
                      ))}
                    </ul>
                  </blockquote>
                </div>
                <div>
                  <blockquote className="bg-infinite2-4 p-2 md:p-5 rounded-b-xl ">
                    <h5 className="text-center text-xl md:text-4xl pb-0 md:pb-2 font-bold md:font-semibold text-infinite3">
                      เริ่มต้น <span className="font-Prompt">9,990</span> บาท
                    </h5>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-lg mt-10 md:mt-0">
              <div class="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 ">
                <div>
                  <blockquote className="bg-infinite2-2 p-5 rounded-t-xl">
                    <h3 className="text-center text-4xl pb-2 font-semibold text-white">
                      E-commerce
                    </h3>
                  </blockquote>
                  <blockquote className="p-5 h-auto w-[300px] md:h-[420px] md:w-[400px] lg:h-[420px] lg:w-[400px]">
                    <ul className="list-disc px-5">
                      {textEcommerce.map((Ecommerce) => (
                        <li
                          key={Ecommerce.id}
                          className="text-base md:text-lg font-semibold pb-1 text-infinite3"
                        >
                          {Ecommerce.text}
                        </li>
                      ))}
                    </ul>
                  </blockquote>
                </div>
                <div>
                  <blockquote className="bg-infinite2-4 p-5 rounded-b-xl ">
                    <h5 className="text-center text-xl md:text-3xl pb-0 md:pb-1 font-bold md:font-semibold text-infinite3">
                      เริ่มต้น <span className="font-Prompt">14,990</span> บาท
                    </h5>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto md:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-10 bg-infinite2-4">
          <div className="columns-1 px-4">
            <div className="grid grid-cols-12 my-5 justify-items-center">
              <div className="col-span-12">
                <blockquote className="md:mr-10 md:my-24 text-center">
                  <h2 className="text-xl md:text-3xl xl:text-3xl 3xl:text-4xl font-semibold leading-normal text-in-purple-3">
                    กระบวนการออกแบบเว็บไซต์
                  </h2>
                  <p className="text-base md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-normal  text-in-purple-3">
                    Website Design Process
                  </p>
                  <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex flex-row items-center">
                        <div className="m-5 md:m-10">
                          <img
                            src="../assets/images/home/icon-web-design1.png"
                            className="object-cover w-20 h-20"
                            alt="design1"
                          />
                        </div>
                        <div>
                          <p className="text-left text-sm md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                            เก็บข้อมูลครบทุกรายละเอียด <br />
                            เพื่อนำมาวิเคราะห์ ก่อนออกแบบเว็บไซต์
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="m-5 md:m-10">
                          <img
                            src="../assets/images/home/icon-web-design2.png"
                            className="object-cover w-20 h-20"
                            alt="design2"
                          />
                        </div>
                        <div>
                          <p className="text-left text-sm md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                            เก็บข้อมูลครบทุกรายละเอียด <br />
                            เพื่อนำมาวิเคราะห์ ก่อนออกแบบเว็บไซต์
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex flex-row items-center">
                        <div className="m-5 md:m-10">
                          <img
                            src="../assets/images/home/icon-web-design3.png"
                            className="object-cover w-20 h-20"
                            alt="design3"
                          />
                        </div>
                        <div>
                          <p className="text-left text-sm md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                            เก็บข้อมูลครบทุกรายละเอียด <br />
                            เพื่อนำมาวิเคราะห์ ก่อนออกแบบเว็บไซต์
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="m-5 md:m-10">
                          <img
                            src="../assets/images/home/icon-web-design4.png"
                            className="object-cover w-20 h-20"
                          />
                        </div>
                        <div>
                          <p className="text-left text-sm md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                            เก็บข้อมูลครบทุกรายละเอียด <br />
                            เพื่อนำมาวิเคราะห์ ก่อนออกแบบเว็บไซต์
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 md:mt-5">
                      <p className="text-center text-sm md:text-xl 2xl:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10">
                        เรามีทีมโปรแกรมเมอร์และทีมพัฒนาที่พร้อมรับช่วงต่อ <br />
                        เพื่อนำแบบเว็บไซต์ที่สวยงามให้เป็นเว็บไซต์ที่ใช้งานได้จริง
                      </p>
                      <div className="grid mx-auto justify-items-center w-28 my-5 md:w-full md:my-10">
                        <a href="/contact">
                          <button className="in-button">
                            <img
                              className="object-contain object-center md:object-none md:object-center"
                              src="../assets/images/home/ปุ่ม-contact-us.png"
                              alt="ปุ่ม6 contact-us"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-18">
          <div className="relative mb-10 md:mb-28">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 bg-white">
                  <div className="p-5 md:p-20">
                    <SlideWorkWA />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 justify-items-center md:relative">
                <div className="col-span-12 mx-20 text-center font-bold">
                  <div className="grid justify-items-center w-32 my-5 md:w-full md:my-10">
                    <button className="in-button">
                      <img
                        className="object-contain object-center md:object-none md:object-center"
                        src="../../assets/images/service/WebDesign/ปุ่ม-ปรึกษาเราตอนนี้.png"
                        alt="ปุ่ม6"
                      />
                    </button>
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

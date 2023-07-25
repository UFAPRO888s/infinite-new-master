import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import SlideSocialMedia2 from "../SlideSocialMedia2";
import SlideSocialMedia from "../SlideSocialMedia";
gsap.registerPlugin(ScrollTrigger, CustomEase);

const TabPrice = [
  {
    id: 1,
    title: "ดูแลเพจ",
  },
  {
    id: 2,
    title: "ยิง Facebook Ads",
  },
  {
    id: 3,
    title: "ยิง Google Ads",
  },
];

export default function SubSocialMedia() {
  let [DataFacebookAds] = useState({
    Headers: [
      {
        id: 0,
        title: "No",
      },
      {
        id: 1,
        title: "Detail",
      },
      {
        id: 2,
        title: "Starter Package",
      },
      {
        id: 3,
        title: "Standard Package",
      },
      {
        id: 4,
        title: "Performance Package",
      },
    ],
    Details: [
      {
        id: 1,
        detailEN: "Creating and Managing",
        detailTH: "สร้างเพจ และดูแล",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 2,
        detailEN: "Set Default",
        detailTH: "จัดตั้งค่าเริ่มต้นตามมาตรฐาน",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 3,
        detailEN: "Creating Cover Page",
        detailTH: "จัดทำรูปภาพหน้าปกเพจ",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 4,
        detailEN: "Creating ProPage",
        detailTH: "จัดทำรูปภาพโปรไฟล์เพจ / โลโก้",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 5,
        detailEN: "Creating Content&Schedule Post",
        detailTH: "คิดเนื้อหาคอนเท้น และลงโพสต์",
        StarterPackageImg: "",
        StarterPackageText: "15 Posts",
        StandardPackageImg: "",
        StandardPackageText: "17 Posts",
        PerformancePackageImg: "",
        PerformancePackageText: "30 Posts",
      },
      {
        id: 6,
        detailEN: "Graphic Content",
        detailTH: "ออกแบบรูปภาพ (ภาพกราฟิก + ภาพเดินเพจ)",
        StarterPackageImg: "",
        StarterPackageText: "3 Images / 12 Images",
        StandardPackageImg: "",
        StandardPackageText: "5 Images / 10 Images",
        PerformancePackageImg: "",
        PerformancePackageText: "8 Images / 22 Images",
      },
      {
        id: 7,
        detailEN: "Photo Albums (5 Image/Album)",
        detailTH: "อัลบั้มภาพ (5 รูป/อัลบั้ม)",
        StarterPackageImg: "",
        StarterPackageText: "No / ไม่มี",
        StandardPackageImg: "",
        StandardPackageText: "1 Album",
        PerformancePackageImg: "",
        PerformancePackageText: "2 Albums",
      },
      {
        id: 8,
        detailEN: "Creating video",
        detailTH: "ทำคลิปสั้นไม่เกิน 1 นาที (จาก Footage ของลูกค้า)",
        StarterPackageImg: "",
        StarterPackageText: "No / ไม่มี",
        StandardPackageImg: "",
        StandardPackageText: "1 Clip",
        PerformancePackageImg: "",
        PerformancePackageText: "1 Clip",
      },
      {
        id: 9,
        detailEN: "Boost page facebook",
        detailTH: "เพิ่มการเข้าถึงเพจและยอดไลค์ให้ฟรี 1 ครั้ง",
        StarterPackageImg: "",
        StarterPackageText: "No / ไม่มี",
        StandardPackageImg: "",
        StandardPackageText: "1,000 บาท",
        PerformancePackageImg: "",
        PerformancePackageText: "1,500 บาท",
      },
      {
        id: 10,
        detailEN: "Weekly Report",
        detailTH: "ส่งรายงานผลลัพธ์ทุกสัปดาห์",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 11,
        detailEN: "Connecting Instagram",
        detailTH: "เชื่อมโพสต์บนอินสตราแกรม",
        StarterPackageImg: "../../assets/images/check-mark.png",
        StarterPackageText: "",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 12,
        detailEN: "Greeting / Auto Message",
        detailTH: "ตั้งค่าข้อความต้อนรับ, ตอบกลับอัตโนมัติ",
        StarterPackageImg: "",
        StarterPackageText: "No / ไม่มี",
        StandardPackageImg: "../../assets/images/check-mark.png",
        StandardPackageText: "",
        PerformancePackageImg: "../../assets/images/check-mark.png",
        PerformancePackageText: "",
      },
      {
        id: 13,
        detailEN: "ราคา",
        detailTH: "Price",
        StarterPackageImg: "",
        StarterPackageText: "6,990 บาท/เดือน",
        StandardPackageImg: "",
        StandardPackageText: "14,900 บาท/เดือน",
        PerformancePackageImg: "",
        PerformancePackageText: "14,900 บาท/เดือน",
      },
    ],
  });
  let dataFBMs = [
    {
      idFBM: 0,
      titleFBM: "Basic",
      subtitleFBM: "Facebook & Instagram",
      textFBMs: [
        "จำนวน 1 แคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "ออกแบบรูปภาพ 1 รูปภาพ",
        "คิดโพสต์ 1 โพสต์",
        "ติดตั้ง Facebook Pixel (หากลูกค้ามีเว็บไชต์แล้ว)",
        "ตั้งค่า Chat Massage สำหรับวัตถุประสงค์เพื่อ สนทนา",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 20,000 บาท",
      priceM: "ค่าบริการ 4,000 บาท / 1 แคมเปญ - เดือน",
    },
    {
      idFBM: 1,
      titleFBM: "Standard",
      subtitleFBM: "Facebook & Instagram",
      textFBMs: [
        "จำนวน 2 แคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "ออกแบบรูปภาพ 2 รูปภาพ",
        "คิดโพสต์ 2 โพสต์",
        "ติดตั้ง Facebook Pixel (หากลูกค้ามีเว็บไชต์แล้ว)",
        "ตั้งค่า Chat Massage สำหรับวัตถุประสงค์เพื่อ สนทนา",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 30,000 บาท",
      priceM: "ค่าบริการ 5,500 บาท / 2 แคมเปญ - เดือน",
    },
    {
      idFBM: 2,
      titleFBM: "Pro",
      subtitleFBM: "Facebook & Instagram",
      textFBMs: [
        "ไม่จำกัดแคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "ออกแบบรูปภาพ 3 รูปภาพ",
        "คิดโพสต์ 3 โพสต์",
        "ติดตั้ง Facebook Pixel (หากลูกค้ามีเว็บไชต์แล้ว)",
        "ตั้งค่า Chat Massage สำหรับวัตถุประสงค์เพื่อ สนทนา",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 50,000 บาท",
      priceM: "ค่าบริการ 15 % / ไม่จำกัดแคมเปญ - เดือน",
    },
  ];
  let dataGoogleMs = [
    {
      idGoogleM: 0,
      titleGoogleM: "Basic",
      subtitleGoogleM: "Google Ads Manager",
      textGoogleMs: [
        "จำนวน 1 แคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "กำหนด keyword 5 คำ",
        "ติดตั้ง Google analytic, search console",
        "วัดผลด้วย conversion",
        "ติดตั้ง Google tag manager",
        "ปรับแต่งเว็บไซต์ให้เหมาะสมกับการยิง Ads",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 30,000 บาท",
      priceM: "ค่าบริการ 4,000 บาท / 1 แคมเปญ - เดือน",
    },
    {
      idGoogleM: 1,
      titleGoogleM: "Standard",
      subtitleGoogleM: "Google Ads Manager",
      textGoogleMs: [
        "จำนวน 2 แคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "กำหนด keyword 10 คำ",
        "ติดตั้ง Google analytic, search console",
        "วัดผลด้วย conversion",
        "ติดตั้ง Google tag manager",
        "ปรับแต่งเว็บไซต์ให้เหมาะสมกับการยิง Ads",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 60,000 บาท",
      priceM: "ค่าบริการ 5,500 บาท / 1 แคมเปญ - เดือน",
    },
    {
      idGoogleM: 2,
      titleGoogleM: "Pro",
      subtitleGoogleM: "Google Ads Manager",
      textGoogleMs: [
        "ไม่จำกัดแคมเปญ",
        "วิเคราะห์กลุ่มเป้าหมาย",
        "Report ผลทุกสัปดาห์",
        "กำหนด keyword 20 คำ",
        "ติดตั้ง Google analytic, search console",
        "วัดผลด้วย conversion",
        "ติดตั้ง Google tag manager",
        "ปรับแต่งเว็บไซต์ให้เหมาะสมกับการยิง Ads",
        "แจ้งปัญหา จ - ส เวลาทำการ 9.30 น. - 17.30 น.,",
      ],
      remark: "หมายเหตุ : งบประมานในการยิง ADS Manager ไม่เกิน 60,000 บาท",
      priceM: "ค่าบริการ 15 % / ไม่จำกัดแคมเปญ - เดือน",
    },
  ];
  return (
    <>
      <div className="block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 h-[16rem] sm:h-72 md:h-screen">
            <div className="columns-1 mb-5 md:mb-10">
              <div className="grid justify-items-center">
                <img
                  className="object-contain md:object-cover object-center w-full h-auto"
                  src="../../assets/images/service/SocialMedia/Creative-Online.jpg"
                  alt="Creative-Online"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0 md:mt-5">
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
                      <h2 className="text-4xl md:text-7xl 3xl:text-8xl mt-5 text-in-purple-1 font-R-FLEX">
                        Advertising Online
                        <br />
                        and Content
                      </h2>
                      <h3 className="text-xl md:text-3xl 3xl:text-4xl font-normal mt-5 text-infinite2-3 leading-8 3xl:leading-10">
                        เอเจนซี่การตลาด
                        <br />
                        และโฆษณาออนไลน์
                      </h3>
                    </div>
                    <div className="grid justify-items-center md:justify-items-start w-28 md:w-full my-5 md:my-10">
                      <button className="in-button">
                        <img
                          className="object-contain md:object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 mx-10 md:ml-7 md:mr-16 text-left leading-8 3xl:leading-10 whitespace-pre-wrap">
                    <h3 className="text-xl md:text-3xl 3xl:text-4xl mt-5 md:mt-10 font-normal text-in-purple-2">
                      ให้บริการด้านการตลาดและโฆษณาดิจิตอลแบบครบวงจร ที่
                      <span className="text-infinite3 uppercase ">
                        Infinity Digital Agency
                      </span>
                    </h3>
                    <p className="text-base md:text-xl 3xl:text-2xl font-normal mt-2 leading-8 3xl:leading-10 whitespace-pre-wrap">
                      เราให้บริการด้านการตลาดและโฆษณาออนไลน์แบบครบวงจร
                      เราเริ่มต้นด้วยการทำวิจัย ที่ครอบคลุม
                      นั่นรวมถึงการวิจัยตลาดการวิจัยทางธุรกิจการวิจัยผลิตภัณฑ์และบริการ
                      การวิจัยคู่แข่ง และการวิจัย
                      <span className="text-infinite3">Trend</span> ของตลาด
                    </p>
                    <p className="text-base md:text-xl 3xl:text-2xl font-normal mt-2 leading-8 3xl:leading-10 whitespace-pre-wrap">
                      <span className="text-xl md:text-3xl 3xl:text-4xl mt-10 font-normal text-in-purple-2">
                        ทีมการตลาดออนไลน์ของเรา
                      </span>
                      พัฒนากลยุทธ์ทางการตลาดและการวางแผนแคมเปญที่เต็ม รูปแบบ
                      แผนการตลาดดิจิทัลและการทำงาน จะรวมถึงการพัฒนา
                      <span className="text-infinite3">Concept</span> และ
                      <span className="text-infinite3">Creative</span>
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
        <div className="container mx-auto mt-40 md:mt-28">
          <div className="relative">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 md:col-span-5 mx-10 md:ml-4 text-left font-bold">
                  <div className="grid justify-items-start w-full">
                    <img
                      className="w-screen h-auto"
                      src="../../assets/images/service/SocialMedia/pic-illustration-01.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7 mx-10 md:mr-4 md:ml-10 text-left">
                  <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-10 font-semibold font-Prompt text-in-purple-1">
                    วิจัยและวางแผนการตลาดออนไลน์
                  </h3>
                  <p className="text-base md:text-2xl 3xl:text-3xl font-light mt-2 leading-7 md:leading-8 3xl:leading-10 font-Prompt">
                    เราพัฒนาแผนการตลาดดิจิตอลจากวัตถุประสงค์ ของบริษัทคุณ
                    ไม่ว่าจะเป็นการเปิดตัวผลิตภัณฑ์และบริการ
                    เพิ่มการรับรู้ถึงแบรนด์ และเพิ่มยอดขาย
                  </p>
                  <div className="grid justify-items-center w-full my-5 md:my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-12 md:col-span-6 mx-4 text-left font-bold">
                      <div className="text-base md:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>การวิจัยและการวางแผน</li>
                          <li>สร้าง Concept Creative</li>
                          <li>การสร้างคอนเทนท์ต่างๆ</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 mx-4 text-left font-bold">
                      <div className="text-base md:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>วางทิศทางของแผนงาน</li>
                          <li>การวางแผนสื่อ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12  mx-10 md:mx-4 text-left font-bold">
                  <div className="grid justify-items-center w-full my-5 md:my-10 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative mt-0 md:mt-28">
                <div className="col-span-12 md:col-span-7 mx-10 md:mr-4 md:ml-10 text-left">
                  <h3 className="text-2xl md:text-4xl 3xl:text-5xl mt-0 md:mt-10 font-semibold font-Prompt text-in-purple-1">
                    โฆษณาดิจิตอลและการซื้อสื่อดิจิตอล
                  </h3>
                  <p className="text-base md:text-2xl 3xl:text-3xl font-light mt-2 leading-7 md:leading-8 3xl:leading-10 font-Prompt">
                    เราโฆษณาแคมเปญการตลาดของคุณบนโซเชียล
                    มีเดียเครื่องมือค้นหาและแพลตฟอร์มดิจิทัลอื่นๆ
                    ไปยังกลุ่มเป้าหมายของคุณ
                  </p>
                  <div className="grid justify-items-center w-full my-5 md:my-10 border bg-gray-dark">
                    <hr />
                  </div>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-12 md:col-span-6 mx-4 text-left font-bold">
                      <div className="text-base md:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>โฆษณากูเกิล</li>
                          <li>โฆษณาเฟซบุ๊ก</li>
                          <li>โฆษณาอินสตาแกรม</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 mx-4 text-left font-bold">
                      <div className="text-base md:text-xl 3xl:text-2xl font-normal leading-8 3xl:leading-10 whitespace-pre-wrap">
                        <ul className="list-inside list-disc">
                          <li>โฆษณายูทูบ</li>
                          <li>โฆษณาติ้กต่อก</li>
                          <li>โฆษณาไลน์</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 mx-10 md:ml-4 my-5 md:mr-0 text-left font-bold">
                  <div className="grid justify-items-center md:justify-items-start w-full">
                    <img
                      className="w-screen h-auto"
                      src="../../assets/images/service/SocialMedia/pic-illustration-02.png"
                      alt="Infinite"
                    />
                  </div>
                </div>
                <div className="col-span-12 mx-10 md:mx-4 text-left font-bold">
                  <div className="grid justify-items-center w-full my-5 md:my-10 border bg-gray-dark">
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative mb-28">
            <div className="h-full w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 mx-10 md:mx-4 z-0">
                  <div className="relative">
                    <div>
                      <div className="space-x-4 max-w-full mx-2 md:mx-auto md:py-4 lg:flex lg:items-center lg:justify-end">
                        <div className="inline-block h-full w-full ">
                          <Tab.Group>
                            <Tab.List className="flex space-x-2 md:space-x-4 ">
                              {TabPrice.map((TabPrice) => (
                                <Tab
                                  key={TabPrice.id}
                                  className={({ selected }) =>
                                    classNames(
                                      "py-2 md:py-6 text-xs md:text-2xl font-semibold leading-5 flex-1 tracking-wider",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none  flex-1",
                                      selected
                                        ? "bg-infinite2-2 shadow-infinite2-3 shadow-lg text-white"
                                        : "text-in-purple-3 bg-infinite2-4 hover:bg-infinite2-2 hover:text-white"
                                    )
                                  }
                                >
                                  {TabPrice.title}
                                </Tab>
                              ))}
                            </Tab.List>
                            <div className="mt-5 bg-in-purple-3">
                              <Tab.Panels className="p-1 md:p-10 h-full w-11/12 md:w-5/6 mx-auto ">
                                <Tab.Panel className="mb-12">
                                  <div className="grid grid-cols-1 my-5 px-10">
                                    <blockquote>
                                      <h3 className="uppercase text-center text-sm md:text-2xl 3xl:text-4xl font-bold font-Prompt text-white">
                                        FACEBOOK Page
                                      </h3>
                                    </blockquote>
                                  </div>
                                  <div class="w-auto h-full overflow-auto touch-auto ">
                                    <table className="table-auto border border-infinite2-3 w-full border-collapse  font-Prompt">
                                      <thead>
                                        <tr>
                                          {DataFacebookAds.Headers.map(
                                            (Header) => (
                                              <th
                                                key={Header.id}
                                                className="border border-infinite2-4 p-1 md:p-2 font-Prompt bg-infinite2-2 text-white"
                                              >
                                                <p className=" text-sm md:text-lg font-semibold">
                                                  {Header.title}
                                                </p>
                                              </th>
                                            )
                                          )}
                                        </tr>
                                      </thead>
                                      <tbody className=" font-Prompt bg-white">
                                        {DataFacebookAds.Details.map(
                                          (Detail, index) => (
                                            <tr
                                              key={index}
                                              className="text-center"
                                            >
                                              <td
                                                className={classNames(
                                                  DataFacebookAds.Details
                                                    .length ==
                                                    index + 1
                                                    ? "bg-infinite2-4"
                                                    : "",
                                                  "border border-infinite2-2 pt-1 px-4 font-semibold"
                                                )}
                                              >
                                                <p
                                                  className={classNames(
                                                    DataFacebookAds.Details
                                                      .length ==
                                                      index + 1
                                                      ? "hidden"
                                                      : "",
                                                    "text-sm"
                                                  )}
                                                >
                                                  {Detail.id}
                                                </p>
                                              </td>
                                              <td
                                                className={classNames(
                                                  index == "12"
                                                    ? "bg-infinite2-4"
                                                    : "",
                                                  "border border-infinite2-2 text-start pt-1 px-4 font-semibold text-sm md:text-base"
                                                )}
                                              >
                                                {Detail.detailTH}{" "}
                                                <span className=" text-infinite2-2 text-sm md:text-base">
                                                  {Detail.detailEN}
                                                </span>
                                              </td>
                                              <td
                                                className={classNames(
                                                  DataFacebookAds.Details
                                                    .length ==
                                                    index + 1
                                                    ? "bg-infinite2-4"
                                                    : "",
                                                  "border border-infinite2-2 pt-1 px-4 font-semibold text-sm md:text-base"
                                                )}
                                              >
                                                <p
                                                  className={classNames(
                                                    `${Detail.StarterPackageText}`
                                                      ? ""
                                                      : "hidden",
                                                    "text-sm md:text-base"
                                                  )}
                                                >
                                                  {Detail.StarterPackageText}
                                                </p>
                                                <img
                                                  className={classNames(
                                                    `${Detail.StarterPackageImg}`
                                                      ? ""
                                                      : "hidden",
                                                    "h-6 w-6 block mx-auto"
                                                  )}
                                                  src={Detail.StarterPackageImg}
                                                ></img>
                                              </td>
                                              <td
                                                className={classNames(
                                                  DataFacebookAds.Details
                                                    .length ==
                                                    index + 1
                                                    ? "bg-infinite2-4"
                                                    : "",
                                                  "border border-infinite2-2 pt-1 px-4 font-semibold text-sm md:text-base"
                                                )}
                                              >
                                                <p
                                                  className={classNames(
                                                    `${Detail.StandardPackageText}`
                                                      ? ""
                                                      : "hidden",
                                                    "text-sm md:text-base"
                                                  )}
                                                >
                                                  {Detail.StandardPackageText}
                                                </p>
                                                <img
                                                  className={classNames(
                                                    `${Detail.StandardPackageImg}`
                                                      ? ""
                                                      : "hidden",
                                                    "h-6 w-6 block mx-auto"
                                                  )}
                                                  src={
                                                    Detail.StandardPackageImg
                                                  }
                                                ></img>
                                              </td>
                                              <td
                                                className={classNames(
                                                  DataFacebookAds.Details
                                                    .length ==
                                                    index + 1
                                                    ? "bg-infinite2-4"
                                                    : "",
                                                  "border border-infinite2-2 p-2 font-semibold text-sm md:text-base"
                                                )}
                                              >
                                                <p
                                                  className={classNames(
                                                    `${Detail.PerformancePackageText}`
                                                      ? ""
                                                      : "hidden",
                                                    "text-sm md:text-base"
                                                  )}
                                                >
                                                  {
                                                    Detail.PerformancePackageText
                                                  }
                                                </p>
                                                <img
                                                  className={classNames(
                                                    `${Detail.PerformancePackageImg}`
                                                      ? ""
                                                      : "hidden",
                                                    "h-6 w-6 block mx-auto"
                                                  )}
                                                  src={
                                                    Detail.PerformancePackageImg
                                                  }
                                                ></img>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </Tab.Panel>
                                <Tab.Panel className="mb-12">
                                  <div className="grid grid-cols-1 my-5 px-10">
                                    <blockquote>
                                      <h3 className="uppercase text-center text-2xl 3xl:text-4xl font-bold font-Prompt text-white">
                                        Facebook ads manager
                                      </h3>
                                    </blockquote>
                                  </div>
                                  <table className="table-auto border border-infinite2-3 w-full border-collapse font-Prompt font-semibold">
                                    <thead>
                                      <tr>
                                        {dataFBMs.map((dataFBM) => (
                                          <th
                                            key={dataFBM.id}
                                            className="border border-infinite2-4 p-2 font-Prompt bg-infinite2-2 text-white"
                                          >
                                            <p className="text-lg font-semibold">
                                              {dataFBM.titleFBM}
                                            </p>
                                          </th>
                                        ))}
                                      </tr>
                                      <tr>
                                        {dataFBMs.map((dataFBM) => (
                                          <th
                                            key={dataFBM.id}
                                            className="border-x border-y-0 border-infinite2-2 bg-white p-2 font-Prompt"
                                          >
                                            <p className="text-lg font-semibold">
                                              {dataFBM.subtitleFBM}
                                            </p>
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className=" bg-white">
                                      <tr>
                                        {dataFBMs.map((dataFBM) => (
                                          <td
                                            key={dataFBM.id}
                                            className="border-x border-y-0 border-infinite2-2 p-4 font-Prompt "
                                          >
                                            {dataFBM.textFBMs.map((textFBM) => (
                                              <li className="">{textFBM}</li>
                                            ))}
                                            <p className="pt-48 text-sm">
                                              {dataFBM.remark}
                                            </p>
                                          </td>
                                        ))}
                                      </tr>
                                      <tr>
                                        {dataFBMs.map((dataFBM) => (
                                          <td
                                            key={dataFBM.id}
                                            className="text-center border border-infinite2-2 font-Prompt bg-infinite2-4 "
                                          >
                                            <p className="p-2">
                                              {dataFBM.priceM}
                                            </p>
                                          </td>
                                        ))}
                                      </tr>
                                    </tbody>
                                  </table>
                                </Tab.Panel>
                                <Tab.Panel className="mb-12">
                                  <div className="grid grid-cols-1 my-5 px-10">
                                    <blockquote>
                                      <h3 className="uppercase text-center text-2xl 3xl:text-4xl font-bold font-Prompt text-white">
                                        GOOGLE ads manager
                                      </h3>
                                    </blockquote>
                                  </div>
                                  <table className="table-auto border border-infinite2-3 w-full border-collapse font-Prompt font-semibold">
                                    <thead>
                                      <tr>
                                        {dataGoogleMs.map((dataGoogleM) => (
                                          <th
                                            key={dataGoogleM.id}
                                            className="border border-infinite2-4 p-2 font-Prompt bg-infinite2-2 text-white"
                                          >
                                            <p className="text-lg font-semibold">
                                              {dataGoogleM.titleGoogleM}
                                            </p>
                                          </th>
                                        ))}
                                      </tr>
                                      <tr>
                                        {dataGoogleMs.map((dataGoogleM) => (
                                          <th
                                            key={dataGoogleM.id}
                                            className="border-x border-y-0 border-infinite2-2 p-2 bg-white font-Prompt"
                                          >
                                            <p className="text-lg font-semibold">
                                              {dataGoogleM.subtitleGoogleM}
                                            </p>
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                      <tr>
                                        {dataGoogleMs.map((dataGoogleM) => (
                                          <td
                                            key={dataGoogleM.id}
                                            className="border-x border-y-0 border-infinite2-2 p-2 font-Prompt "
                                          >
                                            {dataGoogleM.textGoogleMs.map(
                                              (textGoogleM) => (
                                                <li className="">
                                                  {textGoogleM}
                                                </li>
                                              )
                                            )}
                                            <p className="pt-48 text-sm">
                                              {dataGoogleM.remark}
                                            </p>
                                          </td>
                                        ))}
                                      </tr>
                                      <tr>
                                        {dataGoogleMs.map((dataGoogleM) => (
                                          <td
                                            key={dataGoogleM.id}
                                            className="text-center border border-infinite2-2 font-Prompt bg-infinite2-4 "
                                          >
                                            <p className="p-2">
                                              {dataGoogleM.priceM}
                                            </p>
                                          </td>
                                        ))}
                                      </tr>
                                    </tbody>
                                  </table>
                                </Tab.Panel>
                              </Tab.Panels>
                            </div>
                          </Tab.Group>
                        </div>
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
              <div className="grid grid-cols-12 relative mt-5">
                <div className="col-span-full mx-20 text-center font-bold">
                  <div className="grid justify-items-center md:justify-items-start w-28 md:w-full my-5 md:my-20">
                    <a href="/services/digital">
                      <button className="in-button">
                        <img
                          className="object-contain md:object-none object-center"
                          src="../../assets/images/service/Seo/ปุ่ม-ผลงานของเรา.png"
                          alt="ปุ่ม6"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 relative">
                <div className="col-span-12 md:col-span-6 mx-10 md:ml-32 md:mr-0 text-left font-bold">
                  <SlideSocialMedia2 />
                  <div className="grid justify-items-start w-full  m-5">
                    <h2 className="text-2xl 3xl:text-3xl">Advertising</h2>
                    <p className="text-xl 3xl:text-2xl font-light text-infinite2-2">
                      Online
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 mx-10 md:ml-32 md:mr-0 text-left font-bold">
                  <SlideSocialMedia />
                  <div className="grid justify-items-start w-full m-5">
                    <h2 className="text-2xl 3xl:text-3xl">Content</h2>
                    <p className="text-xl 3xl:text-2xl font-light text-infinite2-2">
                      Creative
                    </p>
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

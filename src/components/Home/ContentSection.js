import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

const dataourcus = [
  {
    id: "1",
    alt: "LOGO MRTA",
    imgURL: "../../assets/images/logo-customers/MRTA.png",
  },
  {
    id: "2",
    alt: "LOGO kinjai",
    imgURL: "../../assets/images/logo-customers/LOGO-kinjai.png",
  },
  {
    id: "3",
    alt: "LOGO Entry",
    imgURL: "../../assets/images/logo-customers/LOGO-Entry.png",
  },
  {
    id: "4",
    alt: "LOGO hotelink",
    imgURL: "../../assets/images/logo-customers/LOGO-hotelink.png",
  },
  {
    id: "5",
    alt: "LOGO n2property",
    imgURL: "../../assets/images/logo-customers/LOGO-n2property.png",
  },
  {
    id: "6",
    alt: "LOGO unisyntech",
    imgURL: "../../assets/images/logo-customers/LOGO-unisyntech.png",
  },
  {
    id: "7",
    alt: "LOGO ktthome",
    imgURL: "../../assets/images/logo-customers/LOGO-ktthome.png",
  },
  {
    id: "8",
    alt: "LOGO yusei",
    imgURL: "../../assets/images/logo-customers/LOGO-yusei.png",
  },
  {
    id: "9",
    alt: "LOGO new yellow",
    imgURL: "../../assets/images/logo-customers/LOGO-new yellow.png",
  },
  {
    id: "10",
    alt: "LOGO TS.jumnumrod",
    imgURL: "../../assets/images/logo-customers/LOGO-TS.jumnumrod.png",
  },
  {
    id: "11",
    alt: "LOGO hrr",
    imgURL: "../../assets/images/logo-customers/LOGO-hrr.png",
  },
  {
    id: "12",
    alt: "LOGO amando",
    imgURL: "../../assets/images/logo-customers/LOGO-amando.png",
  },
  {
    id: "13",
    alt: "LOGO indesign",
    imgURL: "../../assets/images/logo-customers/indesign.png",
  },
  {
    id: "14",
    alt: "LOGO S.K.S.",
    imgURL: "../../assets/images/logo-customers/sks.png",
  },
  {
    id: "15",
    alt: "LOGO SunSet",
    imgURL: "../../assets/images/logo-customers/sunset.png",
  },
];

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function ContentSectionCopy() {
  const reblockRef = useRef([]);
  reblockRef.current = [];
  useEffect(() => {
    reblockRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        y: 0,
        scaleY: 0,
        transformOrigin: "left top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefs = (el) => {
    if (el && !reblockRef.current.includes(el)) {
      reblockRef.current.push(el);
    }
  };
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.from(el, {
        autoAlpha: 0,
        ease: "none",
        delay: 0.1,
        opacity: 0.1,
        y: 50,
        duration: 1,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.8,
      y: 100,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRef.current + 1}`,
        trigger: boxRef.current,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".animationWater0").forEach((el) => {
      // get just the nested <li> submenu items inside this one
      let items1 = el.querySelectorAll(".animationWater1");
      let items2 = el.querySelectorAll(".animationWater2");
      // if any are found, create the animation and mouseover/mouseout listeners
      if (items1.length > 0) {
        var animationWater1 = gsap.timeline({
          repeat: 2,
          repeatDelay: 1,
        });
        animationWater1.fromTo(
          items1,
          {
            scale: 1,
          },
          {
            rotation: 5,
            duration: 2,
            ease: "elastic.inOut(1, 0.5)",
            x: 50,
            scale: 1,
          }
        );

        el.querySelectorAll(".animationWater1", () => animationWater1.play());
      } else if (items2.length > 0) {
        var animationWater2 = gsap.timeline({
          repeat: 2,
          repeatDelay: 1,
        });
        animationWater2.fromTo(
          items2,
          {
            scale: 1,
          },
          {
            rotation: 5,
            duration: 2,
            ease: "elastic.inOut(1, 0.5)",
            x: -50,
            scale: 1,
          }
        );
      }
    });
  });
  return (
    <>
      <div className="hidden md:block">
        <div className="container mx-auto mt-0 md:mt-20 z-60" ref={addToRefs}>
          <div className="columns-1">
            <div className="grid grid-cols-12 my-10 2xl:my-20 3xl:my-10 justify-items-center">
              <div className="col-span-12">
                <blockquote className="mx-5 lg:mx-10 text-center">
                  <p className="text-3xl 2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                    ทำไมต้องเลือกเรา
                  </p>
                  <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                    Why do you choose Infinite Digital
                  </p>
                  <div className="flex items-stretch mx-6 2xl:mx-5">
                    <div className="self-center m-2 lg:m-6">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design1.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีครบทุกบริการ <br />
                        ทั้งบริการหลักและ <br />
                        บริการเสริม{" "}
                      </p>{" "}
                    </div>
                    <div className="self-center m-2 lg:m-6">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design2.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        สามารถทำได้ <br />
                        Requirement ที่ คุณ <br />
                        ต้องการ
                      </p>{" "}
                    </div>
                    <div className="self-center m-2 lg:m-6 ">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design3.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        มีทีมงานครบวงจร <br />
                        ทั้งด้านเว็บไซต์ และ <br />
                        การตลาดดิจิทัล
                      </p>
                    </div>
                    <div className="self-center m-2 lg:m-6 xl:m-10">
                      <div className="p-0 xl:p-4 2xl:p-5">
                        <img
                          src="../../assets/images/home/icon-หน้าหลัก-design4.png"
                          className="object-cover w-24 h-24 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mb-5"
                        />
                      </div>{" "}
                      <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                        ยินดีให้คำปรึกษา <br />
                        บริการเป็นกันเอง <br />
                        ฟรี ไม่มีค่าใช้จ่าย
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </blockquote>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto mt-0 md:mt-0 z-60" ref={addToRefs}>
          <div className="columns-1">
            <div className="border-b border-indigo-500 mb-20"></div>
            <div className="grid grid-cols-12 my-10 2xl:my-20 3xl:my-10 justify-items-center">
              <div className="col-span-12">
                <blockquote className="mx-5 lg:mx-10 text-center">
                  <p className="text-3xl 2xl:text-3xl 3xl:text-4xl font-semibold leading-normal">
                    ลูกค้าของเรา
                  </p>
                  <p className="text-xl 2xl:text-xl 3xl:text-2xl font-light leading-normal">
                    Our Customers
                  </p>
                  <div className="mx-3 2xl:mx-4 mt-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-2">
                      {dataourcus.map((customers, num) => {
                        return (
                          <div
                            kay={customers.id}
                            className="m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2"
                          >
                            <div className="p-0 xl:p-0 2xl:p-0 3xl:p-3">
                              <img
                                alt={customers.alt}
                                src={customers.imgURL}
                                className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* <div className="flex items-stretch">
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-kinjai.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-ktthome.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-Entry.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-yusei.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-hotelink.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-new yellow.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/MRTA.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-TS.jumnumrod.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-n2property.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-hrr.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                      <div className="self-center m-1 lg:m-1 xl:m-2 2xl:m-2 3xl:m-2">
                        <div className="p-0 xl:p-0 2xl:p-0 3xl:p-5">
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-unisyntech.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                          <img
                            alt="logo-customers"
                            src="../../assets/images/logo-customers/LOGO-amando.png"
                            className="object-cover w-100 h-12 lg:h-16 xl:h-20 2xl:h-24 3xl:h-24 mb-5"
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>{" "}
                </blockquote>{" "}
              </div>{" "}
            </div>{" "}
            <div className="border-b border-indigo-500 mt-20 mb-20"></div>
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto mt-0 md:mt-0 z-50" ref={addToRefs}>
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute inset-0">
              <div className="block w-12/12" ref={boxRef}>
                <div className="grid grid-cols-12 justify-items-center h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full">
                  <div className="col-start-1 col-span-5 self-center p-10 lg:p-10 xl:p-24 2xl:p-14 3xl:p-32 3xl:py-20">
                    <blockquote className="mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 md:py-3 lg:py-4 xl:py-0 2xl:py-0 3xl:py-0">
                      <img
                        className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                        src="../../assets/images/home/icon1.png"
                        alt="icon1"
                      />
                      <p className="text-base md:text-base lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                        วางกลยุทธ์การตลาด SEO
                      </p>{" "}
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
                          SEO Digital <br />
                          Marketing{" "}
                        </p>{" "}
                      </span>{" "}
                    </blockquote>{" "}
                    <div className="2xl:w-full mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 my-0 md:my-0 lg:my-0 xl:my-2 2xl:my-6 3xl:my-8">
                      <a href="/services/seo">
                        <button className="in-button">
                          <img
                            className="object-scale-down h-10 lg:h-full"
                            src="../assets/images/home/section2/ปุ่ม2.png"
                            alt="ปุ่ม2"
                          />
                        </button>{" "}
                      </a>{" "}
                    </div>{" "}
                    <blockquote className="md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-5 md:py-3 lg:py-4 xl:py-5 2xl:py-4 3xl:py-2 md:w-56 lg:w-80 2xl:w-96 3xl:w-[28rem]">
                      <p className="md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light mb-2 lg:mb-2">
                        เราสามารถเพิ่มจำนวนคนเข้าเว็บไซต์ของคุณด้วยกลยุทธ์ที่พิสูจน์มาแล้วว่าได้ผลจริง
                      </p>{" "}
                    </blockquote>{" "}
                  </div>
                  <div className="col-start-6 col-span-12">
                    <img
                      className="h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-auto object-cover"
                      src="../assets/images/home/02.jpg"
                      alt="we-are"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto z-40">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-full lg:w-full 2xl:w-5/12 bg-white"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-2/12 bg-infinite1-100 bg-opacity-0"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-5/12 bg-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0 md:mt-0 z-40" ref={addToRefs}>
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute inset-0">
              <div className="block w-12/12" ref={boxRef}>
                <div className="grid grid-cols-12 justify-items-center h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full text-end">
                  <div className="col-start-1 col-span-7 ">
                    <img
                      className="h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-auto object-cover"
                      src="../assets/images/home/03.jpg"
                      alt="we-are"
                    />
                  </div>
                  <div className="col-start-8 col-span-12 self-center p-10 lg:p-10 xl:p-24 2xl:p-14 3xl:p-32 3xl:py-20">
                    <div className="grid justify-items-end w-full">
                      <img
                        className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                        src="../../assets/images/home/icon2.png"
                        alt="icon2"
                      />
                    </div>{" "}
                    <p className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                      รับออกแบบเว็บไซต์
                    </p>{" "}
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <p className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                        Web design
                      </p>{" "}
                    </span>{" "}
                    <div className="grid justify-items-end w-full my-2 xl:my-2 2xl:my-10 3xl:my-10">
                      <a href="/services/design">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section3/ปุ่ม3.png"
                            alt="ปุ่ม3"
                          />
                        </button>{" "}
                      </a>{" "}
                    </div>{" "}
                    <p className="md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl  font-light mb-2 lg:mb-2">
                      พัฒนาเว็บไซต์ครบวงจรเรามีทีมโปรแกรมเมอร์
                      ที่พร้อมจะพัฒนาเว็บไซต์แบบครบวงจร
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto z-30">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-full lg:w-full 2xl:w-5/12 bg-white"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-2/12 bg-infinite1-100 bg-opacity-0"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-5/12 bg-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0 md:mt-0 z-30" ref={addToRefs}>
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute inset-0">
              <div className="block w-12/12" ref={boxRef}>
                <div className="grid grid-cols-12 justify-items-center h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full">
                  <div className="col-start-1 col-span-5 self-center p-10 lg:p-10 xl:p-24 2xl:p-14 3xl:p-32 3xl:py-20">
                    <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-5 lg:py-8 2xl:py-3 3xl:py-5">
                      <img
                        className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                        src="../../assets/images/home/icon3.png"
                        alt="icon3"
                      />
                      <p className="md:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-10 text-in-purple-1">
                        สร้างคอนเทนท์บนโซเชียล
                      </p>{" "}
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <p className="md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl">
                          Advertising Online <br />
                          and Content
                        </p>{" "}
                      </span>{" "}
                    </blockquote>{" "}
                    <div className="2xl:w-full md:mx-10 lg:mx-10 2xl:mx-5 md:my-2 lg:my-5 2xl:my-5 3xl:my-5">
                      <a href="/services/digital">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section4/ปุ่ม4.png"
                            alt="ปุ่ม4"
                          />
                        </button>{" "}
                      </a>{" "}
                    </div>{" "}
                    <blockquote className="md:mx-10 lg:mx-10 2xl:mx-5 md:py-3 lg:py-3 2xl:py-4 md:w-56 lg:w-80 2xl:w-96 3xl:w-128">
                      <p className="md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl  font-light mb-2 lg:mb-2">
                        เราให้บริการการสร้างคอนเทนท์ต่างๆ
                        เพื่อให้เว็บไชต์ของคุณสมบูรณ์แบบโดยถูกต้องตามหลัก
                      </p>{" "}
                    </blockquote>{" "}
                  </div>
                  <div className="col-start-6 col-span-12">
                    <img
                      className="h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-auto object-cover"
                      src="../assets/images/home/04.jpg"
                      alt="we-are"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto z-20">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-full lg:w-full 2xl:w-5/12 bg-white"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-2/12 bg-infinite1-100 bg-opacity-0"></p>
                <p className="inline-block md:h-38 lg:h-44 2xl:h-48 md:w-56 lg:w-56 2xl:w-5/12 bg-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0 md:mt-0 z-20" ref={addToRefs}>
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full bg-white"></p>
              </div>
            </div>
            <div className="absolute inset-0">
              <div className="block w-12/12" ref={boxRef}>
                <div className="grid grid-cols-12 justify-items-center h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full text-end">
                  <div className="col-start-1 col-span-7 ">
                    <img
                      className="h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-auto object-cover"
                      src="../assets/images/home/05.jpg"
                      alt="we-are"
                    />
                  </div>
                  <div className="col-start-8 col-span-12 self-center p-10 lg:p-10 xl:p-24 2xl:p-14 3xl:p-32 3xl:py-20">
                    <div className="grid justify-items-end w-full">
                      <img
                        className="object-scale-down w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 mb-2 3xl:mb-2"
                        src="../../assets/images/home/icon4.png"
                        alt="icon4"
                      />
                    </div>{" "}
                    <p className="md:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-10 text-in-purple-1">
                      รับเขียนโปรแกรม และระบบทุกประเภท
                    </p>{" "}
                    <span className="box-decoration-clone text-in-purple-3 font-bold">
                      <p className="md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                        Expert <br /> Programming{" "}
                      </p>{" "}
                    </span>{" "}
                    <div className="grid justify-items-end w-full my-10 2xl:my-8 3xl:my-8">
                      <a href="/services/digital">
                        <button className="in-button">
                          <img
                            className="object-scale-down"
                            src="../assets/images/home/section3/ปุ่ม3.png"
                            alt="ปุ่ม3"
                          />
                        </button>{" "}
                      </a>{" "}
                    </div>{" "}
                    <p className="md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl  font-light mb-2 lg:mb-2">
                      ทีมงานเขียนโปรแกรมและพัฒนาระบบ
                      ตามความต้องการของลูกค้าอย่างมืออาชีพรอบรับทุกการใช้งานกับธุรกิจ
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-0 md:mt-0 z-10">
          <div className="relative">
            <div ref={addblockToRefs}>
              <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-end mt-0">
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-full lg:w-full 2xl:w-full bg-infinite1-100">
                  {" "}
                </p>{" "}
                <p className="inline-block md:h-32 lg:h-44 2xl:h-60 md:w-56 lg:w-56 2xl:w-96 bg-in-purple-3">
                  {" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="h-96 w-full">
              <div className="grid grid-cols-12 relative">
                <div className="col-span-full mx-10 text-center font-bold">
                  <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl mt-20">
                    Have a project ? Let 's chat.{" "}
                  </h2>{" "}
                  <div className="grid justify-items-center w-full md:my-5 lg:my-5 2xl:my-10">
                    <a href="/contact">
                      <button className="in-button">
                        <img
                          className="object-none object-center"
                          src="../assets/images/home/section6/ปุ่ม6.png"
                          alt="ปุ่ม6"
                        />
                      </button>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="block md:hidden"> </div>
    </>
  );
}

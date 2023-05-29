import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SlideHome from "../SlideHome";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function HeroSectionCopy() {
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
          start: "top bottom+=100",
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

  const reblockRefMo = useRef([]);
  reblockRefMo.current = [];
  useEffect(() => {
    reblockRefMo.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        x: 50,
        scaleX: 5,
        transformOrigin: "left top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top bottom+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefsMo = (el) => {
    if (el && !reblockRefMo.current.includes(el)) {
      reblockRefMo.current.push(el);
    }
  };

  const reblockRefMoLeft = useRef([]);
  reblockRefMoLeft.current = [];
  useEffect(() => {
    reblockRefMoLeft.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        x: -50,
        scaleX: 5,
        transformOrigin: "right top",
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `sectionblock-${index + 1}`,
          trigger: el,
          start: "top bottom+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const addblockToRefsMoLeft = (el) => {
    if (el && !reblockRefMoLeft.current.includes(el)) {
      reblockRefMoLeft.current.push(el);
    }
  };

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRef.current + 1}`,
        trigger: boxRef.current,
        start: "top bottom+=100",
        toggleActions: "play none none reverse",
      },
    });
  });

  const boxRefMo = useRef(null);
  useEffect(() => {
    gsap.from(boxRefMo.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
      opacity: 0.1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        id: `sectionblock-${boxRefMo.current + 1}`,
        trigger: boxRefMo.current,
        start: "top bottom+=100",
        toggleActions: "play none none reverse",
      },
    });
  });

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
          start: "top bottom+=100",
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

  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md:block">
          <div className="container mx-auto mt-0 md:mt-0 z-20" ref={addToRefs}>
            <div className="relative">
              <div ref={addblockToRefs}>
                <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                  <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-150 w-6 lg:w-10 3xl:w-20 bg-in-purple-3"></p>
                  <p className="inline-block h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-150 w-full bg-white"></p>
                </div>
              </div>
              <div className="absolute inset-0">
                <div className="block w-12/12" ref={boxRef}>
                  <div className="grid grid-cols-6 justify-items-center w-full">
                    <div className="col-start-2 col-span-4 ">
                      <img
                        className="h-auto w-144 2xl:w-144 3xl:w-[45rem] object-cover"
                        src="../assets/images/home/we-are-new.png"
                        alt="we-are"
                      />
                    </div>
                    <div className="col-start-2 col-span-4 self-center  mr-10 mt-1 xl:mr-10 xl:mt-2 2xl:mr-5 2xl:mt-10">
                      <p className="font-bold uppercase md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl 3xl:text-7xl text-center">
                        Infinite Digital Consultants
                      </p>
                      <p className="text-center uppercase font-extralight md:text-sm lg:text-xl xl:text-2xl 3xl:text-3xl mt-0 lg:mt-2 xl:mt-2 2xl:mt-3 3xl:mt-2 ">
                        รับปรึกษาดูแลด้านเว็บไซต์
                        <br />
                        และระบบโปรแกรม รวมถึงสื่อดิจิทัลออนไลน์
                        <br />
                        ครบทุกด้านในที่เดียว
                      </p>
                      <p className="text-center font-bold md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl py-2">
                        “จ้างครั้งเดียวจบ ได้ครบทั้งทีม”
                      </p>
                      <div className="grid justify-items-center">
                        <a href="/contact">
                          <button className="in-button">
                            <img
                              className="object-scale-down w-24 lg:w-32 xl:w-40 2xl:w-48"
                              src="../assets/images/home/ปุ่ม-contact-us.png"
                              alt="ปุ่ม-contact-us"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="relative">
              <div ref={addblockToRefs}>
                <div className="max-w-full mx-auto px-0 lg:px-0 flex items-center justify-start mt-0">
                  <p className="inline-block md:h-14 lg:h-16 2xl:h-20 md:w-full lg:w-full 2xl:w-full bg-infinite1-100"></p>
                  <p className="inline-block md:h-14 lg:h-16 2xl:h-20 md:w-56 lg:w-56 2xl:w-1/5 bg-in-purple-3"></p>
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
                  <div className="grid grid-cols-11 justify-items-center h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-full">
                    <div className="col-start-1 col-span-6">
                      <img
                        className="h-[16rem] lg:h-80 xl:h-[26rem] 2xl:h-128 3xl:h-[56rem] w-auto object-cover"
                        src="../assets/images/home/01.jpg"
                        alt="we-are"
                      />
                    </div>
                    <div className="col-start-7 col-span-11 self-start p-10 lg:p-10 xl:p-24 2xl:p-14 3xl:p-32 3xl:py-20">
                      <blockquote className="pb-10">
                        <p className="md:text-xs lg:text-sm xl:text-base 2xl:text-xl 3xl:text-3xl font-light text-left 2xl:leading-10 3xl:leading-[3rem]">
                          เราเป็นทีมออกแบบเว็บไซต์ที่ไม่เหมือนใคร
                          ซึ่งเหมาะกับเอกลักษณ์เฉพาะตัวของแบรนด์ของคุณอย่างแท้จริง
                          เพื่อสร้างประสบการณ์ที่โดเด่น
                        </p>
                      </blockquote>
                      <blockquote className="pb-10">
                        <h1 className=" text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold 2xl:leading-10 3xl:leading-normal">
                          " We,ra a small team of creatives committed to design
                          with a purpose "
                        </h1>
                      </blockquote>
                      <blockquote className="px-16">
                        <p className="md:text-xs lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl font-light 2xl:leading-10 3xl:leading-normal text-justify">
                          เพิ่มมูลค่าให้แก่แบรนด์ของคุณให้เป็นที่น่าจดจำและสร้างโอกาสในการขายมากขึ้นด้วยเว็บไซต์ที่ทำหน้าที่และตอบสนองได้อย่างสมบูรณ์
                          ซึ่งออกแบบมาสำหรับผู้ใช้ของคุณ
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute md:bottom-7 lg:bottom-10 xl:bottom-8 2xl:bottom-6 3xl:bottom-10 right-5 lg:right-10 xl:right-20 w-1/5 z-20">
                <div className="inline-block left-0 mr-0 lg:mr-10 xl:mr-0">
                  <a href="/about">
                    <button className="in-button">
                      <img
                        className="object-scale-down w-24 lg:w-32 xl:w-48 2xl:w-60 3xl:w-72"
                        src="../assets/images/home/section1/ปุ่ม1.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mb-20">
          <div className="container mx-auto mt-0 md:mt-0 z-10">
            <div className="columns-1">
              <div className="grid grid-cols-12 my-0 justify-items-center">
                <div className="col-span-12"></div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div className="max-w-full mx-auto flex items-center justify-center z-10">
                <div className="relative">
                  <img
                    className="object-cover object-bottom w-screen h-full"
                    src="../../assets/images/mobile/home/bg2.png"
                    alt="Infinite-bg2"
                  />
                  <div className="absolute top-0 mx-5 z-10">
                    <div className="grid grid-cols-12 items-center text-center">
                      <div className="col-span-12">
                        <blockquote className="my-12" ref={boxRefMo}>
                          <p className="text-4xl my-2 font-bold leading-tight">
                            We are <br />
                            Infinite Digital <br />
                            Consultants
                          </p>
                          <p className="text-sm my-2">
                            อินฟินิท ดิจิทัล คอนซัลแตนท์
                            คือเอเจนซี่มืออาชีพที่รับทำการตลาดออนไลน์ทุกรูปแบบอย่างครบวงจร
                          </p>
                          <p className="font-bold text-xl my-2">
                            “จ้างครั้งเดียวจบ ได้ครบทั้งทีม”
                          </p>
                          <div className="grid items-center text-center my-1">
                            <div>
                              <p className="leading-3">
                                <span className="inline-block h-1 w-14 rounded bg-infinite1-900"></span>
                              </p>
                              <p className="leading-3">
                                <span className="inline-block h-1 w-14 rounded bg-infinite1-900"></span>
                              </p>
                              <p className="leading-3">
                                <span className="inline-block h-1 w-14 rounded bg-infinite1-900"></span>
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
                ref={addblockToRefsMo}
              >
                <p className="inline-block h-6 w-10/12 bg-in-purple-3"></p>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div
                className="max-w-full mx-auto flex items-center justify-center z-10"
                ref={addToRefs}
              >
                <div className="relative">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 col-end-7">
                      <div className="w-screen left-0">
                        <img
                          className="object-cover object-left-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element1.png"
                          alt="Infinite-bg-element1"
                        />
                      </div>
                    </div>
                    <div className="col-end-7 col-span-2 -mt-5">
                      <div className="w-screen right-0">
                        <img
                          className="object-cover object-right-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element2.png"
                          alt="Infinite-bg-element2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0">
                    <blockquote className="m-10">
                      <h1 className="text-3xl font-bold leading-9 mb-5">
                        รับทำเว็บไชต์ wordpress และ รับทำ seo
                        ออกแบบเว็บไชต์ให้รองรับระบบของ Google
                      </h1>
                      <p className="text-base mb-5">
                        อินฟินิท ดิจิทัล คอนซัลแตนท์ รับทำเว็บไชต์ รับทำ
                        wordpress รับปรึกษาดูแลด้านเว็บไซต์ให้รองรับด้าน SEO ของ
                        google และ รับเขียนโปรแกรม ทุกประเภทธุรกิจ
                        รวมถึงสื่อดิจิทัลออนไลน์
                      </p>
                      <p className="text-base">
                        เราเป็นทีมออกแบบเว็บไซต์ที่สร้างสรรค์ผลงานคุณภาพไม่เหมือนใคร
                        และตอบโจทย์ตามความต้องการของลูกค้า
                        เพื่อสร้างเอกลักษณ์เฉพาะตัวของแบรนด์รวมถึงการสร้างประสบการณ์ที่ดีต่อผู้ใช้งานเว็บไซต์
                        และรับทำ seo เพื่อรองรับเว็บไชต์ของคุณให้ติดหน้า 1 ของ
                        Google ทุก Platform
                      </p>
                    </blockquote>
                    <a href="/about">
                      <button className="in-button m-10">
                        <img
                          className="object-scale-down h-full w-32"
                          src="../../assets/images/mobile/home/button-about.png"
                          alt="button-about"
                        />
                      </button>
                    </a>
                    <div
                      className="max-w-full mx-auto flex items-center justify-start mt-5 z-0"
                      ref={addblockToRefsMoLeft}
                    >
                      <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div
                className="max-w-full mx-auto flex items-center justify-center mt-5 z-0"
                ref={addblockToRefsMoLeft}
              >
                <p className="inline-block h-px w-10/12 bg-in-purple-3"></p>
              </div>
              <div
                className="max-w-full mx-auto flex items-center justify-center z-10"
                ref={addToRefs}
              >
                <div className="relative">
                  <div className="grid grid-cols-6 gap-4 ">
                    <div className="col-start-1 col-end-7">
                      <div className="w-screen left-0">
                        <img
                          className="object-cover object-left-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element1.png"
                          alt="Infinite-bg-element1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0">
                    <div className="grid grid-cols-12">
                      <div className="col-span-12">
                        <blockquote className="m-10">
                          <h1 className="text-3xl font-bold leading-9 mb-2">
                            ลูกค้าของเรา
                          </h1>
                          <p className="text-base mb-5">Our Customers</p>
                          <div className="flex items-stretch mx-3 mt-2">
                            <div className="self-center m-1">
                              <div className="p-0">
                                <img
                                  src="../../assets/images/logo-customers/LOGO-kinjai.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-kinjai"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-hrr.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-hrr"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-ktthome.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-ktthome"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-TS.jumnumrod.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-jumnumrod"
                                />
                              </div>
                            </div>
                            <div className="self-center m-1">
                              <div className="p-0">
                                <img
                                  src="../../assets/images/logo-customers/LOGO-Entry.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-Entry"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-n2property.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-n2property"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-yusei.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-yusei"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-เว็บพระ.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-เว็บพระ"
                                />
                              </div>
                            </div>
                            <div className="self-center m-1">
                              <div className="p-0">
                                <img
                                  src="../../assets/images/logo-customers/LOGO-hotelink.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-hotelink"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-unisyntech.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-unisyntech"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-new yellow.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-yellow"
                                />
                                <img
                                  src="../../assets/images/logo-customers/LOGO-amando.png"
                                  className="object-cover w-100 h-12 mb-2"
                                  alt="customers-amando"
                                />
                              </div>
                            </div>
                          </div>{" "}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="max-w-full mx-auto flex items-center justify-center mt-20 z-0"
                ref={addblockToRefsMo}
              >
                <p className="inline-block h-px w-10/12 bg-in-purple-3"></p>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1" ref={addToRefs}>
              <div className="grid grid-cols-6 gap-0 my-5 mx-10 items-center justify-center">
                <div className="col-start-1 col-end-7 mb-5">
                  <img
                    className="object-cover object-bottom w-full h-auto"
                    src="../../assets/images/mobile/home/pic2.png"
                    alt="pic2"
                  />
                </div>
                <div className="col-start-1 col-end-5">
                  <blockquote>
                    <p className="text-lg leading-10 text-in-purple-1">
                      วางกลยุทธ์การตลาด SEO
                    </p>
                  </blockquote>
                </div>
                <div className="col-start-5 col-end-7">
                  <blockquote className="mx-1">
                    <hr />
                  </blockquote>
                </div>
                <div className="col-start-1 col-end-2">
                  <img
                    className="object-cover object-bottom w-full h-auto"
                    src="../../assets/images/mobile/home/icon1.png"
                    alt="Infinite-icon1"
                  />
                </div>
                <div className="col-start-2 col-end-7 mx-5">
                  <span className="box-decoration-clone text-in-purple-3 font-bold">
                    <p className="text-2xl">
                      SEO Digital <br />
                      Marketing
                    </p>
                  </span>
                </div>
                <div className="col-start-1 col-end-7">
                  <h2 className="text-sm mt-2">
                    รับทำ seo บริษัทธุรกิจทุกประเภท
                  </h2>
                  <a href="/services/seo">
                    <button className="in-button mt-2">
                      <img
                        className="object-scale-down h-full w-32"
                        src="../../assets/images/mobile/home/button-service.png"
                        alt="ปุ่ม1"
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
                ref={addblockToRefsMo}
              >
                <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div
                className="max-w-full mx-auto flex items-center justify-center"
                ref={addToRefs}
              >
                <div className="relative">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-end-7 col-span-2">
                      <div className="w-screen right-0 mt-56">
                        <img
                          className="object-cover object-right-bottom w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element3.png"
                          alt="Infinite"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0">
                    <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                      <div className="col-start-1 col-end-7">
                        <img
                          className="object-cover object-bottom w-full h-auto"
                          src="../../assets/images/mobile/home/pic3.png"
                          alt="Infinite"
                        />
                      </div>
                      <div className="col-start-1 col-end-4">
                        <blockquote>
                          <p className="text-lg leading-10 text-in-purple-1">
                            รับออกแบบเว็บไซต์
                          </p>
                        </blockquote>
                      </div>
                      <div className="col-start-4 col-end-7">
                        <blockquote className="mx-1">
                          <hr />
                        </blockquote>
                      </div>
                      <div className="col-start-1 col-end-2">
                        <img
                          className="object-cover object-bottom w-full h-auto"
                          src="../../assets/images/mobile/home/icon2.png"
                          alt="Infinite"
                        />
                      </div>
                      <div className="col-start-2 col-end-7 mx-5">
                        <span className="box-decoration-clone text-in-purple-3 font-bold">
                          <p className="text-2xl">
                            Web
                            <br />
                            designs
                          </p>
                        </span>
                      </div>
                      <div className="col-start-1 col-end-7">
                        <h3 className="text-sm mt-2">
                          ออกแบบเว็บไซต์ พร้อมรองรับ ux/ui
                        </h3>
                        <a href="/services/design">
                          <button className="in-button mt-2">
                            <img
                              className="object-scale-down h-full w-32"
                              src="../../assets/images/mobile/home/button-service.png"
                              alt="ปุ่ม1"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div
                      className="max-w-full mx-auto flex items-center justify-start mt-5 z-0"
                      ref={addblockToRefsMoLeft}
                    >
                      <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div
                className="max-w-full mx-auto flex items-center justify-center"
                ref={addToRefs}
              >
                <div className="relative">
                  <div className="grid grid-cols-6 gap-0 m-10 items-center justify-center">
                    <div className="col-start-1 col-end-7">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/pic4.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-1 col-end-5">
                      <blockquote>
                        <h2 className="text-lg leading-10 text-in-purple-1">
                          สร้างคอนเทนท์บนโซเชียล
                        </h2>
                      </blockquote>
                    </div>
                    <div className="col-start-5 col-end-7">
                      <blockquote className="mx-1">
                        <hr />
                      </blockquote>
                    </div>
                    <div className="col-start-1 col-end-2">
                      <img
                        className="object-cover object-bottom w-full h-auto"
                        src="../../assets/images/mobile/home/icon3.png"
                        alt="Infinite"
                      />
                    </div>
                    <div className="col-start-2 col-end-7 mx-5">
                      <span className="box-decoration-clone text-in-purple-3 font-bold">
                        <p className="text-2xl">
                          Creative Online
                          <br />
                          and Printing
                        </p>
                      </span>
                    </div>
                    <div className="col-start-1 col-end-7">
                      <h4 className="text-sm mt-2">
                        สร้างคอนเทนท์บนโซเชียล รับเขียนคอนเทนท์
                      </h4>
                      <a href="/services/digital">
                        <button className="in-button mt-2">
                          <img
                            className="object-scale-down h-full w-32"
                            src="../../assets/images/mobile/home/button-service.png"
                            alt="ปุ่ม1"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div
                    className="max-w-full mx-auto flex items-center justify-end mt-5 z-0"
                    ref={addblockToRefsMo}
                  >
                    <p className="inline-block h-6 w-4/12 bg-in-purple-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 max-h-screen">
            <div className="columns-1">
              <div
                className="max-w-full mx-auto flex items-center justify-center"
                ref={addToRefs}
              >
                <div className="relative">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 col-end-7">
                      <div className="w-screen right-0">
                        <img
                          className="object-cover object-right-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element1.png"
                          alt="Infinite-bg-element1"
                        />
                      </div>
                    </div>
                    <div className="col-end-7 col-span-2">
                      <div className="w-screen left-0">
                        <img
                          className="object-cover object-left-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element5.png"
                          alt="Infinite"
                        />
                      </div>
                    </div>
                    <div className="col-start-1 col-end-7">
                      <div className="w-screen left-0">
                        <img
                          className="object-cover object-left-top w-48 h-auto z-20"
                          src="../../assets/images/mobile/home/bg-element6.png"
                          alt="Infinite"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0">
                    <div className="grid grid-cols-6 gap-0 m-10 my-0 items-center justify-center">
                      <div className="col-start-1 col-end-7 my-5">
                        <img
                          className="object-cover object-bottom w-full h-auto"
                          src="../../assets/images/mobile/home/pic5.png"
                          alt="Infinite"
                        />
                      </div>
                      <div className="col-start-1 col-end-6">
                        <blockquote>
                          <p className="text-lg leading-10 text-in-purple-1">
                            รับเขียนโปรแกรมทุกประเภท
                          </p>
                        </blockquote>
                      </div>
                      <div className="col-start-6 col-end-7">
                        <blockquote>
                          <hr />
                        </blockquote>
                      </div>
                      <div className="col-start-1 col-end-2">
                        <img
                          className="object-cover object-bottom w-full h-auto"
                          src="../../assets/images/mobile/home/icon4.png"
                          alt="Infinite-icon4"
                        />
                      </div>
                      <div className="col-start-2 col-end-7 mx-5">
                        <span className="box-decoration-clone text-in-purple-3 font-bold">
                          <p className="text-2xl">
                            Expert
                            <br />
                            Programming
                          </p>
                        </span>
                      </div>
                      <div className="col-start-1 col-end-7 mb-16">
                        <h5 className="text-sm mt-2">
                          สร้างคอนเทนท์บนโซเชียล รับเขียนคอนเทนท์
                        </h5>
                        <button className="in-button mt-2">
                          <img
                            className="object-scale-down h-full w-32"
                            src="../../assets/images/mobile/home/button-service.png"
                            alt="ปุ่ม1"
                          />
                        </button>
                      </div>
                      <div className="col-start-1 col-end-7">
                        <h2 className="text-center text-3xl font-bold">
                          Have a project?
                          <br />
                          Let's chat.
                        </h2>
                        <div className="grid justify-items-center w-full">
                          <a href="/contact">
                            <button className="in-button mt-2">
                              <img
                                className="object-scale-down h-full w-32"
                                src="../../assets/images/mobile/home/button-click-here.png"
                                alt="ปุ่ม1"
                              />
                            </button>
                          </a>
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

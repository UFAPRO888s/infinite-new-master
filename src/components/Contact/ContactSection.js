import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function ContactSection() {
  return (
    <>
      <div className="block">
        <div className="container mx-auto">
          <div className="bg-infinite1-100 h-80 md:h-screen px-0">
            <div className="columns-1 mb-10">
              <div className="grid justify-items-center">
                <img
                  className="object-cover object-center w-full h-auto"
                  src="../assets/images/contact/pic-contact.jpg"
                  alt="pic-contact"
                />
              </div>
            </div>
          </div>
          <div className="bg-infinite1-100 h-[660px] md:h-screen">
            <div className="max-w-full mx-auto px-0 lg:items-center lg:justify-center">
              <div className="relative bg-infinite1-100">
                <div>
                  <div className="max-w-full mx-auto py-0 lg:flex lg:items-center lg:justify-between mt-0">
                    <p className="inline-block h-80 md:h-screen w-1/6 bg-in-purple-3"></p>
                    <p className="inline-block h-80 md:h-screen w-5/12 bg-white"></p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-full text-right">
                  <div className="h-full w-full ">
                    <div className="grid grid-cols-12 relative h-150 md:h-screen">
                      <div className="col-span-12 md:col-span-7 lg:flex lg:items-center">
                        <img
                          className="object-cover w-full h-auto"
                          src="../assets/images/contact/pic-infinity-studio.jpg"
                          alt="Work-pic-illustration-1"
                        />
                      </div>
                      <div className="col-span-12 md:col-span-5 3xl:mx-10 mt-20 2xl:mt-48 3xl:mt-56 text-left font-bold tracking-widest">
                        <div className="grid justify-items-center md:justify-items-start w-full mx-auto md:mx-14 ">
                          <h2 className="block md:hidden text-2xl 2xl:text-4xl 3xl:text-5xl md-2 md:mb-5 font-R-FLEX leading-normal md:leading-[3rem] 3xl:leading-[4rem] uppercase">
                            Infinity Digital Studio
                          </h2>
                          <h2 className="hidden md:block 2xl:text-4xl 3xl:text-5xl md-2 md:mb-5 font-R-FLEX leading-normal md:leading-[3rem] 3xl:leading-[4rem] uppercase">
                            Infinity Digital <br /> Studio
                          </h2>
                          <ul className="text-lg xl:text-xl 3xl:text-2xl font-normal list-none leading-normal md:leading-8 3xl:leading-9 text-left">
                            <li>อาคารมาริโกลด์ ทาวเวอร์ สุวรรณภูมิ</li>
                            <li>
                              ชั้นที่ <span className="font-Prompt">5</span>{" "}
                              ห้องเลขที่{" "}
                              <span className="font-Prompt">1507 </span>
                              ซอยลาดกระบัง{" "}
                              <span className="font-Prompt">1</span>
                            </li>
                            <li>ถนนอ่อนนุช-ลาดกระบัง แขวงลาดกระบัง</li>
                            <li>
                              เขตลาดกระบัง กรุงเทพมหานคร{" "}
                              <span className="font-Prompt">10520</span>{" "}
                            </li>
                          </ul>
                          <div className="grid justify-items-start w-36 md:w-full  my-10">
                            <a href="https://goo.gl/maps/4jEECn3S87Dt87hHA">
                              <button className="in-button">
                                <img
                                  className=" object-contain md:object-none object-center"
                                  src="../assets/images/contact/ปุ่ม-google-map.png"
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
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto px-0 lg:flex lg:items-center lg:justify-end">
                <p className="inline-block h-[450px] md:h-750 w-full bg-infinite2-2"></p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-full text-center font-bold">
                    <div className="grid justify-items-start w-full ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.933546187791!2d100.7172479148301!3d13.722473090366423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d611d93b63301%3A0x460dbb45df3a8d0!2sMarigold%20Tower%20Suvarnabhumi!5e0!3m2!1sth!2sth!4v1685409411993!5m2!1sth!2sth"
                        className="w-full h-96 md:h-680"
                        display="initial"
                        position="relative"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative">
            <div>
              <div className="max-w-full mx-auto py-0 px-0 lg:flex lg:items-center lg:justify-end mt-0">
                <p className="inline-block h-[110vh] md:h-screen w-full bg-white"></p>
              </div>
              <div className="max-w-full mx-auto py-0 px-0 lg:flex lg:items-center lg:justify-end mt-0">
                <p className="inline-block md:h-96 w-full bg-white"></p>
              </div>
              <div className="max-w-full mx-auto py-0 px-0 lg:flex lg:items-center lg:justify-end mt-0">
                <p className="inline-block md:h-32 w-full bg-white"></p>
              </div>
              <div className="max-w-full mx-auto py-0 px-0 lg:flex lg:items-center lg:justify-between">
                <p className="inline-block md:h-32 w-2/5 bg-infinite1-200"></p>
                <p className="inline-block md:h-32 w-1/5 bg-infinite2-2"></p>
              </div>
            </div>
            <div className="absolute top-10 right-0 w-full text-right">
              <div className="h-full w-full">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-full mx-16 my-5 text-center font-bold">
                    <div className="grid justify-items-center md:justify-items-start w-full">
                      <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-normal mt-5 leading-8 3xl:leading-10">
                        ปรึกษาเราได้ในทุกเรื่องธุรกิจ
                        <span className="font-normal text-infinite2-2">
                          ที่คุณต้องการ...
                        </span>
                      </h2>
                    </div>
                    <div className="grid justify-items-center w-32 my-5 border bg-gray-dark">
                      <hr />
                    </div>
                  </div>
                </div>
                <form>
                  <div className="grid grid-cols-12 relative">
                    <div className="col-span-12 mx-10 md:mx-20 text-left font-bold font-Prompt">
                      <div className="grid justify-items-center md:justify-items-start w-full">
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            ชื่อ - นามสกุล
                          </span>
                          <input
                            type="text"
                            placeholder="กรอก ชื่อ - นามสกุล"
                            required
                            className="py-3 px-5 block md:w-128 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            อีเมล
                          </span>
                          <input
                            type="email"
                            placeholder="กรอก อีเมล"
                            required
                            className="py-3 px-5 block  border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            เบอร์โทรศัพท์
                          </span>
                          <input
                            type="text"
                            placeholder="กรอก เบอร์โทรศัพท์"
                            maxLength={10}
                            required
                            className="py-3 px-5 block border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            เว็บไซต์
                          </span>
                          <input
                            type="text"
                            placeholder="กรอก เว็บไซต์"
                            required
                            className="py-3 px-5 block border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            งบประมาณในการลงทุน
                          </span>
                          <input
                            type="text"
                            placeholder="กรอก งบประมาณในการลงทุน"
                            required
                            className="py-3 px-5 block border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                        <label className="block mb-5">
                          <span className=" block text-lg md:text-2xl font-light mb-2 text-in-purple-2">
                            ธุรกิจอยู่ในประเภทใด
                          </span>
                          <input
                            type="text"
                            placeholder="กรอก ธุรกิจอยู่ในประเภทใด"
                            required
                            className="py-3 px-5 block border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2 
                          focus:outline-none focus:border-infinite2-2 focus:ring-1 focus:ring-infinite2-2
                        invalid:text-gray-dark
                        focus:invalid:ring-infinite2-2 focus:invalid:border-infinite2-2"
                          />
                        </label>
                      </div>
                      <div className="grid justify-items-center md:justify-items-start w-full mx-0 mt-6">
                        <button
                          className="in-button py-3 px-5 block w-20 md:w-44 border-2 border-infinite2-2 shadow shadow-gray-dark rounded-2xl text-base md:text-lg mb-2"
                          type="submit"
                        >
                          <p>ส่ง</p>
                        </button>
                      </div>
                      <div className="message"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden"></div>
    </>
  );
}

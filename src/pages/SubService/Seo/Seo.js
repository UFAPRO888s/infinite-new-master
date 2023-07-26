import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubSeo from "../../../components/SubService/SubSeo";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Seo() {
  const reLogoRefs = useRef([]);
  reLogoRefs.current = [];
  useEffect(() => {
    reLogoRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "none",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `sectionLogo-${index + 1}`,
            trigger: el,
            start: "top end+=-100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  
  return (
    <>
      <main>
      <Helmet>
          <title>SEO Digital Marketing | Infinite Digital Consultants</title>
          <meta
            name="description"
            content="สร้างคอนเทนท์ SEO ให้เว็บไซต์ติดหน้าแรก บน Google รวมถึงการทำให้ธุรกิจเข้าถึงผู้ใช้งานได้ง่าย ตรงตามกลุ่มเป้าหมาย ได้ทุกที่ทุกเวลา และเพิ่มโอกาสให้แบรนด์หรือธุรกิจของคุณปิดการขายได้มากขึ้น"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/services/seo" />
        </Helmet>
      </main>
      <main>
        <SubSeo />
      </main>
    </>
  );
}

import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import WorkSection from "../../components/Work/WorkSection";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
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
          <title>Work | Infinite Digital Consultants</title>
          <meta
            name="description"
            content="เป้าหมายสูงสุดของเราคือการผสมผสานศิลปะและเทคโนโลยีเข้าด้วยกัน ภารกิจของเราในทุกๆ วันคือการทำให้ทีมเรามีประสิทธิภาพมากขึ้น เพื่อสร้างสรรค์ผลงานที่มีคุณภาพสำหรับลูกค้าของเรา"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/work" />
        </Helmet>
      </main>
      <main>
        <div className="max-w-full mx-auto overflow-hidden">
          <WorkSection />
        </div>
      </main>
    </>
  );
}

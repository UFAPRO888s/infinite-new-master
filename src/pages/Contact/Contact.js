import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactSection from "../../components/Contact/ContactSection";
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
          <title>Contact - Infinite Digital Consultants</title>
          <meta
            name="description"
            content="ปรึกษาเราได้ในทุกเรื่องธุรกิจที่คุณต้องการ ที่อาคารมาริโกลด์ ทาวเวอร์ สุวรรณภูมิ ชั้นที่ 5 ห้องเลขที่ 1507 ซอยลาดกระบัง 1 ถนนอ่อนนุช-ลาดกระบัง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/contact" />
        </Helmet>
      </main>
      <main>
        <ContactSection />
      </main>
    </>
  );
}

import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubProGramming from "../../../components/SubService/SubProGramming";
import { gsap } from "gsap";
import "./ProGramming.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProGramming() {
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
          <title>Expert Programming - Infinite Digital Consultant</title>
          <meta
            name="description"
            content="รับเขียนโปรแกรม และพัฒนาระบบตามความต้องการของท่านอย่างมืออาชีพรองรับทุกการใช้งานกับทุกธุรกิจ เราพัฒนาโปรแกรม และรับทำเว็บไซต์ทุกรูปแบบ และหลากหลายเพื่อให้เหมาะกับการใช้งานของท่าน ด้วยประสบการณ์ที่เรามีมามากกว่า 10 ปี"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/services/code" />
        </Helmet>
      </main>
      <main className="color-mainpro">
        <SubProGramming />
      </main>
    </>
  );
}

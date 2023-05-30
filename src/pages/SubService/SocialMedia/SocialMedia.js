import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubSocialMedia from "../../../components/SubService/SubSocialMedia";
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
          <title>Creative online and printing | Infinite Digital Consultants</title>
          <meta
            name="description"
            content="เราให้บริการด้านการตลาดและโฆษณาออนไลน์แบบครบวงจร เราเริ่มต้นด้วยการทำวิจัย ที่ครอบคลุม นั่นรวมถึงการวิจัยตลาดการวิจัยทางธุรกิจการวิจัยผลิตภัณฑ์และบริการ การวิจัยคู่แข่ง และการวิจัย Trend ของตลาด"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/services/digital" />
        </Helmet>
      </main>
      <main>
        <SubSocialMedia />
      </main>
    </>
  );
}

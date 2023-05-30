import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubWebDesign from "../../../components/SubService/SubWebDesign";
import { gsap } from "gsap";
import "./WebDesign.css";

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
          <title>Web Design - Infinite Digital Consultants</title>
          <meta
            name="description"
            content="Infinity Digital Agency ให้บริการออกแบบและพัฒนาเว็บไซต์ เว็บแอปพลิเคชันและแอปพลิเคชันมือถือครบวงจร โดยรูปแบบการทำเว็บไซต์หรือออกแบบเว็บไซต์นั้น จะขึ้นอยู่กับเป้าหมายและตรงกับความต้องการของคุณลูกค้า"
          />
          <link rel="canonical" href="https://theinfinitedigital.com/services/design" />
        </Helmet>
      </main>
      <main className="color-mainweb">
        <SubWebDesign />
      </main>
    </>
  );
}

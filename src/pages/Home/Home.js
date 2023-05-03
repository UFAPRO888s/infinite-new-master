import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/Home/HeroSection";
import ContentSection from "../../components/Home/ContentSection";
import SlideHome from "../../components/SlideHome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          รับทำเว็บไซต์ | รับทำ wordpress ออกแบบเว็บไซต์ รองรับ seo
          รับเขียนโปรแกรม ทุกประเภทของธุรกิจ - รับรองคุณภาพ จากทางบริษัท
        </title>
        <meta
          name="description"
          content="บริษัท รับทำเว็บไชต์ ด้วยทีมงานดูโครสร้างครอบคลุมถึง ux/ui และรองรับ seo สามารถออกแบบเว็บไซต์ ด้วย wordpress รวมถึงการ รับทำการตลาดออนไลน์ ทางด้านสื่อดิจิทัลทุกรูปแบบ รับทำ seo ติดหน้า 1 ของ Google สำหรับบริษัทธุรกิจ ทางเรา รับเขียนโปรแกรม ออกแบบโครงสร้าง ฐานข้อมูล ในรูปแบบขององค์กร"
        />
        <link rel="canonical" href="https://theinfinitedigital.com/" />
      </Helmet>
      <SlideHome />
      <main>
        
        <div className="max-w-full md:max-w-full mx-auto overflow-hidden">
          <HeroSection />
          <ContentSection />
        </div>
      </main>
    </>
  );
}

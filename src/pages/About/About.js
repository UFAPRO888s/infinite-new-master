import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../../components/About/AboutSection";

export default function About() {
  return (
    <div className="container">
      <Helmet>
        <title>About | Infinite Digital Consultants</title>
        <meta
          name="description"
          content="Infinity Digital Agency ก่อตั้งขึ้นในปี 2565 โดยผู้ร่วมก่อตั้ง 2 คนที่มีจุดมุ่งหมายที่จะเปลี่ยนแปลงความเป็นไปของ Digital Agency ในขณะนั้น เป้าหมายของเราคือการช่วยเหลือ ปรับปรุง เปลี่ยนแปลง และยกระดับธุรกิจที่ต้องการประสบความสำเร็จในโลกดิจิทัล"
        />
        <link rel="canonical" href="https://theinfinitedigital.com/about" />
      </Helmet>
      <main>
        <div className="max-w-full mx-auto overflow-hidden">
          <AboutSection/>
        </div>
      </main>
    </div>
  );
}

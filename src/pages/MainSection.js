/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Navigation from "../components/Navigation";
import { gsap } from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MainSection() {
  return (
      <Navigation />
  );
}

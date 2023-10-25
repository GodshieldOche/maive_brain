"use client";
import React, { useEffect, useRef } from "react";
import { FourDots, HeroImage } from "./Common/Assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const figureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const el = figureRef.current;
  //   const cont = contentRef.current;
  //   if (!el) {
  //     return;
  //   }
  //   if (!cont) {
  //     return;
  //   }
  //   const rec = el.getBoundingClientRect();
  //   const top = rec.top;
  //   const bottom = top + rec.height;

  //   ScrollTrigger.create({
  //     trigger: el,
  //     pin: true,
  //     start: `top ${top}px`,
  //     end: `bottom ${top}px`,
  //     scrub: 1,
  //     snap: 0,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: cont,
  //       pin: true,
  //       start: `top ${cont.getBoundingClientRect().top}px`,
  //       end: `+=500 ${cont.getBoundingClientRect().top}px`,
  //       markers: true,
  //       scrub: 1,
  //     },
  //   });

  //   tl.to(".test", {
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".test",
  //       start: `top ${cont.getBoundingClientRect().top}px`,
  //       end: `bottom ${cont.getBoundingClientRect().top}px`,
  //       scrub: true,
  //     },
  //   });
  //   tl.to(".test2", {
  //     top: 16,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: ".test2",
  //       start: `top ${cont.getBoundingClientRect().top}px`,
  //       end: `bottom ${cont.getBoundingClientRect().top}px`,
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div className="contain w-full flex items-center h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)]">
      <section className="grid grid-cols-1 w-full items-center gap-y-20 lg:gap-4 lg:grid-cols-2">
        <article
          ref={contentRef}
          className="flex flex-col h-[200px] relative  gap-y-4"
        >
          <div className="relative">
            <FourDots />
          </div>
          <h1 className="test absolute top-4 large_text">
            We Offer Cognitive Development Programs for Neurodivergent
            Individuals
          </h1>
          <h1 className="test2 opacity-0  absolute top-40 large_text">
            We Offer Cognitive Development Programs for wesrdtjhu Individuals
          </h1>
        </article>
        <figure
          ref={figureRef}
          className="w-full h-full items-center flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="w-[300px] h-[280px] md:w-fit md:h-fit ">
            <HeroImage />
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Hero;

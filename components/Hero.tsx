"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { FourDots, HeroImage } from "./Common/Assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const figureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const fourDots = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const el = figureRef.current;
  //   const cont = contentRef.current;
  //   const dots = fourDots.current;
  //   if (!el) {
  //     return;
  //   }
  //   if (!cont) {
  //     return;
  //   }
  //   if (!dots) {
  //     return;
  //   }
  //   const rec = el.getBoundingClientRect();
  //   const top = rec.top;

  //   ScrollTrigger.create({
  //     trigger: ".header",
  //     pin: true,
  //     start: () => "top " + top,
  //     end: () => "bottom 80%",
  //     scrub: 20,
  //     snap: 0,
  //     endTrigger: ".text2",
  //     markers: true,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: cont,
  //       pin: ".four_dots",
  //       start: `top ${cont.getBoundingClientRect().top}px`,
  //       end: () => "bottom 80%",
  //       endTrigger: ".text2",
  //       scrub: 1,
  //     },
  //   });

  //   tl.to(".test", {
  //     opacity: 0,
  //     duration: 0.1,
  //     scrollTrigger: {
  //       trigger: ".test",
  //       start: `top ${dots.getBoundingClientRect().top}px`,
  //       end: `bottom ${dots.getBoundingClientRect().top}px`,
  //       scrub: 1,
  //     },
  //   });
  //   tl.to(".text2", {
  //     opacity: 1,
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: ".test",
  //       start: `+100 ${dots.getBoundingClientRect().top}px`,
  //       end: `bottom ${dots.getBoundingClientRect().top}px`,
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  return (
    <div className=" header relative contain w-full flex h-full items-center min-h-[calc(100vh-64px)] lg:min-h-screen">
      <section className="grid grid-cols-1 w-full items-center gap-y-20 lg:gap-4 lg:grid-cols-2">
        <article
          ref={contentRef}
          className="flex flex-col   gap-y-4"
          data-aos="fade-right"
        >
          <div className="four_dots" ref={fourDots}>
            <FourDots />
          </div>
          <h1 className="test large_text">
            We Offer Cognitive Development Programs for Neurodivergent
            Individuals
          </h1>
        </article>
        <figure
          ref={figureRef}
          data-aos="zoom-in"
          className="w-full h-full  items-center flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="w-[300px]  h-[280px] md:w-fit md:h-fit ">
            <HeroImage />
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Hero;

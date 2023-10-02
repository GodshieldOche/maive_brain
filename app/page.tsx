import About from "@/components/Common/About";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import Training from "@/components/Training";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="contain py-16">
        <About />
      </div>
      <HowItWorks />
      <WhatWeDo />
      <Training />
      <Testimonial />
      <Faq />
    </main>
  );
}

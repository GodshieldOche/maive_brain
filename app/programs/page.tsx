import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Training from "@/components/Training";
import React from "react";

const Page = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Training />
      <Team />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default Page;

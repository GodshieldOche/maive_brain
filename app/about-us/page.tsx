import Hero from "@/components/About-Us/Hero";
import ContactUs from "@/components/ContactUs";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Training from "@/components/Training";
import React from "react";

const AboutUS = () => {
  return (
    <main>
      <Hero />
      <Training />
      <Team />
      <Testimonial />
      <ContactUs />
    </main>
  );
};

export default AboutUS;

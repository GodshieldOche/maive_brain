"use client";

import React from "react";
import { Logo } from "../Common/Assets";
import FooterLinks from "../Common/FooterLinks";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();
  if (params.id) {
    return <></>;
  }
  return (
    <footer className="w-full bg-footer-svgM md:bg-footer-svg bg-no-repeat bg-bottom bg-contain">
      <div className="contain py-4  kg:py-8 w-full flex flex-col  gap-y-12 lg:gap-y-14  ">
        <div className="flex flex-col w-full gap-y-6 items-center ">
          <Logo />
          <h2 className=" medium_text text-center">
            Helping students and adult of all ages
            <br className="hidden md:block" /> achieve success
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-40 ">
          <FooterLinks
            title="General"
            options={[
              { text: "Home", link: "" },
              { text: "About Us", link: "" },
            ]}
          />
          <FooterLinks
            title="Explore"
            options={[
              { text: "Programs", link: "" },
              { text: "Resources", link: "" },
            ]}
          />
          <FooterLinks
            title="Legal"
            options={[
              { text: "Privacy Policy", link: "" },
              { text: "Terms of Service", link: "" },
            ]}
          />
          <FooterLinks
            title="Follow Us"
            options={[
              { text: "Twitter", link: "" },
              { text: "Instagram", link: "" },
            ]}
          />
        </div>
        <div className="flex w-full lg:!mt-16 justify-center">
          <h1 className="small_text !text-sm md:!text-base lg:!text-lg font-semibold ">
            © 2023 EXX. All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import About from "../Common/About";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] relative">
      <div className="contain w-full  h-full relative flex justify-center items-center ">
        <About />
      </div>
      {/* <div className="absolute  hidden xl:block top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="154"
          height="582"
          viewBox="0 0 154 582"
          fill="none"
        >
          <path
            d="M-86.5506 -22.8505C-79.4207 -24.954 -68.429 -25.0749 -59.6264 -20.0328C101.169 53.0634 -55.3488 77.5967 -22.636 165.277C-8.00131 183.305 16.596 189.248 36.0962 202.854C124.483 251.18 -44.8015 319.163 71.398 367.925C138.727 400.061 180.441 403.336 134.364 473.631C101.347 527.389 86.09 569.587 66.6268 579.299C37.2874 601.821 -139.981 473.377 -152.576 471.55C-304.028 379.633 -339.738 394.81 -291.279 313.046C-240.929 211.549 -176.219 123.52 -124.337 23.965C-113.15 6.25137 -109.668 -15.2566 -86.5506 -22.8505Z"
            fill="#FE9378"
          />
        </svg>
      </div>

      <div className="absolute hidden xl:block -right-5 -top-40">
        <svg
          width="146"
          height="837"
          viewBox="0 0 146 837"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M145.232 392.037L225.712 407.921L175.345 663.117L94.8647 647.233L145.232 392.037Z"
            fill="#ECA903"
          />
          <path
            d="M113.697 385.813L194.178 401.697L143.81 656.894L63.3299 641.009L113.697 385.813Z"
            fill="#ECA903"
          />
          <path
            d="M157.872 448.259L273.152 471.011L201.006 836.55L85.727 813.798L157.872 448.259Z"
            fill="#ECA903"
          />
          <path
            d="M204.449 92.0017L284.929 107.886L224.347 414.839L143.867 398.954L204.449 92.0017Z"
            fill="#ECA903"
          />
          <path
            d="M191.463 -168.556L271.943 -152.672L221.576 102.525L141.096 86.6408L191.463 -168.556Z"
            fill="#ECA903"
          />
          <path
            d="M142.452 79.7664L222.933 95.6505L162.35 402.603L81.87 386.719L142.452 79.7664Z"
            fill="#ECA903"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;

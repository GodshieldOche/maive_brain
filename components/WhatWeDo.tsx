import React from "react";
import { FourDots } from "./Common/Assets";
import TestBox from "./Common/TestBox";
import TestText from "./Common/TestText";

const WhatWeDo = () => {
  return (
    <div className="w-full h-full relative py-8 lg:py-20 ">
      <div className="contain flex flex-col gap-y-14 z-40 ">
        <div className="flex flex-col gap-y-4">
          <FourDots />
          <h1 className="large_text max-w-[498px] ">
            At Maive, we help Individuals Living with
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-14 ">
          <TestBox
            image="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1694352085/SmartAfri/test_1_qksdx1.png"
            title="Dyslexia & Reading Disorders"
            description="Maive Brain is a one-on-one brain training center that uses over
            decades of research"
            id="dyslexia"
          />
          <div
            data-aos="fade-right"
            className="w-full h-full flex flex-col justify-between"
          >
            <TestText
              title="Attention Deficit Disorder"
              description="(ADHD) is a condition that affects people's behaviour, appearing restless & trouble concentrating "
            />
            <TestText
              title="Memory Loss"
              description="An unusual forgetfulness affecting the ability to remember new events or recall old memories "
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full h-full hidden lg:flex flex-col justify-between"
          >
            <TestText
              title="Speech Disorders"
              description="is a condition in which a person has problems creating  the speech sounds needed to communicate with others"
            />
            <TestText
              title="Autism Spectrum"
              description="ASD is a  neuro disorder caused by differences in the brain, affecting social interactions & communication"
            />
          </div>
          <TestBox
            image="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1694352085/SmartAfri/test_2_vzajpy.png"
            title="Cognitive Assessments"
            description="Maive Brain is a one-on-one brain training center that uses over
            decades of research"
            id="cognitive"
          />

          <div
            data-aos="fade-right"
            className="w-full h-full flex lg:hidden flex-col justify-between"
          >
            <TestText
              title="Speech Disorders"
              description="is a condition in which a person has problems creating  the speech sounds needed to communicate with others"
            />
            <TestText
              title="Autism Spectrum"
              description="ASD is a  neuro disorder caused by differences in the brain, affecting social interactions & communication"
            />
          </div>
        </div>
      </div>
      <div className=" hidden absolute top-0 left-0 right-0 w-full lg:flex flex-col justify-between h-full bottom-0">
        <div className="flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="433"
            height="249"
            viewBox="0 0 433 249"
            fill="none"
          >
            <path
              d="M-96.7271 139.46C149.253 -27.4551 474.941 73.8999 428.301 -191.155C381.671 -456.21 87.5599 -643.203 -228.356 -609.088C-544.302 -574.7 -762.616 -331.807 -715.978 -66.7521C-669.667 198.273 -441.094 373.09 -96.7271 139.46Z"
              fill="#06748D"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="487"
            height="354"
            viewBox="0 0 487 354"
            fill="none"
          >
            <path
              d="M332.512 77.8011C206.252 -193.511 -125.022 -249.958 49.9548 -477.203C224.932 -704.446 572.676 -743.143 826.595 -564.005C1080.4 -384.595 1144.23 -54.8008 969.249 172.443C794.569 399.813 509.299 457.583 332.512 77.8011Z"
              fill="#ECA903"
            />
          </svg>
        </div>
        <div className="flex items-end  justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="443"
            height="162"
            viewBox="0 0 443 162"
            fill="none"
          >
            <path
              d="M-242.374 973.829C-502.513 947.488 -665.091 814.627 -728.006 756.617C-801.481 688.868 -877.622 524.828 -860.585 394.422C-843.548 264.018 -759.821 168.895 -696.037 118.197C-632.254 67.5017 -452.626 -32.8254 -168.418 10.6594C115.787 54.1441 264.728 189.993 328.032 249.908C391.347 309.824 444.363 396.417 442.973 503.189C441.584 609.96 397.904 690.686 325.529 782.971C253.154 875.256 82.7969 1006.76 -242.374 973.829Z"
              fill="#22685D"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="310"
            height="205"
            viewBox="0 0 310 205"
            fill="none"
          >
            <path
              d="M264.329 738.767C92.0202 639.241 -7.3008 517.618 0.419197 373.186C13.1612 134.795 180.078 97.981 271.981 96.732C342.406 95.775 399.005 117.991 476.123 131.437C547.673 143.912 662.936 121.698 730.712 89.398C826.5 43.746 897.8 -11.71 991.54 2.17139C1085.28 16.0528 1159.83 70.8915 1213.06 206.353C1255.64 314.723 1259.5 479.121 1191.36 592.943C1126.67 701.004 1006.98 773.845 852.57 834.493C659.551 910.301 530.126 892.291 264.329 738.767Z"
              fill="#FF8D6B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

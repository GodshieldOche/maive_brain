"use client";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { AccordionProps } from "./Accordion";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionProps;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.clientHeight);
    }
  }, [contentRef.current]);

  return (
    <div className={`w-full  `}>
      <div
        className="w-full flex px-4 py-[14px] text-white rounded-[10px] bg-primaryGreen cursor-pointer justify-between space-x-6 items-center"
        onClick={btnOnClick}
      >
        <h1 className="leading-[34px] text-base md:text-xl font-medium ">
          {data.title}
        </h1>
        <div>
          {!isOpen && (
            <Icon
              width={28}
              height={28}
              icon="eva:plus-fill"
              className={` !whitespace-nowrap transition-all !text-white duration-200 ease-linear ${
                isOpen ? "hidden" : "block"
              }`}
            />
          )}
          {isOpen && (
            <Icon
              width={28}
              height={28}
              icon="eva:minus-fill"
              className={` transition-all duration-200 !text-white ease-linear ${
                isOpen ? "block" : "hidden"
              }`}
            />
          )}
        </div>
      </div>

      <div
        className={`  transition-all duration-300 ease-linear overflow-hidden `}
        style={{
          height: isOpen ? height + "px" : "0px",
        }}
      >
        <div className=" px-1" ref={contentRef}>
          <p className="text-base lg:text-xl whitespace-normal !leading-[50px]">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;

import Image from "next/image";
import React from "react";
import fourDots from "@/public/fourDots.svg";
import LogoImage from "@/public/MaiveLogo.svg";
import HeroImg from "@/public/Hero.svg";
import JoinSvg from "@/public/joinSvg.svg";

export const FourDots = () => {
  return <Image src={fourDots} alt="Four Dots" />;
};

export const Logo = () => {
  return (
    <div className=" md:w-fit md:h-fit ">
      <Image src={LogoImage} alt="logo" />
    </div>
  );
};

export const HeroImage = () => {
  return (
    <div className="w-[300px] h-[280px] md:w-fit md:h-fit ">
      <Image src={HeroImg} alt="Hero Image" />
    </div>
  );
};

export const JoinImage = () => {
  return (
    <div className="flex gap-x-[2px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="237"
        viewBox="0 0 15 237"
        fill="none"
      >
        <path
          d="M0.219727 0H14.2197C3.97132 95.1276 4.71037 146.846 14.2197 237H0.219727V0Z"
          fill="#06748D"
          fill-opacity="0.3"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="198"
        viewBox="0 0 12 198"
        fill="none"
      >
        <path
          d="M0.219727 0H11.2197C3.1674 79.4737 3.74809 122.681 11.2197 198H0.219727V0Z"
          fill="#06748D"
          fill-opacity="0.3"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="198"
        viewBox="0 0 19 198"
        fill="none"
      >
        <path
          d="M18.2197 0H0.219727C13.3963 79.4737 12.446 122.681 0.219727 198H18.2197V0Z"
          fill="#06748D"
          fill-opacity="0.3"
        />
      </svg>
    </div>
  );
};

export const LinkedInIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M32.2222 6.11111H7.77775C6.85728 6.11111 6.11108 6.85731 6.11108 7.77778V32.2222C6.11108 33.1427 6.85728 33.8889 7.77775 33.8889H32.2222C33.1427 33.8889 33.8889 33.1427 33.8889 32.2222V7.77778C33.8889 6.85731 33.1427 6.11111 32.2222 6.11111Z"
        fill="#0A66C2"
      />
      <path
        d="M11.1111 16.6667H14.4444V28.3333H11.1111V16.6667Z"
        fill="white"
      />
      <path
        d="M12.7778 14.1667C13.8516 14.1667 14.7222 13.2961 14.7222 12.2222C14.7222 11.1483 13.8516 10.2778 12.7778 10.2778C11.7039 10.2778 10.8333 11.1483 10.8333 12.2222C10.8333 13.2961 11.7039 14.1667 12.7778 14.1667Z"
        fill="white"
      />
      <path
        d="M23.6111 19.4444C22.3839 19.4444 21.3889 20.0933 21.3889 21.9444V28.3333H18.0555V16.6667H21.3889V17.8944H21.3878C21.8045 17.4207 22.3174 17.0413 22.8925 16.7817C23.4675 16.5221 24.0913 16.3882 24.7222 16.3889C27.1767 16.3889 29.1667 18.2222 29.1667 21.3889V28.3333H25.8333V21.9444C25.8333 20.0933 24.8389 19.4444 23.6111 19.4444Z"
        fill="white"
      />
      <path
        d="M32.2222 6.11111H7.77775C6.85728 6.11111 6.11108 6.85731 6.11108 7.77778V32.2222C6.11108 33.1427 6.85728 33.8889 7.77775 33.8889H32.2222C33.1427 33.8889 33.8889 33.1427 33.8889 32.2222V7.77778C33.8889 6.85731 33.1427 6.11111 32.2222 6.11111Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M11.1111 16.6667H14.4444V28.3333H11.1111V16.6667Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7778 14.1667C13.8516 14.1667 14.7222 13.2961 14.7222 12.2222C14.7222 11.1483 13.8516 10.2778 12.7778 10.2778C11.7039 10.2778 10.8333 11.1483 10.8333 12.2222C10.8333 13.2961 11.7039 14.1667 12.7778 14.1667Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.6111 19.4444C22.3839 19.4444 21.3889 20.0933 21.3889 21.9444V28.3333H18.0555V16.6667H21.3889V17.8944H21.3878C21.8045 17.4207 22.3174 17.0413 22.8925 16.7817C23.4675 16.5221 24.0913 16.3882 24.7222 16.3889C27.1767 16.3889 29.1667 18.2222 29.1667 21.3889V28.3333H25.8333V21.9444C25.8333 20.0933 24.8389 19.4444 23.6111 19.4444Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.2222 6.11111H7.77775C6.85728 6.11111 6.11108 6.85731 6.11108 7.77778V32.2222C6.11108 33.1427 6.85728 33.8889 7.77775 33.8889H32.2222C33.1427 33.8889 33.8889 33.1427 33.8889 32.2222V7.77778C33.8889 6.85731 33.1427 6.11111 32.2222 6.11111Z"
        fill="#DB4437"
      />
      <path
        d="M32.2222 6.11111H7.77775C6.85728 6.11111 6.11108 6.85731 6.11108 7.77778V32.2222C6.11108 33.1427 6.85728 33.8889 7.77775 33.8889H32.2222C33.1427 33.8889 33.8889 33.1427 33.8889 32.2222V7.77778C33.8889 6.85731 33.1427 6.11111 32.2222 6.11111Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M16.8889 20.3889L15.3333 21.9444L14.8161 21.7733L10.4547 25.7906C10.3186 25.5494 10.233 25.2306 10.233 24.8883V14.5789L16.8889 20.3889Z"
        fill="#D0CFCE"
      />
      <path
        d="M29.6541 14.5594V24.8883C29.6541 25.2228 29.5764 25.53 29.4403 25.7711L25.0392 21.7415L24.639 21.764L23.0586 20.2839L29.6541 14.5594Z"
        fill="#D0CFCE"
      />
      <path
        d="M16.4242 20.2917L18.1625 21.8978C18.2559 21.9833 18.3492 22.0572 18.4425 22.1194C19.3875 22.8194 20.4881 22.8194 21.4292 22.1156C21.5186 22.0533 21.612 21.9756 21.6975 21.8978L23.4475 20.2839"
        fill="#D0CFCE"
      />
      <path
        d="M16.8618 18.0091L18.5688 19.8888C18.6604 19.989 18.7521 20.0755 18.8437 20.1483C19.7717 20.9675 20.8524 20.9675 21.7765 20.1437C21.8643 20.0709 21.956 19.9799 22.04 19.8888L23.7584 18L28.1713 23C28.0109 23.3505 29.2345 25 28.9596 25H11.6759C11.4086 25 11.1642 24.7861 11 24.4448L16.8618 18.0091Z"
        fill="#D0CFCE"
        stroke="#D0CFCE"
        stroke-width="1.8"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.6395 21.3751L29.4399 25.7711C29.2766 26.0706 29.0238 26.265 28.7438 26.265H11.1427C10.8705 26.265 10.6216 26.0822 10.4543 25.7906L15.1513 21.4638"
        fill="#D0CFCE"
      />
      <path
        d="M29.6541 14.5594L23.4475 20.2839L21.6975 21.8978C21.6119 21.9756 21.5186 22.0533 21.4291 22.1156C20.488 22.8194 19.3875 22.8194 18.4425 22.1194C18.3491 22.0572 18.2558 21.9833 18.1625 21.8978L16.4241 20.2917L10.233 14.5789C10.2486 14.5556 10.268 14.5283 10.2875 14.5011C10.4508 14.2678 10.6725 14.1278 10.9136 14.1278H28.9891C29.2186 14.1278 29.4403 14.2639 29.5997 14.4817C29.6191 14.505 29.6386 14.5322 29.6541 14.5594Z"
        fill="#D0CFCE"
      />
      <path
        d="M14.8161 21.7733L10.4547 25.7906C10.3186 25.5494 10.233 25.2306 10.233 24.8883V14.5789M29.6541 14.5594V24.8883C29.6541 25.2228 29.5764 25.53 29.4403 25.7711L25.0392 21.7414M10.4804 14.4191L10.4559 14.4039M16.4241 20.2917L18.1625 21.8978C18.2558 21.9833 18.3491 22.0572 18.4425 22.1194C19.3875 22.8194 20.488 22.8194 21.4291 22.1156C21.5186 22.0533 21.6119 21.9756 21.6975 21.8978L23.4475 20.2839"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.6394 21.3751L29.4398 25.7711C29.2765 26.0706 29.0237 26.265 28.7437 26.265H11.1426C10.8704 26.265 10.6215 26.0822 10.4543 25.7906L15.1513 21.4638"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.6541 14.5594L23.4475 20.2839L21.6975 21.8978C21.6119 21.9756 21.5186 22.0533 21.4291 22.1156C20.488 22.8194 19.3875 22.8194 18.4425 22.1194C18.3491 22.0572 18.2558 21.9833 18.1625 21.8978L16.4241 20.2917L10.233 14.5789C10.2486 14.5556 10.268 14.5283 10.2875 14.5011C10.4508 14.2678 10.6725 14.1278 10.9136 14.1278H28.9891C29.2186 14.1278 29.4403 14.2639 29.5997 14.4817C29.6191 14.505 29.6386 14.5322 29.6541 14.5594Z"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

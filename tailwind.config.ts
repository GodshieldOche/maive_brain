import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-svg": "url('/footerBg.svg')",
        "footer-svgM": "url('/footerBgM.svg')",
        "howitworks-svg": "url('/howitworks.svg')",
        "training-svg": "url('/training.svg')",
        "testimonial-svg": "url('/testimonialBg.svg')",
        "faq-svg": "url('/faqBg.svg')",
        "trainingbg-svg": "url('/trainingbg.svg')",
        "testimonialbg-svg": "url('/testimonial.svg')",
        "mhowitworks-svg": "url('/mhowitworks.svg')",
        "mtrainingBg-svg": "url('/mtrainingBg.svg')",
        "mtestimonialBg-svg": "url('/mtestimonialBg.svg')",
        "mfaq-bg-svg": "url('/mfaq-bg.svg')",
        "contact-us-bg-svg": "url('/contactUsBg.svg')",
        "mcontact-us-bg-svg": "url('/mcontactUsBg.svg')",
        "mteam-bg-svg": "url('/mteamBg.svg')",
        "team-bg-svg": "url('/teamBg.svg')",
        "tdetails-svg": "url('/tdetails.svg')",
      },
      colors: {
        primaryGreen: "#203A31",
        lightOrange: "#FCF0D7",
        mustard: "#ECA903",
        primaryOrange: "#FF8D6B",
        primaryRed: "#FF6D6A",
      },
      fontFamily: {
        SpaceG: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

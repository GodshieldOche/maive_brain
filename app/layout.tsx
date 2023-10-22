"use client";
import Header from "@/components/Layout/Header";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "@/components/Layout/Menu";
import initAOS from "@/initAOS";

export const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Maive Brain</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${rubik.className} bg-lightOrange h-full text-primaryGreen`}
      >
        <Header show={show} setShow={setShow} />
        <div className="h-full !w-screen ">{children}</div>
        <Footer />
        {show && <Menu show={show} setShow={setShow} />}
      </body>
    </html>
  );
}

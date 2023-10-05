"use client";
import Header from "@/components/Layout/Header";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";
import { useState } from "react";
import Menu from "@/components/Layout/Menu";
import NextNprogress from "nextjs-progressbar";

export const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

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
        className={`${rubik.className} bg-lightOrange text-primaryGreen m-0 p-0`}
      >
        <NextNprogress color="#FF6D6A" />
        <Header show={show} setShow={setShow} />
        <div className="h-full !w-screen !overflow-x-hidden">{children}</div>
        <Footer />
        {show && <Menu show={show} setShow={setShow} />}
      </body>
    </html>
  );
}

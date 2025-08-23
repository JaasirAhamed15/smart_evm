"use client";
import { Montserrat } from "next/font/google";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Product from "../Components/Product";
import Community from "../Components/Community";
import Footer from "../Components/Footer";

const montserrat = Montserrat({ weight: ["400", "500", "600", "700"] });

export default function Home() {
  return (
    <main
      className={`${montserrat.className} bg-[#0f172a] text-white min-h-screen font-sans`}
    >
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Product />
      <Community />
      {/* <Footer /> */}
    </main>
  );
}

"use client";

import Image from "next/image";
import HomePic from "@/public/images/Kevin_homepage.jpg";
import Logo from "@/public/images/kev_logo.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import About from "@/components/About";
import Prestations from "@/components/Prestations";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import LogoIntersection from "@/components/LogoIntersection";
import { Avis } from "@/components/Avis";
import { AnimatePresence } from "framer-motion";
import PolygonBackground from "@/components/PolygonBackground";

export default function Home() {
  return (
    <main>
      <PolygonBackground />
      <Header />
      <Prestations />
      <Portfolio />
      <About />
      <Avis />
      <LogoIntersection />
      <Contact />
    </main>
  );
}

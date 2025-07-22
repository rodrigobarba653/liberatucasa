"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pasos from "@/components/Pasos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Pasos />
      <Servicios />
      <Contacto />
      <Footer />
    </main>
  );
}

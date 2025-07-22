"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarStepper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-screen px-6 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white shadow py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="relative w-56 h-10">
            <Image
              src="/images/logo.svg"
              alt="LiberaTuCasa"
              fill
              className="object-contain transition-all"
            />
          </Link>
        </div>
      </header>
    </>
  );
}

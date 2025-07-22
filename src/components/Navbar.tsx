"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLink = ({ id, label }: { id: string; label: string }) =>
    pathname === "/" ? (
      <button onClick={() => scrollToId(id)}>{label}</button>
    ) : (
      <Link href={`/#${id}`}>{label}</Link>
    );

  return (
    <>
      {/* Dark overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header
        className={`w-screen px-6 fixed top-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white shadow py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="relative w-56 h-10"
            aria-label="Volver arriba"
          >
            <Image
              src="/images/logo.svg"
              alt="LiberaTuCasa"
              fill
              className={`object-contain transition-all ${
                menuOpen && !scrolled ? "invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <NavLink id="pasos" label="Pasos" />
            <NavLink id="servicios" label="Servicios" />
            <NavLink id="contacto" label="Contáctanos" />
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-2xl text-gray-800 ${
              menuOpen && !scrolled ? "text-white!" : ""
            }`}
            aria-label="Toggle Menu"
          >
            <Icon icon={menuOpen ? "ph:x" : "ph:list"} />
          </button>

          {/* CTA Button */}
          <Link href="/registro">
            <button className="hidden md:inline-block text-white bg-black px-4 py-2 text-sm btn-small btn-primary">
              Solicitar oferta
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden mt-4 relative z-50 flex bg-white flex-col gap-4 text-sm text-gray-700 px-6 py-4 rounded-lg ${
              scrolled ? "" : "shadow-md"
            }`}
          >
            <NavLink id="pasos" label="Pasos" />
            <NavLink id="servicios" label="Servicios" />
            <NavLink id="contacto" label="Contacto" />
            <Link href="/registro">
              <button className="text-white bg-black px-4 py-2 text-sm btn-small btn-primary w-full text-center">
                Solicitar oferta
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

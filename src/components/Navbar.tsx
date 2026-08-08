"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
        }) + " CET"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800/80 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold transition-transform duration-500 group-hover:rotate-180 shadow-md">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xl font-black tracking-wider text-white">
              VOYAGE<span className="text-zinc-500 ml-1.5 font-light">MONOCHROME</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-zinc-400 font-syne uppercase">
              CINEMATOGRAPHIC EXPEDITIONS
            </span>
          </div>
        </a>

        {/* Spaced Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-syne tracking-widest uppercase text-zinc-300">
          <a href="#expeditions" className="hover:text-white transition-colors py-1 relative group">
            EXPEDITIONS
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#motion-stills" className="hover:text-white transition-colors py-1 relative group">
            STORYTELLING
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#itinerary" className="hover:text-white transition-colors py-1 relative group">
            PLANNER
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#packages" className="hover:text-white transition-colors py-1 relative group">
            PACKAGES
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors py-1 relative group">
            REVIEWS
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-6">
          {/* Paris CET Clock */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-900/90 px-4 py-2 rounded-full border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-80" />
            <span>PARIS: {time || "12:00 CET"}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2.5 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors bg-zinc-900/60"
            title="Toggle Ambient Audio"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-white animate-pulse" />}
          </button>

          {/* CTA Button */}
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs font-syne font-extrabold tracking-widest text-black bg-white rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase"
          >
            <span className="relative z-10 flex items-center gap-2">
              BOOK EXPEDITION
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white border border-zinc-800 rounded-lg bg-zinc-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/95 border-b border-zinc-800 px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-5 text-sm font-syne tracking-widest uppercase text-zinc-300">
              <a href="#expeditions" onClick={() => setMobileMenuOpen(false)}>EXPEDITIONS</a>
              <a href="#motion-stills" onClick={() => setMobileMenuOpen(false)}>STORYTELLING</a>
              <a href="#itinerary" onClick={() => setMobileMenuOpen(false)}>JOURNEY PLANNER</a>
              <a href="#packages" onClick={() => setMobileMenuOpen(false)}>CURATED PACKAGES</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>VOYAGER REVIEWS</a>
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-white text-black font-syne font-bold text-xs tracking-widest uppercase rounded-full"
            >
              BOOK EXPEDITION NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

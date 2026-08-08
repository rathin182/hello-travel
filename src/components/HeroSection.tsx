"use client";

import { motion } from "framer-motion";
import { Compass, Calendar, Users, MapPin, ArrowRight, Camera, Sparkles, Disc } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 lg:px-16 overflow-hidden bg-[#050505]">
      {/* Background Hero Image with Rich Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Cinematic European Travel"
          fill
          priority
          className="object-cover object-center cinematic-image opacity-60 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>

      {/* Top Specification Bar */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-zinc-200">
            <Camera className="w-4 h-4 text-white" />
            CINEMATIC ARCHIVE 2026
          </span>
          <span className="hidden sm:inline-block text-zinc-700">|</span>
          <span className="hidden sm:inline-block text-zinc-400">GPS: 43.7696° N, 11.2558° E</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="uppercase font-syne tracking-widest text-[10px]">LUXURY EUROPEAN VOYAGES</span>
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 w-full my-auto py-8 flex flex-col items-start justify-center">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-syne font-bold tracking-widest text-zinc-200 uppercase">
            CURATED EUROPEAN EXPEDITIONS
          </span>
        </motion.div>

        {/* Clean Luxury European Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-cinzel tracking-tight leading-[0.95] text-white uppercase mb-6"
        >
          CRAFTING <br />
          <span className="text-zinc-400 font-light italic font-serif">MEMORABLE</span> VOYAGES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8"
        >
          Immerse yourself in global travel curated with European cinematographic mastery. 
          Private air charters, coastal yacht sanctuaries, and bespoke alpine journeys tailored for discerning travelers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-white text-black font-syne font-extrabold text-xs tracking-widest uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-3 group"
          >
            EXPLORE DESTINATIONS
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#itinerary"
            className="px-8 py-4 bg-zinc-900/90 border border-zinc-700 text-white font-syne font-semibold text-xs tracking-widest uppercase rounded-full hover:border-white transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            BUILD ITINERARY
          </a>
        </motion.div>
      </div>

      {/* Full-width Search & Journey Widget */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-panel p-4 sm:p-6 rounded-2xl border border-zinc-800 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
        >
          {/* Destination */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <MapPin className="w-5 h-5 text-white" />
            <div className="flex flex-col">
              <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase">DESTINATION</span>
              <select className="bg-transparent text-white font-syne text-xs font-bold focus:outline-none cursor-pointer">
                <option value="amalfi" className="bg-zinc-900 text-white">Amalfi Coast, Italy</option>
                <option value="swiss" className="bg-zinc-900 text-white">Swiss Alps, Zermatt</option>
                <option value="kyoto" className="bg-zinc-900 text-white">Kyoto, Japan</option>
                <option value="iceland" className="bg-zinc-900 text-white">Reykjavik, Iceland</option>
                <option value="monte-carlo" className="bg-zinc-900 text-white">Monte Carlo, Monaco</option>
              </select>
            </div>
          </div>

          {/* Season */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <Calendar className="w-5 h-5 text-white" />
            <div className="flex flex-col">
              <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase">DEPARTURE</span>
              <span className="text-xs font-syne font-bold text-white">AUTUMN // OCT 2026</span>
            </div>
          </div>

          {/* Passengers */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <Users className="w-5 h-5 text-white" />
            <div className="flex flex-col">
              <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase">TRAVELERS</span>
              <span className="text-xs font-syne font-bold text-white">02 VOYAGERS</span>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenBooking}
            className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-syne font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <span>FIND EXPEDITION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight, Camera, Compass, MapPin, Sparkles } from "lucide-react";

interface HorizontalScrollSectionProps {
  onOpenBooking: () => void;
}

const DESTINATIONS = [
  {
    id: "amalfi",
    title: "AMALFI COAST",
    subtitle: "Cliffs, Mediterranean Sea & Vintage Wooden Speedboats",
    location: "POSITANO, ITALY",
    coords: "40.6340° N, 14.6027° E",
    image: "/images/amalfi.jpg",
    price: "€12,400",
    days: "7 DAYS // 6 NIGHTS",
    specs: "COASTAL CHARTER // FULL VIVID COLOR",
  },
  {
    id: "swiss",
    title: "SWISS ALPS",
    subtitle: "Glacier Express & Alpine Summit Stillness",
    location: "ZERMATT, SWITZERLAND",
    coords: "45.9765° N, 7.7491° E",
    image: "/images/swiss.jpg",
    price: "€14,800",
    days: "8 DAYS // 7 NIGHTS",
    specs: "ALPINIST PRIVILEGE // PANORAMIC",
  },
  {
    id: "kyoto",
    title: "KYOTO SANCTUARY",
    subtitle: "Arashiyama Mist, Zen Bamboo & Shinto Shrines",
    location: "KYOTO, JAPAN",
    coords: "35.6762° N, 135.7722° E",
    image: "/images/kyoto.jpg",
    price: "€16,200",
    days: "10 DAYS // 9 NIGHTS",
    specs: "HERITAGE SANCTUARY // PEACEFUL",
  },
  {
    id: "iceland",
    title: "ICELANDIC FJORDS",
    subtitle: "Volcanic Black Sands & Emerald Aurora Skies",
    location: "REYKJAVIK, ICELAND",
    coords: "64.1466° N, 21.9426° W",
    image: "/images/iceland.jpg",
    price: "€11,900",
    days: "6 DAYS // 5 NIGHTS",
    specs: "OBSIDIAN SHORES // EXCLUSIVITY",
  },
  {
    id: "montecarlo",
    title: "MONTE CARLO RIVIERA",
    subtitle: "Harbor Views & Classic Convertible Touring",
    location: "MONACO",
    coords: "43.7384° N, 7.4246° E",
    image: "/images/motorcycle.jpg",
    price: "€18,500",
    days: "5 DAYS // 4 NIGHTS",
    specs: "HIGH FASHION // VINTAGE DRIVE",
  },
];

export default function HorizontalScrollSection({ onOpenBooking }: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const trigger = triggerRef.current;
    if (!container || !trigger) return;

    const totalWidth = container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="expeditions" ref={sectionRef} className="relative w-full bg-[#050505] border-t border-b border-zinc-900">
      <div ref={triggerRef} className="relative h-screen overflow-hidden flex flex-col justify-center py-8">
        {/* Full-width Section Header */}
        <div className="w-full px-6 sm:px-12 lg:px-16 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4 text-white" />
              <span>HORIZONTAL EXPEDITION CAROUSEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-cinzel text-white uppercase tracking-tight">
              CURATED <span className="text-stroke-white text-transparent">DESTINATIONS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-syne text-zinc-400">
            <span className="hidden sm:inline">SCROLL TO TRANSLATE HORIZONTALLY</span>
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-white font-mono font-bold">[ 01 — 05 ]</span>
          </div>
        </div>

        {/* Horizontal Track with Rich Color Images */}
        <div ref={containerRef} className="flex gap-8 px-6 sm:px-12 lg:px-16 w-max items-center">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="relative w-[340px] sm:w-[480px] md:w-[560px] h-[480px] sm:h-[540px] rounded-3xl overflow-hidden glass-panel border border-zinc-800 flex flex-col justify-between p-6 sm:p-8 group transition-all duration-500 hover:border-zinc-500 flex-shrink-0"
            >
              {/* Card Image - Full Vibrant Color */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover object-center cinematic-image opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
              </div>

              {/* Card Top Meta */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-200">
                <span className="px-3.5 py-1.5 bg-black/80 rounded-full border border-zinc-800 backdrop-blur-md flex items-center gap-1.5 font-syne font-bold text-white">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.location}
                </span>
                <span className="px-3.5 py-1.5 bg-white text-black rounded-full font-syne font-extrabold text-xs shadow-lg">
                  {dest.price}
                </span>
              </div>

              {/* Card Bottom Specs & Title */}
              <div className="relative z-10">
                <span className="text-[10px] font-syne tracking-widest text-zinc-300 uppercase mb-1 block">
                  {dest.coords}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white uppercase mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {dest.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 font-light mb-6">
                  {dest.subtitle}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-300 font-bold">{dest.days}</span>
                  <button
                    onClick={onOpenBooking}
                    className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-all shadow-xl group-hover:scale-110"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* End Callout Card */}
          <div className="w-[300px] sm:w-[380px] h-[480px] sm:h-[540px] rounded-3xl glass-panel border border-dashed border-zinc-700 flex flex-col items-center justify-center text-center p-8 flex-shrink-0">
            <Sparkles className="w-12 h-12 text-white mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold font-cinzel text-white uppercase mb-3">
              CUSTOM BESPOKE CHARTER
            </h3>
            <p className="text-xs text-zinc-400 mb-8 max-w-xs leading-relaxed">
              Require a private Gulfstream jet or luxury motor yacht tailored to your exact itinerary?
            </p>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-white text-black font-syne font-bold text-xs tracking-widest uppercase rounded-full hover:bg-zinc-200 transition-all shadow-xl"
            >
              REQUEST CHARTER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

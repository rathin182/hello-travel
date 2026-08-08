"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Film, Camera, Disc } from "lucide-react";

export default function MotionStillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headline = headlineRef.current;
    const section = sectionRef.current;

    if (!headline || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headline,
        { scale: 0.9, opacity: 0.6 },
        {
          scale: 1.05,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="motion-stills"
      ref={sectionRef}
      className="relative py-28 bg-[#050505] overflow-hidden border-b border-zinc-900 px-6 sm:px-12 lg:px-16"
    >
      <div className="w-full relative z-10">
        {/* Top Camera Metadata */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-white animate-spin-slow" />
            <span>STORYTELLING & CINEMATOGRAPHY</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-zinc-400">
            <span>ASPECT: 2.39:1 CINEMATIC</span>
            <span>SHUTTER: 1/2000s</span>
          </div>
          <span className="text-white font-syne uppercase">VIVID COLOR & STRIKING CONTRAST</span>
        </div>

        {/* High impact headline */}
        <div className="text-center my-8 overflow-hidden">
          <h2
            ref={headlineRef}
            className="text-5xl sm:text-7xl lg:text-9xl font-black font-syne tracking-tighter uppercase leading-none select-none"
          >
            <span className="block text-white">MOTION</span>
            <span className="block text-stroke-white text-transparent mt-[-0.15em]">
              + STILLS
            </span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Left Column: Vivid Image Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-zinc-800 group">
              <Image
                src="/images/kyoto.jpg"
                alt="Kyoto Photography"
                fill
                className="object-cover object-center cinematic-image opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 rounded-full border border-zinc-700 text-xs font-mono text-zinc-300 flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                <span>KYOTO SANCTUARY // RAW CAPTURE</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] font-syne tracking-widest text-zinc-300 uppercase">FRAME #0492</span>
                  <h3 className="text-2xl font-bold font-cinzel text-white uppercase">
                    SILENT ARASHIYAMA BAMBOO
                  </h3>
                </div>
                <div className="px-3.5 py-1 bg-white text-black font-syne font-bold text-xs rounded-full">
                  35MM CINEMA
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Thumbnails */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Disc className="w-4 h-4 text-white" />
              <span>VISUAL STORYTELLING</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white uppercase leading-tight">
              ETERNAL TRAVEL <br />
              <span className="text-stroke-white text-transparent">MOMENTS</span>
            </h3>

            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Travel should feel like stepping into a living film. 
              From Positano coastal cliffs to snow-covered Swiss peaks, every destination is framed to capture light, shadow, and vivid color against dark architecture.
            </p>

            {/* Thumbnail Row with Full Color */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 group">
                <Image
                  src="/images/swiss.jpg"
                  alt="Swiss Alps"
                  fill
                  className="object-cover cinematic-image group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded text-[10px] font-mono text-zinc-200">
                  SWISS ALPS
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 group">
                <Image
                  src="/images/iceland.jpg"
                  alt="Icelandic Fjords"
                  fill
                  className="object-cover cinematic-image group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded text-[10px] font-mono text-zinc-200">
                  REYKJAVIK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

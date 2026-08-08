"use client";

import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-zinc-900 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="w-full">
        {/* Marquee Banner */}
        <div className="overflow-hidden border-b border-zinc-900 pb-12 mb-12">
          <div className="flex whitespace-nowrap gap-12 font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-stroke-dim tracking-tighter uppercase select-none opacity-40 hover:opacity-100 transition-opacity duration-500">
            <span>VOYAGE MONOCHROME</span>
            <span>//</span>
            <span>CINEMATOGRAPHY</span>
            <span>//</span>
            <span>GRAND EXPEDITIONS</span>
          </div>
        </div>

        {/* Global Timezones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 mb-12 text-xs font-mono text-zinc-400">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">PARIS (HQ)</span>
            <span className="text-sm font-bold text-white">CET UTC+1</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">LONDON</span>
            <span className="text-sm font-bold text-white">GMT UTC+0</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">TOKYO</span>
            <span className="text-sm font-bold text-white">JST UTC+9</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">NEW YORK</span>
            <span className="text-sm font-bold text-white">EST UTC-5</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">DUBAI</span>
            <span className="text-sm font-bold text-white">GST UTC+4</span>
          </div>
        </div>

        {/* Footer Links & Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-2xl font-black tracking-wider text-white">
                VOYAGE<span className="text-zinc-500 ml-1.5 font-light">MONOCHROME</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-md">
              Cinematographic travel and expedition curation. Black and white architectural tone-on-tone theme paired with full vivid color travel imagery.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs font-syne tracking-wider text-zinc-400">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">NAVIGATION</span>
              <a href="#expeditions" className="hover:text-white transition-colors">EXPEDITIONS</a>
              <a href="#motion-stills" className="hover:text-white transition-colors">STORYTELLING</a>
              <a href="#itinerary" className="hover:text-white transition-colors">PLANNER</a>
              <a href="#packages" className="hover:text-white transition-colors">PACKAGES</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">PRIVACY & TERMS</span>
              <a href="#" className="hover:text-white transition-colors">CHARTER TERMS</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">MEDIA LICENSING</a>
              <a href="#" className="hover:text-white transition-colors">CONCIERGE DESK</a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-white font-bold font-syne text-xs uppercase tracking-widest">
              CONFIDENTIAL DISPATCH BULLETIN
            </span>
            <p className="text-xs text-zinc-400 font-light">
              Subscribe for confidential announcements regarding newly unlocked private European charters.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-4 py-3 text-xs font-syne text-white focus:outline-none focus:border-white transition-colors"
              />
              <button className="px-6 py-3 bg-white text-black font-syne font-bold text-xs uppercase rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <span>© 2026 VOYAGE MONOCHROME INC. ALL RIGHTS RESERVED.</span>
          <span className="uppercase font-syne text-[10px]">CRAFTED WITH HIGH CINEMATOGRAPHY & GSAP + THREE.JS</span>
        </div>
      </div>
    </footer>
  );
}

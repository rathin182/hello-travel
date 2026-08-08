"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Compass, Film, Disc } from "lucide-react";

const DESTINATIONS = [
  { title: "AMALFI COAST", coords: "ITALY // 40.6340° N", year: "2026 EDITION" },
  { title: "SWISS ALPS", coords: "SWITZERLAND // 45.9765° N", year: "VINTAGE EXPEDITIONS" },
  { title: "KYOTO SANCTUARY", coords: "JAPAN // 35.6762° N", year: "HERITAGE JOURNEY" },
  { title: "REYKJAVIK FJORDS", coords: "ICELAND // 64.1466° N", year: "OBSIDIAN VOYAGES" },
  { title: "MONTE CARLO", coords: "MONACO // 43.7384° N", year: "RIVIERA CHARTER" },
];

export default function Preloader({ onLoaded }: { onLoaded: () => void }) {
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= DESTINATIONS.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onLoaded, 800);
          }, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] text-white p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Camera Bar */}
          <div className="flex items-center justify-between text-xs font-syne tracking-widest text-zinc-400 border-b border-zinc-800/80 pb-4">
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-white animate-pulse" />
              <span>VOYAGE MONOCHROME // CINEMATOGRAPHY</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Disc className="w-4 h-4 animate-spin-slow" />
              <span>FRAME [ 35MM ]</span>
            </div>
          </div>

          {/* Center Cinematic Destination Roll */}
          <div className="relative flex flex-col items-center justify-center my-auto text-center">
            {/* Viewfinder Frame Crosshair */}
            <div className="absolute w-72 h-40 sm:w-96 sm:h-52 border border-dashed border-zinc-800/80 rounded-2xl flex items-center justify-center pointer-events-none">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#050505] px-3 text-[10px] font-mono text-zinc-500">
                [ APERTURE ƒ/1.4 ]
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#050505] px-3 text-[10px] font-mono text-zinc-500">
                [ RAW MONOCHROME + VIVID COLOR ]
              </div>
            </div>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -15 }}
              transition={{ duration: 0.3 }}
              className="z-10 flex flex-col items-center gap-3"
            >
              <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
                {DESTINATIONS[index].year}
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-cinzel text-white tracking-widest uppercase">
                {DESTINATIONS[index].title}
              </h2>
              <span className="text-xs font-mono text-zinc-500 tracking-wider">
                {DESTINATIONS[index].coords}
              </span>
            </motion.div>
          </div>

          {/* Bottom Film Strip Indicator */}
          <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between text-xs font-syne text-zinc-400">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-white" />
              <span>EXPLORING GLOBAL DESTINATIONS</span>
            </div>

            <div className="flex gap-2">
              {DESTINATIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-2 bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            <span className="hidden sm:inline font-mono">0{index + 1} / 05</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

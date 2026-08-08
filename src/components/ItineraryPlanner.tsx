"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Compass, Bike, Plane, Ship, Train, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface ItineraryPlannerProps {
  onOpenBooking: () => void;
}

const MODES = [
  {
    id: "motorcycle",
    name: "VINTAGE MOTORCYCLE EXPEDITION",
    icon: Bike,
    image: "/images/motorcycle.jpg",
    desc: "Traverse winding alpine roads and coastal cliffs on vintage adventure motorcycles with full luggage concierge.",
    price: "€18,000",
    days: "8 DAYS // 7 NIGHTS",
    perks: ["BMW Scrambler Motorcycle", "Chase Support Truck", "Luggage Concierge", "Private Alpine Lodges"],
  },
  {
    id: "private-jet",
    name: "ULTRA PRIVATE JET CHARTER",
    icon: Plane,
    image: "/images/hero.jpg",
    desc: "Seamless point-to-point European transfers aboard Gulfstream jet with zero airport delays.",
    price: "€32,500",
    days: "5 DAYS // 4 NIGHTS",
    perks: ["Gulfstream G650 Jet", "Chauffeur Pickups", "Michelin Onboard Dining", "VIP Fast-track Access"],
  },
  {
    id: "coastal-yacht",
    name: "COASTAL YACHT VOYAGE",
    icon: Ship,
    image: "/images/amalfi.jpg",
    desc: "Private 120ft luxury motor yacht cruising along Positano cliffs, Capri, and Mediterranean coves.",
    price: "€24,000",
    days: "7 DAYS // 6 NIGHTS",
    perks: ["120ft Motor Yacht", "Full Crew & Personal Chef", "Helipad & Water Toys", "Capri Private Anchorage"],
  },
  {
    id: "alpine-train",
    name: "GLACIER ALPINE EXPRESS",
    icon: Train,
    image: "/images/swiss.jpg",
    desc: "Exclusive private panoramic dome train carriage winding through Swiss mountain passes and snow valleys.",
    price: "€14,500",
    days: "6 DAYS // 5 NIGHTS",
    perks: ["Private Glass Dome Carriage", "Zermatt Luxury Chalet", "Sommelier Wine Tasting", "Glacier Helicopter Tour"],
  },
];

export default function ItineraryPlanner({ onOpenBooking }: ItineraryPlannerProps) {
  const [activeModeId, setActiveModeId] = useState("motorcycle");
  const [voyagersCount, setVoyagersCount] = useState(2);

  const activeMode = MODES.find((m) => m.id === activeModeId) || MODES[0];

  return (
    <section
      id="itinerary"
      className="relative py-28 bg-[#050505] border-b border-zinc-900 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>INTERACTIVE VOYAGE BUILDER</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-cinzel text-white uppercase tracking-tight mb-4">
            LET’S CREATE YOUR <br />
            <span className="text-stroke-white text-transparent">MEMORABLE JOURNEY</span>
          </h2>
          <p className="text-sm text-zinc-300 font-light">
            Select your preferred mode of transit, destination preferences, and passenger headcount to generate a bespoke expedition.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = mode.id === activeModeId;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveModeId(mode.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-syne font-bold tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                    : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Full Width Planner Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-12 rounded-3xl border border-zinc-800">
          {/* Left Column: Rich Color Image */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeMode.image}
                  alt={activeMode.name}
                  fill
                  className="object-cover object-center cinematic-image opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 rounded-full border border-zinc-800 text-xs font-mono text-zinc-200">
              [ {activeMode.days} ]
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block">ESTIMATED PRICE</span>
                <span className="text-3xl font-extrabold font-cinzel text-white">{activeMode.price}</span>
              </div>
              <span className="text-xs font-mono text-zinc-300 bg-zinc-900/90 px-3.5 py-1.5 rounded-full border border-zinc-800">
                ALL-INCLUSIVE
              </span>
            </div>
          </div>

          {/* Right Column: Specifications & CTA */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span>EXPEDITION MODE // SELECTED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-cinzel text-white uppercase mb-3">
                {activeMode.name}
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {activeMode.desc}
              </p>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 py-4 border-t border-b border-zinc-800/80">
              <span className="text-xs font-syne tracking-widest text-zinc-400 uppercase block">INCLUDED PRIVILEGES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeMode.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counter & Season */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                  PASSENGERS
                </label>
                <div className="flex items-center gap-3 bg-zinc-900/90 p-2 rounded-xl border border-zinc-800 justify-between">
                  <button
                    onClick={() => setVoyagersCount(Math.max(1, voyagersCount - 1))}
                    className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center font-bold hover:bg-zinc-700"
                  >
                    -
                  </button>
                  <span className="text-xs font-mono font-bold text-white">{voyagersCount} VOYAGERS</span>
                  <button
                    onClick={() => setVoyagersCount(voyagersCount + 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center font-bold hover:bg-zinc-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                  PREFERRED SEASON
                </label>
                <select className="w-full bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 text-xs font-syne text-white focus:outline-none cursor-pointer">
                  <option value="autumn">AUTUMN 2026</option>
                  <option value="winter">WINTER 2026/27</option>
                  <option value="spring">SPRING 2027</option>
                </select>
              </div>
            </div>

            {/* Confirm CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-syne font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.2)] mt-2"
            >
              <span>CONFIRM ITINERARY PREFERENCE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

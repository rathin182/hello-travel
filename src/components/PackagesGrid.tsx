"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, ArrowUpRight, Search } from "lucide-react";

interface PackagesGridProps {
  onOpenBooking: () => void;
}

const CATEGORIES = [
  { id: "all", name: "ALL EXPEDITIONS" },
  { id: "honeymoon", name: "HONEYMOON & ROMANCE" },
  { id: "architectural", name: "ARCHITECTURAL TOURS" },
  { id: "coastal", name: "COASTAL YACHTING" },
  { id: "alpine", name: "ALPINE EXPEDITIONS" },
];

const PACKAGES = [
  {
    id: 1,
    category: "architectural",
    title: "FRAMING MONUMENTS & HERITAGE IN JAIPUR",
    location: "JAIPUR, INDIA",
    coords: "26.9124° N, 75.7873° E",
    days: "3 DAYS // 2 NIGHTS",
    price: "€19,400",
    rating: "4.9",
    image: "/images/amalfi.jpg",
    tag: "HERITAGE",
  },
  {
    id: 2,
    category: "coastal",
    title: "AMALFI COASTAL CLIFF & SPEEDBOAT EXPEDITION",
    location: "POSITANO, ITALY",
    coords: "40.6281° N, 14.4850° E",
    days: "7 DAYS // 6 NIGHTS",
    price: "€24,800",
    rating: "5.0",
    image: "/images/amalfi.jpg",
    tag: "LUXURY YACHT",
  },
  {
    id: 3,
    category: "alpine",
    title: "MATTERHORN GLACIER & ALPINE PRIVILEGE",
    location: "ZERMATT, SWITZERLAND",
    coords: "45.9765° N, 7.7491° E",
    days: "5 DAYS // 4 NIGHTS",
    price: "€18,200",
    rating: "4.95",
    image: "/images/swiss.jpg",
    tag: "SNOW BOUND",
  },
  {
    id: 4,
    category: "honeymoon",
    title: "ZEN BAMBOO & SILENT SANCTUARIES IN KYOTO",
    location: "KYOTO, JAPAN",
    coords: "35.6762° N, 135.7722° E",
    days: "8 DAYS // 7 NIGHTS",
    price: "€22,500",
    rating: "4.98",
    image: "/images/kyoto.jpg",
    tag: "ZEN HAVEN",
  },
  {
    id: 5,
    category: "coastal",
    title: "ICELANDIC OBSIDIAN BLACK SAND VOYAGE",
    location: "VIK, ICELAND",
    coords: "63.4194° N, 19.0060° W",
    days: "6 DAYS // 5 NIGHTS",
    price: "€16,900",
    rating: "4.92",
    image: "/images/iceland.jpg",
    tag: "VOLCANIC",
  },
  {
    id: 6,
    category: "honeymoon",
    title: "VINTAGE MOTORCYCLE RIVIERA TOUR",
    location: "MONTE CARLO, MONACO",
    coords: "43.7384° N, 7.4246° E",
    days: "4 DAYS // 3 NIGHTS",
    price: "€21,000",
    rating: "5.0",
    image: "/images/motorcycle.jpg",
    tag: "RIVIERA",
  },
];

export default function PackagesGrid({ onOpenBooking }: PackagesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = PACKAGES.filter((pkg) => {
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="packages" className="py-28 bg-[#050505] border-b border-zinc-900 px-6 sm:px-12 lg:px-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase block mb-2">
              [ CURATED ARCHIVE // 2026 CATALOG ]
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-cinzel text-white uppercase tracking-tight">
              CURATED VOYAGE <span className="text-stroke-white text-transparent">PACKAGES</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-full pl-11 pr-4 py-3 text-xs font-syne text-white focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-zinc-800/80 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-syne font-semibold tracking-wider uppercase transition-all ${
                selectedCategory === cat.id
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-500"
              >
                {/* Image Header with Full Color */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover cinematic-image opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 bg-black/80 rounded-full border border-zinc-800 text-[10px] font-syne font-bold tracking-widest text-white uppercase">
                      {pkg.tag}
                    </span>
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/80 rounded-full border border-zinc-800 text-xs font-mono text-zinc-200">
                      <Star className="w-3.5 h-3.5 text-white fill-white" />
                      <span>{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 text-[10px] font-mono text-zinc-300 z-10">
                    {pkg.coords}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-syne text-zinc-300 uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      <span>{pkg.location}</span>
                    </div>

                    <h3 className="text-xl font-bold font-cinzel text-white uppercase mb-3 leading-snug group-hover:text-zinc-200 transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-syne text-zinc-400 uppercase block">DURATION</span>
                      <span className="text-xs font-mono text-zinc-200 font-bold">{pkg.days}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-syne text-zinc-400 uppercase block">PRICE FROM</span>
                      <span className="text-lg font-extrabold font-cinzel text-white">{pkg.price}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={onOpenBooking}
                    className="mt-6 w-full py-3.5 bg-zinc-900 hover:bg-white hover:text-black text-white font-syne font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-800 hover:border-white"
                  >
                    <span>KNOW MORE / BOOK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

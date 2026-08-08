"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "ALEXANDER VON BERG",
    role: "Architectural Photographer, Munich",
    destination: "AMALFI COAST PRIVATE YACHT",
    quote:
      "The precision of the itinerary and cinematographic presentation across our private Amalfi yacht voyage was astonishing. It felt like living inside a 35mm motion picture.",
    image: "/images/motorcycle.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "ELENA ROSTOVA",
    role: "Creative Director, Milan",
    destination: "KYOTO ZEN SANCTUARY",
    quote:
      "From private helicopter transfers to silent bamboo groves at dawn, Voyage Monochrome treats luxury travel as a fine art form. Absolute perfection.",
    image: "/images/kyoto.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "JULIEN DUBOIS",
    role: "Cinematographer, Paris",
    destination: "SWISS ALPS GLACIER CHARTER",
    quote:
      "The private panoramic train carriage and alpine lodge stay exceeded every expectation. An epic vintage European vibe combined with modern concierge speed.",
    image: "/images/swiss.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-28 bg-[#050505] border-b border-zinc-900 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
            [ VOYAGER REVIEWS & CRITIQUES ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-cinzel text-white uppercase tracking-tight">
            WHAT OTHER <span className="text-stroke-white text-transparent">VOYAGERS SAY</span>
          </h2>
        </div>

        {/* Carousel Panel */}
        <div className="glass-panel p-6 sm:p-14 rounded-3xl border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover cinematic-image opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-[10px] font-syne text-zinc-300 tracking-widest uppercase block">
                {t.destination}
              </span>
              <h4 className="text-xl font-bold font-cinzel text-white uppercase">
                {t.name}
              </h4>
            </div>
          </div>

          {/* Quote Content */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-4">
            <div>
              <Quote className="w-12 h-12 text-white/40 mb-6" />

              <p className="text-xl sm:text-2xl font-cinzel text-zinc-100 font-light leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold font-syne text-white uppercase">{t.name}</h4>
                <p className="text-xs font-mono text-zinc-400">{t.role}</p>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-8 border-t border-zinc-800/80 mt-8">
              <span className="text-xs font-mono text-zinc-400">
                VOYAGER {index + 1} OF {TESTIMONIALS.length}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-white transition-colors border border-zinc-800"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-white transition-colors border border-zinc-800"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

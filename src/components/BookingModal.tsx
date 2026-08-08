"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, MapPin, Mail, User, Phone, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Amalfi Coast, Italy",
    passengers: "2 Voyagers",
    date: "2026-10-15",
    transit: "Private Jet Charter",
    specialNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-xl bg-[#09090b] border-l border-zinc-800 text-white p-8 md:p-12 overflow-y-auto h-full z-10 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-8">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase block">
                    [ CONCIERGE DESK // PRIVATE RESERVATION ]
                  </span>
                  <h3 className="text-2xl font-black font-cinzel text-white uppercase mt-1">
                    RESERVE YOUR EXPEDITION
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Destination */}
                  <div>
                    <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                      SELECT DESTINATION
                    </label>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <MapPin className="w-4 h-4 text-zinc-400" />
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-transparent text-xs font-syne text-white focus:outline-none cursor-pointer"
                      >
                        <option value="Amalfi Coast, Italy" className="bg-zinc-900">Amalfi Coast, Italy (€12,400)</option>
                        <option value="Swiss Alps, Zermatt" className="bg-zinc-900">Swiss Alps, Zermatt (€14,800)</option>
                        <option value="Kyoto Sanctuary, Japan" className="bg-zinc-900">Kyoto Sanctuary, Japan (€16,200)</option>
                        <option value="Reykjavik Fjords, Iceland" className="bg-zinc-900">Reykjavik Fjords, Iceland (€11,900)</option>
                        <option value="Monte Carlo, Monaco" className="bg-zinc-900">Monte Carlo, Monaco (€18,500)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Passengers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                        PREFERRED DEPARTURE
                      </label>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <Calendar className="w-4 h-4 text-zinc-400" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-transparent text-xs font-syne text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                        PASSENGERS
                      </label>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <Users className="w-4 h-4 text-zinc-400" />
                        <select
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                          className="w-full bg-transparent text-xs font-syne text-white focus:outline-none cursor-pointer"
                        >
                          <option value="1 Voyager" className="bg-zinc-900">1 Voyager</option>
                          <option value="2 Voyagers" className="bg-zinc-900">2 Voyagers</option>
                          <option value="4 Voyagers" className="bg-zinc-900">4 Voyagers (Charter)</option>
                          <option value="6+ Voyagers" className="bg-zinc-900">6+ Voyagers (Group)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Personal Contact */}
                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    <div>
                      <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                        FULL NAME
                      </label>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <User className="w-4 h-4 text-zinc-400" />
                        <input
                          type="text"
                          required
                          placeholder="Lord / Lady Alexander..."
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent text-xs font-syne text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase block mb-2">
                        PRIVATE EMAIL ADDRESS
                      </label>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <Mail className="w-4 h-4 text-zinc-400" />
                        <input
                          type="email"
                          required
                          placeholder="alexander@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent text-xs font-syne text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-syne font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.3)] mt-6"
                  >
                    <span>TRANSMIT RESERVATION REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 flex flex-col items-center justify-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-cinzel text-white uppercase">
                    RESERVATION DISPATCHED
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Our Paris concierge team has received your request for{" "}
                    <span className="text-white font-bold">{formData.destination}</span>. A private charter manager will contact you within 2 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white font-syne font-bold text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                256-BIT ENCRYPTED
              </span>
              <span>VOYAGE MONOCHROME // 2026</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

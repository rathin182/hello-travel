"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import MotionStillsSection from "@/components/MotionStillsSection";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import Globe3DCanvas from "@/components/Globe3DCanvas";
import PackagesGrid from "@/components/PackagesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Cinematic Camera Aperture Preloader */}
      {!isLoaded && <Preloader onLoaded={() => setIsLoaded(true)} />}

      {/* Main Website Content with Smooth Lenis Scroll */}
      <SmoothScroll>
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
        <HorizontalScrollSection onOpenBooking={() => setIsBookingOpen(true)} />
        <MotionStillsSection />
        <ItineraryPlanner onOpenBooking={() => setIsBookingOpen(true)} />
        <Globe3DCanvas />
        <PackagesGrid onOpenBooking={() => setIsBookingOpen(true)} />
        <TestimonialsSection />
        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </SmoothScroll>
    </main>
  );
}

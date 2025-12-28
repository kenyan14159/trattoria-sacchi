"use client";

import Link from "next/link";
import Hero from "@/components/home/Hero";
import Concept from "@/components/home/Concept";
import Menu from "@/components/home/Menu";
import Information from "@/components/home/Information";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white text-stone-900 overflow-x-hidden">
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.4]"></div>

      <Hero />
      <Concept />
      <Menu />
      <Information />

      {/* Footer is now global */}
    </main>
  );
}

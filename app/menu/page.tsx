"use client";

import Link from "next/link";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import { MENU_DATA } from "@/components/menu/MenuData";
import MenuSection from "@/components/menu/MenuSection";
import MenuGallery from "@/components/menu/MenuGallery";

export default function MenuPage() {
    return (
        <main className="relative w-full min-h-screen bg-white text-stone-900">
            <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.4]"></div>

            {/* Header is global */}

            <div className="pt-40 px-6 md:px-12 max-w-screen-xl mx-auto pb-32">
                <h1 className="text-6xl md:text-9xl font-display text-stone-900 mb-24 opacity-90 tracking-tighter">
                    La Carta
                </h1>

                {/* Anchor Links (Desktop) */}
                <nav className="mb-24 hidden md:flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase tracking-widest text-stone-500 sticky top-0 bg-white/80 backdrop-blur-md py-4 z-30 -mx-4 px-4 border-b border-stone-100">
                    {MENU_DATA.map(cat => (
                        <a key={cat.id} href={`#${cat.id}`} className="hover:text-primary-red transition-colors">
                            {cat.title}
                        </a>
                    ))}
                </nav>

                {/* Menu Sections using the constant data */}
                <div className="space-y-12">
                    {MENU_DATA.map((category) => (
                        <MenuSection key={category.id} category={category} />
                    ))}
                </div>

                <MenuGallery />

            </div>
        </main>
    );
}

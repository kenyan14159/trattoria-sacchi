"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageModal from "@/components/ui/ImageModal";

const MENU_ITEMS = [
    {
        id: 1,
        name: "サッチプレートランチ",
        description: "日替わりパスタ＆チキンのフリット",
    },
    {
        id: 2,
        name: "ペペロンチーノ",
        description: "パスタ - ディナー",
    },
    {
        id: 3,
        name: "氷見牛サーロインステーキ",
        description: "Main Dish (200g)",
    },
    {
        id: 4,
        name: "本日のドルチェ",
        description: "Dolce & Gelato",
    },
];

const MENU_GALLERY_IMAGES = [
    "/menu-gallery-1.jpg",
    "/menu-gallery-2.jpg",
    "/menu-gallery-3.jpg",
    "/menu-gallery-4.jpg",
    "/menu-gallery-5.jpg",
    "/menu-gallery-6.jpg",
    "/menu-gallery-7.jpg",
];

const INTERIOR_IMAGES = [
    "/interior-1.jpg",
    "/interior-2.jpg",
    "/interior-3.jpg",
];

export default function Menu() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="relative w-full bg-white flex flex-col overflow-hidden py-24">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 bg-white transition-colors duration-700 pointer-events-none">
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-10 transition-all duration-700",
                    hoveredId ? "from-primary-green/20 via-transparent to-white" : "from-transparent via-transparent to-white"
                )} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(225,29,72,0.03),transparent_70%)]" />
            </div>

            {/* Menu List Section */}
            <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                {/* Left Side: Title */}
                <div className="hidden md:block">
                    <h2 className="text-6xl lg:text-8xl font-display text-stone-900 tracking-tighter opacity-90">
                        The <br /> Craft <br /> <span className="text-primary-red italic">Table</span>
                    </h2>
                </div>

                {/* Right Side: Menu Items */}
                <ul className="flex flex-col gap-6 md:gap-10">
                    <h3 className="md:hidden text-primary-green text-sm tracking-widest uppercase mb-4">職人の食卓</h3>
                    {MENU_ITEMS.map((item) => (
                        <li
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group cursor-pointer border-b border-stone-200 pb-4 md:pb-6 transition-all duration-500 hover:border-primary-red/50 hover:pl-4"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4">
                                <span className={cn(
                                    "text-2xl md:text-3xl lg:text-4xl font-display text-stone-400 transition-all duration-500",
                                    hoveredId === item.id ? "text-stone-900 translate-x-2" : "group-hover:text-stone-600"
                                )}>
                                    {item.name}
                                </span>
                                <span className="text-stone-500 font-body text-sm md:text-base italic transition-colors duration-300 group-hover:text-primary-red">
                                    {item.description}
                                </span>
                            </div>
                        </li>
                    ))}
                    <div className="mt-8">
                        <Link
                            href="/menu"
                            className="inline-block border border-primary-red px-8 py-3 text-primary-red text-sm tracking-widest uppercase hover:bg-primary-red hover:text-white transition-colors"
                        >
                            View Full Menu
                        </Link>
                    </div>
                </ul>
            </div>

            {/* Gallery Section */}
            <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 md:px-12 space-y-24">

                {/* Menu Gallery */}
                <div>
                    <h3 className="text-center font-display text-3xl text-stone-900 mb-8"><span className="text-primary-red italic">Menu</span> Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {MENU_GALLERY_IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className="aspect-square relative overflow-hidden rounded-sm cursor-pointer group bg-stone-100"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt="Menu Gallery"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 15vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interior Gallery */}
                <div>
                    <h3 className="text-center font-display text-3xl text-stone-900 mb-8"><span className="text-primary-green italic">Atmosphere</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {INTERIOR_IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className="aspect-video relative overflow-hidden rounded-sm cursor-pointer group bg-stone-100 shadow-md"
                                onClick={() => {
                                    setSelectedImage(src);
                                    // Set index logic if we were tracking separate state, 
                                    // but here we just need to pass the array and find the index.
                                }}
                            >
                                <Image
                                    src={src}
                                    alt="Interior"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ImageModal
                images={selectedImage && MENU_GALLERY_IMAGES.includes(selectedImage) ? MENU_GALLERY_IMAGES : INTERIOR_IMAGES}
                initialIndex={
                    selectedImage
                        ? (MENU_GALLERY_IMAGES.includes(selectedImage)
                            ? MENU_GALLERY_IMAGES.indexOf(selectedImage)
                            : INTERIOR_IMAGES.indexOf(selectedImage))
                        : 0
                }
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
            />

        </section>
    );
}

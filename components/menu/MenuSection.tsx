"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuCategory } from "./MenuData";
import ImageModal from "@/components/ui/ImageModal";

export default function MenuSection({ category }: { category: MenuCategory }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <div ref={sectionRef} id={category.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 border-b border-stone-100 last:border-0">

            {/* Category Header (Sticky on Desktop) */}
            <div className="md:col-span-4 relative">
                <div className="md:sticky md:top-32">
                    {/* Category Image */}
                    <div
                        className="w-full aspect-video rounded-sm overflow-hidden mb-6 relative shadow-md group cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                        </div>
                    </div>

                    <h3 className="text-3xl font-display text-stone-900 mb-2 tracking-wide">{category.title}</h3>
                    <p className="text-primary-green text-sm tracking-widest uppercase mb-4">{category.description}</p>
                    {category.note && (
                        <p className="text-stone-500 text-xs leading-relaxed border-l border-primary-green/30 pl-3">
                            {category.note}
                        </p>
                    )}
                </div>
            </div>

            {/* Items List */}
            <div className="md:col-span-8 grid grid-cols-1 gap-8">
                {category.items.map((item, idx) => (
                    <div key={idx} className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-4 border-b border-dashed border-stone-200 hover:border-primary-red/30 transition-colors">
                        <div className="flex-1">
                            <h4 className="text-xl font-display text-stone-700 group-hover:text-primary-red transition-colors duration-300">
                                {item.name}
                            </h4>
                            {(item.description || item.tags) && (
                                <div className="mt-1 flex flex-wrap gap-2 items-center">
                                    {item.tags?.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase bg-primary-red/10 text-primary-red px-1.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                    {item.description && (
                                        <p className="text-sm text-stone-500 italic font-body">{item.description}</p>
                                    )}
                                </div>
                            )}
                        </div>
                        {item.price && (
                            <span className="text-primary-red font-body tracking-wider text-lg whitespace-nowrap">
                                {item.price}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <ImageModal
                images={[category.image]}
                initialIndex={0}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

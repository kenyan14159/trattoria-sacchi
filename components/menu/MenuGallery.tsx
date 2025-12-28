"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageModal from "@/components/ui/ImageModal";

const GALLERY_IMAGES = [
    "/menu-gallery-1.jpg",
    "/menu-gallery-2.jpg",
    "/menu-gallery-3.jpg",
    "/menu-gallery-4.jpg",
    "/menu-gallery-5.jpg",
    "/menu-gallery-6.jpg",
    "/menu-gallery-7.jpg",
    "/garlic-shrimp-plate.jpg",
];

export default function MenuGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const images = containerRef.current?.querySelectorAll(".gallery-item");
        if (!images) return;

        gsap.fromTo(images,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto border-t border-stone-100">
            <h3 className="text-stone-900 font-display text-4xl text-center mb-16 tracking-tight">
                <span className="text-primary-red italic">Gallery</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {GALLERY_IMAGES.map((src, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "gallery-item relative overflow-hidden rounded-sm bg-stone-100 shadow-sm aspect-square group cursor-pointer",
                        )}
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    </div>
                ))}
            </div>

            <ImageModal
                images={GALLERY_IMAGES}
                initialIndex={GALLERY_IMAGES.indexOf(selectedImage || "") !== -1 ? GALLERY_IMAGES.indexOf(selectedImage || "") : 0}
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
}

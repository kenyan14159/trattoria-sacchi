"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const IMAGES = [
        "/main.jpg",
        "/main2.jpg",
        "/main3.jpg",
        "/main4.jpg",
        "/main5.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current?.children || [],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-stone-900 flex items-center justify-center"
        >
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                {IMAGES.map((src, index) => (
                    <div
                        key={src}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={src}
                            alt="Hero Image"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Overlay Gradients for Readability */}
                <div className="absolute inset-0 bg-white/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-red/5 to-transparent" />
            </div>

            <div ref={textRef} className="relative z-10 text-center">
                <h2 className="text-xl md:text-2xl font-body tracking-[0.2em] text-primary-green uppercase mb-4">
                    美食の大地
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-stone-900 tracking-tighter">
                    Trattoria <br />
                    <span className="italic font-light text-primary-red">Sacchi</span>
                </h1>
                <p className="mt-6 text-stone-600 font-body tracking-widest text-sm md:text-base">
                    五感で味わう、食卓への物語
                </p>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-stone-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent" />
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageModal from "@/components/ui/ImageModal";

export default function Concept() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const text = textRef.current;
        if (!text) return;

        gsap.fromTo(
            text,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 px-6 md:px-12 w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div
                    className="h-[400px] md:h-[600px] w-full bg-stone-100 rounded-sm overflow-hidden relative group cursor-pointer shadow-md"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image
                        src="/main2.jpg"
                        alt="Trattoria Sacchi Interior"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-primary-red text-xs tracking-widest uppercase font-display">
                            View Fullscreen
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-primary-green text-sm tracking-widest uppercase mb-8">Concept</h3>
                    <h2 className="text-3xl md:text-5xl font-display leading-tight text-stone-900 mb-6">
                        大地から、<br />
                        <span className="text-primary-red italic">食卓</span>への物語。
                    </h2>
                    <div ref={textRef} className="text-stone-600 leading-relaxed font-body space-y-6">
                        <p>
                            レストラン隣の「サッチ農園」から毎朝収穫される、新鮮な有機野菜。<br />
                            土の香り、朝露の輝き、そして太陽の恵みをそのまま皿の上へ。
                        </p>
                        <p>
                            お気軽ランチから特別なディナーまで。<br />
                            テラス席では愛犬と共に。<br />
                            小さなお子様からご年配の方まで、すべてのお客様に「幸せ（サッチ）」な時間をお届けします。
                        </p>
                        <p className="text-sm border-l border-primary-red/30 pl-4 mt-8 italic text-stone-500">
                            店舗向かい『サッチマルシェ』にて、自家野菜を使ったテイクアウトグルメも販売中。
                        </p>
                    </div>
                </div>
            </div>

            <ImageModal
                images={["/main2.jpg"]}
                initialIndex={0}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}

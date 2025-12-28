"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

type FAQAccordionProps = {
    question: string;
    answer: string;
};

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.to(contentRef.current, { height: "auto", duration: 0.5, ease: "power2.out" });
                gsap.to(contentRef.current, { opacity: 1, duration: 0.5, delay: 0.1 });
            } else {
                gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: "power2.in" });
                gsap.to(contentRef.current, { opacity: 0, duration: 0.3 });
            }
        }
    }, [isOpen]);

    return (
        <div className="border-b border-stone-100 last:border-0">
            <button
                ref={triggerRef}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={cn(
                    "text-lg font-body transition-colors duration-300",
                    isOpen ? "text-primary-red" : "text-stone-700 group-hover:text-primary-red/80"
                )}>
                    {question}
                </span>
                <span className="relative flex items-center justify-center w-6 h-6">
                    <span className={cn("absolute w-full h-[1px] bg-primary-red transition-transform duration-300", isOpen && "bg-opacity-0")} />
                    <span className={cn("absolute w-full h-[1px] bg-primary-red rotate-90 transition-transform duration-300", isOpen ? "rotate-0" : "rotate-90")} />
                    {/* Custom plus/minus icon animation */}
                    <span className={cn(
                        "absolute w-4 h-[1px] bg-primary-red transition-all duration-300",
                        isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-100"
                    )}
                        style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)', opacity: isOpen ? 0 : 1 }}
                    />
                    <span className={cn(
                        "absolute w-4 h-[1px] bg-primary-red transition-all duration-300",
                    )}
                    />
                </span>
            </button>
            <div
                ref={contentRef}
                className="h-0 overflow-hidden opacity-0"
            >
                <div className="pb-8 text-stone-600 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                    {answer}
                </div>
            </div>
        </div>
    );
}

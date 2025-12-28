"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center",
                    scrolled || mobileMenuOpen
                        ? "bg-white/90 backdrop-blur-md border-b border-stone-100 py-4 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/sacchi.png"
                        alt="Trattoria Sacchi"
                        width={140}
                        height={50}
                        className="object-contain w-auto h-12 md:h-14"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-xs font-body tracking-widest text-stone-600 font-medium">
                    <Link href="/menu" className="hover:text-primary-red transition-colors">MENU</Link>
                    <Link href="/reservation" className="hover:text-primary-red transition-colors">RESERVATION</Link>
                    <Link href="/faq" className="hover:text-primary-red transition-colors">Q&A</Link>

                    <div className="w-[1px] h-4 bg-stone-300 mx-2" />

                    <a href="https://www.instagram.com/trattoria_sacchi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="https://tabelog.com/toyama/A1601/A160101/16008732/dtlrvwlst/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors flex items-center gap-1">
                        <span className="sr-only">Tabelog</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-stone-800 z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">Menu</span>
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500",
                    mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <nav className="flex flex-col items-center gap-8 text-xl font-display tracking-widest text-stone-800">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-red transition-colors">HOME</Link>
                    <Link href="/menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-red transition-colors">MENU</Link>
                    <Link href="/reservation" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-red transition-colors">RESERVATION</Link>
                    <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-red transition-colors">Q&A</Link>
                </nav>

                < div className="flex items-center gap-8 mt-4 text-stone-400">
                    <a href="https://www.instagram.com/trattoria_sacchi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="https://tabelog.com/toyama/A1601/A160101/16008732/dtlrvwlst/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>
                    </a>
                </div>
            </div>
        </>
    );
}

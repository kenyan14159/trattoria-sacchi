"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white text-stone-600 py-24 border-t border-stone-100">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <Link href="/" className="block hover:opacity-80 transition-opacity">
                        <Image
                            src="/sacchi.png"
                            alt="Trattoria Sacchi"
                            width={160}
                            height={60}
                            className="object-contain w-auto h-16 mx-auto md:mx-0"
                        />
                    </Link>
                    <p className="mt-4 text-xs tracking-widest uppercase text-stone-500">
                        Happiness through Food
                    </p>

                    <div className="flex justify-center md:justify-start gap-6 mt-8">
                        <a href="https://www.instagram.com/trattoria_sacchi/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary-red transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary-red transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a href="https://tabelog.com/toyama/A1601/A160101/16008732/dtlrvwlst/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary-red transition-colors">
                            <span className="sr-only">Tabelog</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm text-center md:text-left font-body tracking-wider">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="hover:text-primary-red transition-colors">Home</Link>
                        <Link href="/menu" className="hover:text-primary-red transition-colors">Menu</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="/reservation" className="hover:text-primary-red transition-colors">Reservation</Link>
                        <Link href="/faq" className="hover:text-primary-red transition-colors">Q&A</Link>
                    </div>
                    <div className="flex flex-col gap-4 text-stone-500">
                        <p>076-461-5277</p>
                        <p>富山県富山市二俣446-1</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-20 pt-8 border-t border-stone-100 max-w-screen-xl mx-auto px-6 md:px-12">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                    © Trattoria Sacchi. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

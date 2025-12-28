"use client";

import Link from "next/link";
import { FAQ_DATA } from "@/components/faq/FAQData";
import FAQAccordion from "@/components/faq/FAQAccordion";

export default function FAQPage() {
    return (
        <main className="relative w-full min-h-screen bg-white text-stone-900">
            <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.4]"></div>

            {/* Header is global */}

            <div className="pt-40 px-6 md:px-12 max-w-2xl mx-auto pb-32 relative z-10">
                <h1 className="text-5xl md:text-7xl font-display text-stone-900 mb-4 tracking-tighter">
                    Q&A
                </h1>
                <p className="text-stone-500 mb-20 tracking-wider text-sm uppercase">Frequently Asked Questions</p>

                <div className="space-y-24">
                    {FAQ_DATA.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-xl font-display text-primary-green mb-8 border-l-2 border-primary-green pl-4">
                                {category.title}
                            </h2>
                            <div>
                                {category.items.map((item, i) => (
                                    <FAQAccordion key={i} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Contact */}
                <div className="mt-32 text-center border-t border-stone-100 pt-16">
                    <p className="text-stone-600 mb-6 font-body">
                        その他のご質問は、お電話にてお気軽にお問い合わせください。
                    </p>
                    <a href="tel:0764615277" className="inline-block text-2xl font-display text-stone-900 hover:text-primary-red transition-colors">
                        076-461-5277
                    </a>
                </div>

            </div>
        </main>
    );
}

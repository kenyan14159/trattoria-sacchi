"use client";

import { cn } from "@/lib/utils";

const INFO_BLOCKS = [
    {
        title: "Hours",
        content: (
            <div className="space-y-4">
                <div>
                    <span className="block text-primary-red text-sm uppercase tracking-wider mb-1">Lunch</span>
                    <p className="text-stone-600">11:30 - 15:00 (L.O. 14:30)</p>
                </div>
                <div>
                    <span className="block text-primary-red text-sm uppercase tracking-wider mb-1">Dinner</span>
                    <p className="text-stone-600">17:30 - 23:00 (L.O. 22:00)</p>
                </div>
                <div className="pt-2 text-xs text-stone-500">
                    ※ 定休日：月曜日・第三火曜日 <br />
                    (祝日の場合は営業、翌振替休日)
                </div>
            </div>
        ),
    },
    {
        title: "Location",
        content: (
            <div className="space-y-4">
                <p className="text-stone-600">
                    〒939-8185 <br />
                    富山県富山市二俣446-1 <br />
                    <span className="text-sm text-stone-500">(富山インター近く)</span>
                </p>
                <div className="flex gap-4">
                    <a href="https://maps.google.com/?q=Trattoria+Sacchi+Toyama" target="_blank" rel="noopener noreferrer" className="text-primary-red border-b border-primary-red/50 hover:text-stone-900 hover:border-stone-900 transition-colors text-sm pb-0.5">
                        Google Maps
                    </a>
                    <span className="text-stone-500 text-sm">駐車場完備 (無料)</span>
                </div>
            </div>
        ),
    },
    {
        title: "Features",
        content: (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-stone-600">
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />テラス席ペット可</span>
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />Wi-Fi 無料</span>
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />テイクアウト</span>
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />完全禁煙</span>
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />記念日・パーティ</span>
                <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-green rounded-full" />ワイン充実</span>
            </div>
        ),
    },
    {
        title: "Payment",
        content: (
            <div className="text-sm text-stone-600 leading-relaxed">
                <p>クレジットカード (Visa, Master, JCB, Amex)</p>
                <p>PayPay, d払い, 楽天ペイ, au PAY</p>
                <p>交通系ICカード</p>
            </div>
        ),
    },
];

export default function Information() {
    return (
        <section className="py-32 px-6 md:px-12 w-full max-w-screen-xl mx-auto border-t border-stone-100">
            <h3 className="text-primary-green text-sm tracking-widest uppercase mb-16 text-center md:text-left">Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                {INFO_BLOCKS.map((block, idx) => (
                    <div key={idx} className="space-y-6">
                        <h4 className="font-display text-2xl text-stone-900 border-b border-stone-200 pb-4">{block.title}</h4>
                        <div>{block.content}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const COURSE_OPTIONS = [
    "お席のみ",
    "記念日プレート3品盛り",
    "記念日プレート4品盛り",
    "ライトコース 3,000円",
    "メモリアルコース(記念日プレート付) 3,500円",
    "ミディアムコース 4,000円",
    "フルボディコース 5,000円",
    "🎄Xmas限定(12/18-25) ライトコース 7,000円",
    "🎄Xmas限定(12/18-25) デラックスコース 11,000円",
    "🎄Xmasオードブル(2-3名) 16:00受取 6,000円",
    "🎄Xmasオードブル(2-3名) 17:00受取 6,000円",
    "🎄Xmasオードブル(4-6名) 16:00受取 10,000円",
    "🎄Xmasオードブル(4-6名) 17:00受取 10,000円",
    "飲み放題120分 2,000円",
    "カラオケ飲み放題",
    "貸切",
    "バーベキュー",
    "その他",
];

export default function ReservationForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, this would send data to an API
    };

    if (submitted) {
        return (
            <div className="bg-stone-50 border border-primary-red/30 p-12 text-center animate-fade-in text-stone-800">
                <h3 className="text-2xl font-display text-primary-red mb-4">Reservation Request Sent</h3>
                <p className="text-stone-700 mb-2">ご予約リクエストを受け付けました。</p>
                <p className="text-stone-500 text-sm">
                    ご入力いただいたメールアドレス宛に確認メールを送信します。<br />
                    (※システム連携がないため、これはデモ画面です)
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-8">
                {/* Email */}
                <div className="group">
                    <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Email Address *</label>
                    <input
                        type="email"
                        required
                        placeholder="example@email.com"
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors placeholder:text-stone-400 font-body"
                    />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Date *</label>
                        <input
                            type="date"
                            required
                            className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors font-body [color-scheme:light]"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Time *</label>
                        <input
                            type="time"
                            required
                            className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors font-body [color-scheme:light]"
                        />
                    </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Name *</label>
                        <input
                            type="text"
                            required
                            placeholder="お名前"
                            className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors placeholder:text-stone-400 font-body"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Phone Number *</label>
                        <input
                            type="tel"
                            required
                            placeholder="090-0000-0000"
                            className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors placeholder:text-stone-400 font-body"
                        />
                    </div>
                </div>

                {/* Pax */}
                <div className="group">
                    <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Number of Guests *</label>
                    <input
                        type="number"
                        min="1"
                        required
                        placeholder="人数"
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 focus:outline-none focus:border-primary-red transition-colors placeholder:text-stone-400 font-body"
                    />
                </div>

                {/* Course Selection */}
                <div className="group">
                    <label className="block text-primary-red text-xs uppercase tracking-widest mb-4 font-display">Course / Plan *</label>
                    <div className="grid grid-cols-1 gap-3">
                        <select className="w-full bg-stone-50 border border-stone-300 p-4 text-stone-800 focus:outline-none focus:border-primary-red/50 appearance-none rounded-none cursor-pointer hover:bg-stone-100 transition-colors">
                            <option value="">コースを選択してください</option>
                            {COURSE_OPTIONS.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        <p className="text-xs text-stone-500 mt-2">※Xmasオードブルの受け取り時間は、16:00 or 17:00固定となっております。</p>
                    </div>
                </div>

                {/* Message */}
                <div className="group">
                    <label className="block text-primary-red text-xs uppercase tracking-widest mb-2 font-display">Message</label>
                    <textarea
                        rows={4}
                        placeholder="記念日プレートのメッセージ、アレルギー、その他ご要望はこちらへご記入ください。"
                        className="w-full bg-transparent border border-stone-300 p-4 text-stone-800 focus:outline-none focus:border-primary-red transition-colors placeholder:text-stone-400 font-body resize-none"
                    />
                </div>
            </div>

            <div className="pt-8 text-center">
                <button
                    type="submit"
                    className="px-12 py-4 bg-primary-red text-white font-display uppercase tracking-widest text-sm hover:bg-stone-900 transition-colors duration-300"
                >
                    Confirm Reservation
                </button>
            </div>
        </form>
    );
}

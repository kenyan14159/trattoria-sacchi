"use client";

import Link from "next/link";
import ReservationForm from "@/components/reservation/ReservationForm";
import AccessMap from "@/components/reservation/AccessMap";

export default function ReservationPage() {
    return (
        <main className="relative w-full min-h-screen bg-white text-stone-900">
            <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.4]"></div>

            {/* Header is global */}

            <div className="pt-32 px-6 md:px-12 max-w-screen-xl mx-auto pb-32 relative z-10">

                {/* Page Title */}
                <div className="mb-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-display text-stone-900 mb-4 tracking-tighter">
                        Reservation & Access
                    </h1>
                    <p className="text-stone-500 tracking-wider text-sm uppercase">ご予約・アクセス</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left: Reservation Form */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="bg-stone-50 border border-stone-200 p-8 rounded-sm">
                            <h2 className="text-primary-red font-display text-xl mb-4 flex items-center gap-3">
                                <span className="w-1 h-6 bg-primary-red" />
                                Important Notice
                            </h2>
                            <ul className="space-y-2 text-stone-600 text-sm leading-relaxed list-disc list-inside marker:text-primary-red">
                                <li>24時間以内（当日）のご予約は<strong className="text-stone-900 font-bold ml-1">お電話のみ</strong>受け付けております。</li>
                                <li>Web予約フォームからの当日予約はできません。</li>
                                <li>予約完了メールが届かない場合は、迷惑メール設定をご確認ください。</li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                                <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">For Today's Reservation</p>
                                <a href="tel:0764615277" className="inline-block text-2xl font-display text-stone-900 hover:text-primary-red transition-colors">
                                    076-461-5277
                                </a>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-display text-stone-900 mb-8 border-b border-stone-200 pb-4">Web Reservation</h2>
                            <p className="text-stone-600 mb-12 text-sm leading-relaxed">
                                下記フォームよりご予約内容を送信してください。<br />
                                予約完了後、確認メールを送信させていただきます。<br />
                                3日以上返信がない場合は、お手数ですがお電話にてご連絡ください。
                            </p>
                            <ReservationForm />
                        </div>
                    </div>

                    {/* Right: Access Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h2 className="text-3xl font-display text-stone-900 mb-8 border-b border-stone-200 pb-4">Access</h2>
                            <div className="h-[400px] mb-8">
                                <AccessMap />
                            </div>
                            <div className="space-y-6 text-stone-600 font-body">
                                <div>
                                    <p className="text-xs text-primary-red uppercase tracking-widest mb-1">Address</p>
                                    <p>〒939-8185<br />富山県富山市二俣446-1</p>
                                </div>
                                <div>
                                    <p className="text-xs text-primary-red uppercase tracking-widest mb-1">Transport</p>
                                    <p>上堀駅から1,519m<br />※駐車場完備の為、自家用車でのご来店がオススメです。</p>
                                </div>
                                <div>
                                    <p className="text-xs text-primary-red uppercase tracking-widest mb-1">Tel</p>
                                    <p>076-461-5277</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

'use client';

import { useRouter } from "next/navigation";





// ─── Welcome Banner ───────────────────────────────────────────
export function WelcomeBanner () {
    const router = useRouter();
    return (
        <div  className="bg-[#1a1714] rounded-2xl p-8 pr-10 flex items-center justify-between mb-7 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-orange/15 pointer-events-none" />
            <div className="absolute right-16 -bottom-16 w-40 h-40 rounded-full bg-orange/8 pointer-events-none" />

            <div className="relative z-10">
                <h1 className="font-fraunces text-3xl font-semibold text-white mb-1.5">Welcome back, Arjun!</h1>
                <p className="text-white/50 text-sm">You have 3 chapters to revise today · NEET in 40 days</p>
            </div>

            <button 
                onClick={() => router.push('/chat')}
                className="relative z-10 bg-orange text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-orange-700 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-orange/40 whitespace-nowrap"
            >
                Ask AI Tutor →
            </button>
            
        </div>
    );
}
'use client';

import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { SectionTitle } from "../ui/section";
import { Progress } from "../ui/progress";





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


// ─── Stats Grid ───────────────────────────────────────────────
export function StatsGrid () {

    const stats = [
        { val: '147', label: 'Days to NEET', icon: '📅', bg: 'var(--orange-soft)', change: null },
        { val: '68%', label: 'Syllabus Covered', icon: '📊', bg: 'var(--green-soft)', change: '+5% this week' },
        { val: '847', label: 'Questions Practiced', icon: '✏️', bg: 'var(--blue-soft)', change: '+42 today' },
        { val: '73%', label: 'Avg Quiz Score', icon: '🏆', bg: 'var(--yellow-soft)', change: '+3% this week' },
    ]
  
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            {stats.map((s) => (
                <Card key={s.label}>
                    <div className="flex items-center justify-between mb-3 ml-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: s.bg }}>{s.icon}</div>
                        {s.change && <span className="text-xs font-semibold text-green-700 mr-3">{s.change}</span>}
                    </div>
                    <div className="font-fraunces text-3xl font-semibold text-[#1a1714] ml-3">{s.val}</div>
                    <div className="text-xs text-[#9b9590] mt-0.5 ml-3">{s.label}</div>
                </Card>
            ))}
        </div>
    )
}


// ─── Subject Progress ─────────────────────────────────────────
export function SubjectProgress () {

    const subjects = [
        { name: 'Biology',   pct: 78, color: '#1a7a4a', tone: 'rgba(26,122,74,0.08)' },
        { name: 'Physics',   pct: 55, color: 'var(--blue)', tone: 'rgba(26,79,160,0.08)' },
        { name: 'Chemistry', pct: 64, color: 'var(--yellow)', tone: 'rgba(212,160,23,0.1)' },
        { name: 'Botany',    pct: 82, color: 'var(--orange)', tone: 'rgba(232,87,10,0.1)' },
    ]

    return (
        <Card className="px-5 py-5 gap-4 rounded-2xl">
            <SectionTitle action={<span className="text-sm text-[#e8570a] cursor-pointer font-medium">Details →</span>}>
                Subject Progress
            </SectionTitle>

            <div className="space-y-3">
                {subjects.map((s) => (
                <div key={s.name} className="rounded-xl border border-[#ece5d9] px-3.5 py-3" style={{ background: s.tone }}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[15px] font-medium text-[#1a1714]">{s.name}</span>
                        <span className="text-sm font-medium px-2 py-0.5 rounded-full" style={{ color: s.color, background: 'rgba(255,255,255,0.7)' }}>{s.pct}%</span>
                    </div>
                    <Progress value={s.pct} color={s.color} />
                </div>
            ))}
            </div>

        </Card>
    )
}

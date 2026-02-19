'use client'

import { usePathname, useRouter } from "next/navigation"
import { Avatar } from "../ui/avatar";




const NAV_ITEMS = [
  { href: '/dashboard',  icon: '⊞', label: 'Dashboard' },
  { href: '/chat',       icon: '✦', label: 'AI Tutor',        badge: 'AI' },
  { href: '/quiz',       icon: '◈', label: 'Practice Quiz' },
  { href: '/materials',  icon: '▤', label: 'Study Materials' },
  { href: '/progress',   icon: '◉', label: 'My Progress' },
]

const SidebarLayout = () => {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <aside className="w-60 shrink-0 bg-[#1a1714] flex flex-col fixed h-screen z-50">
        {/* Logo */}

        <div  className="px-5 py-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-orange flex items-center justify-center text-lg shrink-0">🎓</div>
                <div>
                    <div className="font-fraunces text-xl font-bold text-white tracking-tight">VidyAI</div>
                    <div className="text-[10px] text-white/30 tracking-[2px] uppercase">Powered by AI</div>
                </div>
            </div>
        </div>

        {/* Main nav */}
        <div className="px-3 pt-5 pb-2">
            <div className="text-[10px] tracking-[2px] uppercase text-white/30 px-2 mb-2">Menu</div>
            {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                    <button 
                        key={item.href} 
                        onClick={() => router.push(item.href)}
                        className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg mb-0.5 text-sm font-medium transition-all
                        ${active ? 'bg-orange text-white' : 'text-white/55 hover:bg-white/7 hover:text-white/85'}`}
                        >
                            <span className="w-5 text-center text-base">{item.icon}</span>
                            {item.label}
                            {item.badge && (
                                <span className={`ml-auto text-[11px] px-2 py-0.5 rounded-full ${active ? 'bg-white/25' : 'bg-white/15'}`}>
                                    {item.badge}
                                </span>
                            )}
                        </button>
                )
            })}
        </div>

        {/* User card */}
        <div className="mt-auto p-3 border-t border-white/10">
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/6 cursor-pointer hover:bg-white/10 transition-all">
                <Avatar  />
                <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-white truncate">{ 'Arjun Sharma'}</div>
                </div>
                <button onClick={() => {}} className="ml-auto text-white/30 hover:text-white/70 text-base transition-colors" title="Logout">⎋</button>
            </div>
        </div>

    </aside>
  )
}

export default SidebarLayout
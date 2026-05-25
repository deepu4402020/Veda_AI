'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  Users, 
  FileText, 
  BookOpen, 
  Settings, 
  Sparkles,
  Layers
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: LayoutGrid },
  { name: 'My Groups', href: '/groups', icon: Users },
  { name: 'Assignments', href: '/assignments', icon: FileText, badge: 10 },
  { name: "AI Teacher's Toolkit", href: '/ai-toolkit', icon: Layers },
  { name: 'My Library', href: '/library', icon: BookOpen },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 bg-white/95 backdrop-blur-md h-[calc(100vh-2rem)] my-4 ml-4 flex-col justify-between py-6 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 sticky top-4 border border-gray-200/50 rounded-[32px]">
      <div>
        <div className="flex items-center gap-2.5 px-2 mb-8">
          <div className="w-9 h-9 bg-gradient-to-br from-[#FF5E3A] to-[#F95016] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_4px_12px_rgba(249,80,22,0.3)] pt-0.5">
            V
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">VedaAI</span>
        </div>

        <Link href="/assignments/new">
          <button className="w-full mb-8 bg-gradient-to-b from-[#2D2D2F] to-[#171718] text-white hover:opacity-95 shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-full py-3 px-4 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] border border-[#FF5E3A]/30 hover:border-[#FF5E3A]/60">
            <Sparkles size={16} className="text-[#FF5E3A]" />
            <span className="font-semibold text-sm">Create Assignment</span>
          </button>
        </Link>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors cursor-pointer",
                  isActive ? "bg-gray-100/80 text-gray-900 font-semibold" : "text-gray-500 hover:bg-gray-50/50 hover:text-gray-700"
                )}>
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={cn(isActive ? "text-gray-800" : "text-gray-400")} />
                    {item.name}
                  </div>
                  {item.badge && (
                    <span className="bg-[#F95016] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(249,80,22,0.2)]">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>

      <div>
        <div className="px-3 py-2.5 mb-3 flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50/50 rounded-xl cursor-pointer transition-colors">
          <Settings size={18} className="text-gray-400" />
          Settings
        </div>
        
        <div className="bg-[#F6F6F8]/80 rounded-2xl p-3 flex items-center gap-3 border border-gray-100/60 shadow-sm">
          <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm bg-white">
             <img src="/school_avatar.png" alt="Delhi Public School Mascot" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-900 truncate">Delhi Public School</p>
            <p className="text-xs text-gray-500 truncate font-medium">Bokaro Steel City</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

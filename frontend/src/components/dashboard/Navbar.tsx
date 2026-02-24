"use client";

import { Bell, Search, User, ChevronDown } from "lucide-react";

export function Navbar() {
    return (
        <header className="h-16 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl px-8 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search nodes, projects, or reports..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950" />
                </button>

                <div className="h-8 w-px bg-white/10" />

                <div className="flex items-center gap-3 pl-2">
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-white">Guest User</span>
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Free Tier</span>
                    </div>
                    <button className="flex items-center gap-2 p-1 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-white/10">
                            <User className="w-4 h-4 text-slate-300" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-500 mr-1" />
                    </button>
                </div>
            </div>
        </header>
    );
}

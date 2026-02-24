"use client";
import React from "react";
import { LayoutDashboard, Github } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white">NM<span className="text-blue-500">Predict</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#" className="hover:text-white transition-colors">Markets</a>
                    <a href="#" className="hover:text-white transition-colors">Trends</a>
                    <a href="#" className="hover:text-white transition-colors">Resources</a>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="/dashboard"
                        className="hidden sm:flex items-center gap-2 bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full text-sm font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all"
                    >
                        Launch Dashboard
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
                        Get Pro
                    </button>
                </div>
            </div>
        </nav>
    );
}

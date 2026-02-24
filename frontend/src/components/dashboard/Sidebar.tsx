"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Search,
    TrendingUp,
    Building2,
    Briefcase,
    FileText,
    Lock,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Search, label: "Price Estimator", href: "/dashboard/predict" },
    { icon: TrendingUp, label: "Market Trends", href: "/dashboard/trends" },
    { icon: Building2, label: "Infrastructure Impact", href: "/dashboard/infrastructure" },
    { icon: Briefcase, label: "Portfolio", href: "/dashboard/portfolio" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports" },
    { icon: Lock, label: "API Access", href: "/dashboard/api-access", locked: true },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-screen w-64 border-r border-white/5 bg-slate-950 px-4 py-8">
            <div className="flex items-center gap-2 px-2 mb-10">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">NaviProp</span>
            </div>

            <nav className="flex-1 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                                isActive
                                    ? "bg-blue-600/10 text-blue-400"
                                    : "text-slate-400 hover:text-white hover:bg-white/5",
                                item.locked && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300")} />
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full"
                                />
                            )}
                            {item.locked && (
                                <span className="ml-auto text-[10px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-white/5 uppercase font-bold">
                                    Pro
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto px-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/5 border border-blue-500/20">
                    <p className="text-sm font-semibold text-white mb-1">Enterprise Access</p>
                    <p className="text-xs text-slate-400 mb-3">Get advanced node-level analytics and API keys.</p>
                    <button className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
}

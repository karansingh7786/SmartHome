"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface KPICardProps {
    title: string;
    value: string;
    change?: string;
    isPositive?: boolean;
    icon: LucideIcon;
    subtext?: string;
}

export function KPICard({ title, value, change, isPositive, icon: Icon, subtext }: KPICardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                </div>
                {change && (
                    <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full",
                        isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                    )}>
                        {isPositive ? "+" : ""}{change}
                    </span>
                )}
            </div>

            <div>
                <p className="text-sm text-slate-400 font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
                {subtext && <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">{subtext}</p>}
            </div>
        </motion.div>
    );
}

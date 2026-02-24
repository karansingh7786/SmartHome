"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Trash2,
    ExternalLink,
    ArrowUpRight,
    MapPin,
    LayoutGrid,
    List,
    IndianRupee,
    PieChart
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const savedProperties = [
    {
        id: 1,
        name: "Hiranandani Fortune City",
        node: "Panvel",
        price: "₹1.45 Cr",
        area: "1250 sqft",
        growth: "+12.5%",
        roi: "28.4%",
        date: "Jan 15, 2026"
    },
    {
        id: 2,
        name: "Godrej City",
        node: "Panvel",
        price: "₹85.0 L",
        area: "850 sqft",
        growth: "+8.2%",
        roi: "15.7%",
        date: "Dec 20, 2025"
    },
    {
        id: 3,
        name: "Paradise Sai Sun",
        node: "Kharghar",
        price: "₹2.10 Cr",
        area: "1800 sqft",
        growth: "+15.1%",
        roi: "34.2%",
        date: "Feb 05, 2026"
    }
];

export default function PortfolioPage() {
    const [view, setView] = useState<"grid" | "list">("grid");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Investment Portfolio</h1>
                    <p className="text-slate-500">Manage saved estimates and track potential ROI.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
                        <button
                            onClick={() => setView("grid")}
                            className={cn(
                                "p-2 rounded-lg transition-all",
                                view === "grid" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-white"
                            )}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={cn(
                                "p-2 rounded-lg transition-all",
                                view === "list" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-white"
                            )}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="py-2.5 px-6 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2">
                        <PieChart className="w-4 h-4" />
                        Portfolio Analysis
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Total Value</p>
                    <h3 className="text-2xl font-bold text-white">₹4.40 Cr</h3>
                    <p className="text-[10px] text-emerald-400 font-bold mt-1">+₹32.4 L Appreciation</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Avg. ROI</p>
                    <h3 className="text-2xl font-bold text-white">26.1%</h3>
                    <p className="text-[10px] text-blue-400 font-bold mt-1">Top Node: Kharghar</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Saved Estimates</p>
                    <h3 className="text-2xl font-bold text-white">12</h3>
                    <p className="text-[10px] text-slate-500 font-bold mt-1">4 Active Reports</p>
                </div>
            </div>

            {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedProperties.map((prop, i) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-white/5">
                                    <Building2 className="w-6 h-6 text-slate-400" />
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-rose-400 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{prop.name}</h3>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                    <MapPin className="w-3 h-3" />
                                    {prop.node} • {prop.area}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Price Estimate</p>
                                    <p className="text-sm font-bold text-white">{prop.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Growth</p>
                                    <p className="text-sm font-bold text-emerald-400 flex items-center justify-end gap-1">
                                        <ArrowUpRight className="w-3 h-3" />
                                        {prop.growth}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-[10px] text-slate-500 font-medium">Saved: {prop.date}</span>
                                <div className="px-3 py-1 rounded-full bg-blue-600/10 text-[10px] font-bold text-blue-400 uppercase border border-blue-500/20">
                                    {prop.roi} Project ROI
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <button className="border-2 border-dashed border-white/5 rounded-2xl h-full min-h-[280px] flex flex-col items-center justify-center gap-4 group hover:bg-white/5 hover:border-white/10 transition-all">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Building2 className="w-6 h-6 text-slate-600" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-white">Add New Property</p>
                            <p className="text-xs text-slate-500">Run a new estimate to save</p>
                        </div>
                    </button>
                </div>
            ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Property</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Node</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Estimate</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase text-right">ROI</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedProperties.map(prop => (
                                <tr key={prop.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-white">{prop.name}</p>
                                        <p className="text-[10px] text-slate-500">{prop.area}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-slate-300">{prop.node}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-white">{prop.price}</p>
                                        <p className="text-[10px] text-emerald-400 font-bold">{prop.growth} Growh</p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 text-[10px] font-bold text-blue-400 uppercase border border-blue-500/20">
                                            {prop.roi}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex gap-2 justify-end">
                                            <button className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-rose-400 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState } from "react";
import { MarketTrendChart } from "@/components/dashboard/MarketTrendChart";
import { KPICard } from "@/components/dashboard/KPICard";
import {
    TrendingUp,
    MapPin,
    ArrowUpRight,
    IndianRupee,
    ArrowDownRight,
    Filter,
    BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NODES = ["Kharghar", "Vashi", "Panvel", "Nerul", "Belapur", "Seawoods", "Airoli", "Ulwe"];
const BHK_TYPES = ["All", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

export default function MarketTrendsPage() {
    const [selectedNode, setSelectedNode] = useState("Kharghar");
    const [selectedBhk, setSelectedBhk] = useState("All");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Market Trends</h1>
                    <p className="text-slate-500">Deep dive into node-specific price movements and forecasts.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
                        {BHK_TYPES.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedBhk(type)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                                    selectedBhk === type
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "text-slate-400 hover:text-white"
                                )}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    <div className="relative group">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <select
                            value={selectedNode}
                            onChange={(e) => setSelectedNode(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-6 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                        >
                            {NODES.map(node => <option key={node} value={node} className="bg-slate-900">{node}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPICard
                    title="Avg Node Price"
                    value="₹9,200"
                    change="8.4%"
                    isPositive={true}
                    icon={IndianRupee}
                    subtext={`${selectedNode} - Last 12m`}
                />
                <KPICard
                    title="Yearly Growth (YoY)"
                    value="+14.2%"
                    change="2.5%"
                    isPositive={true}
                    icon={TrendingUp}
                    subtext="Comparison to 2024"
                />
                <KPICard
                    title="Rental Yield"
                    value="4.1%"
                    change="0.5%"
                    isPositive={true}
                    icon={ArrowUpRight}
                    subtext="High Demand Area"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <MarketTrendChart />
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-blue-500" />
                            Growth Outlook
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-400">QoQ Appreciation</span>
                                    <span className="text-emerald-400 font-bold">+2.8%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} className="h-full bg-emerald-500" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-400">Forecast Accuracy</span>
                                    <span className="text-blue-400 font-bold">94.2%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} className="h-full bg-blue-500" />
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
                                    Forecasted appreciation for {selectedNode} in 2026: <span className="text-emerald-400 font-bold">+12-15%</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                        <p className="text-sm font-bold text-white mb-2">Alpha Insights</p>
                        <p className="text-xs text-blue-200 leading-relaxed">
                            {selectedNode} is currently seeing a supply squeeze in {selectedBhk === "All" ? "2-3 BHK" : selectedBhk} inventory.
                            Infrastructure completion is ahead of schedule.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { KPICard } from "@/components/dashboard/KPICard";
import { MarketTrendChart } from "@/components/dashboard/MarketTrendChart";
import {
    IndianRupee,
    TrendingUp,
    MapPin,
    Activity,
    ArrowUpRight,
    ShieldCheck,
    Plane,
    Train
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    { title: "Avg. House Price", value: "₹8,450", change: "5.2%", isPositive: true, icon: IndianRupee, subtext: "Per SQFT - Navi Mumbai" },
    { title: "Price Growth", value: "+12.4%", change: "2.1%", isPositive: true, icon: TrendingUp, subtext: "Year over Year" },
    { title: "Active Node", value: "Kharghar", icon: MapPin, subtext: "Highest Transaction Volume" },
    { title: "Rental Yield", value: "3.8%", change: "0.2%", isPositive: true, icon: Activity, subtext: "Average Yield" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Market Overview</h1>
                <p className="text-slate-500">Real-time real estate analytics for Navi Mumbai.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <KPICard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <MarketTrendChart />

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-6">Market Heatmap Placeholder</h3>
                        <div className="aspect-video rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
                            <div className="text-center space-y-2 relative z-10">
                                <MapPin className="w-10 h-10 text-blue-500 mx-auto opacity-50" />
                                <p className="text-sm text-slate-500 font-medium">Interactive Spatial Heatmap Coming Soon</p>
                                <div className="flex gap-2 justify-center">
                                    <span className="px-2 py-1 rounded bg-blue-500/10 text-[10px] text-blue-400 font-bold border border-blue-500/20">GIS Ready</span>
                                    <span className="px-2 py-1 rounded bg-indigo-500/10 text-[10px] text-indigo-400 font-bold border border-indigo-500/20">HD Resolution</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        <h3 className="text-lg font-bold mb-2">Demand Indicator</h3>
                        <p className="text-blue-100 text-xs mb-6">Aggregate buyer sentiment index</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-4xl font-black">High</span>
                                <p className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-70">Sellers Market</p>
                            </div>
                            <ShieldCheck className="w-12 h-12 opacity-50" />
                        </div>
                        <div className="mt-6 h-2 w-full bg-black/20 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                className="h-full bg-white rounded-full"
                            />
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-500" />
                            Infrastructure Impact
                        </h3>
                        <div className="space-y-4">
                            {[
                                { name: "NMIA (Airport)", impact: "+18%", icon: Plane },
                                { name: "Metro Line 1", impact: "+12%", icon: Train },
                                { name: "Trans Harbour Link", impact: "+25%", icon: ArrowUpRight },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                                            <item.icon className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-bold text-emerald-400">{item.impact}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { year: "2021", price: 6500, rental: 15 },
    { year: "2022", price: 7200, rental: 18 },
    { year: "2023", price: 7800, rental: 20 },
    { year: "2024", price: 8200, rental: 22 },
    { year: "2025", price: 8450, rental: 25 },
    { year: "2026", price: 8900, rental: 28 },
];

export function MarketTrendChart() {
    return (
        <div className="h-[350px] w-full p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white">Price Trend (₹/sqft)</h3>
                    <p className="text-xs text-slate-500">5-year historical and forecasted growth</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 text-[10px] font-bold text-blue-400 uppercase">
                        Sale Price
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/10 text-[10px] font-bold text-indigo-400 uppercase">
                        Rent
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRental" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis
                        dataKey="year"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                        itemStyle={{ fontSize: '12px' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                    />
                    <Area
                        type="monotone"
                        dataKey="rental"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRental)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

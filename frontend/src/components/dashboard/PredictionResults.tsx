"use client";

import { motion } from "framer-motion";
import { IndianRupee, Info, TrendingUp, TrendingDown, FileText, Save } from "lucide-react";

interface PredictionResultsProps {
    prediction: {
        estimatedPrice: number;
        confidenceRange: {
            low: number;
            mid: number;
            high: number;
        };
    };
}

export function PredictionResults({ prediction }: PredictionResultsProps) {
    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(val);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
        >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <IndianRupee className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                    <p className="text-blue-100 font-medium mb-2 opacity-80 uppercase tracking-widest text-[10px]">Estimated Valuation</p>
                    <h2 className="text-5xl font-black mb-8">
                        {formatCurrency(prediction.estimatedPrice)}
                    </h2>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                            <p className="text-[10px] uppercase font-bold text-blue-200 mb-1">Conservative</p>
                            <p className="text-lg font-bold">{formatCurrency(prediction.confidenceRange.low)}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 scale-110">
                            <p className="text-[10px] uppercase font-bold text-white mb-1">Expected</p>
                            <p className="text-lg font-bold">{formatCurrency(prediction.confidenceRange.mid)}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                            <p className="text-[10px] uppercase font-bold text-blue-200 mb-1">Optimistic</p>
                            <p className="text-lg font-bold">{formatCurrency(prediction.confidenceRange.high)}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all">
                            <Save className="w-4 h-4" />
                            Save Estimate
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold hover:bg-white/20 transition-all border border-white/10">
                            <FileText className="w-4 h-4" />
                            Export PDF
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-white">Market Comparison</h3>
                        <Info className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">vs. Node Average</span>
                            <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                                <TrendingUp className="w-3 h-3" />
                                +4.2%
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">vs. 2025 Prediction</span>
                            <div className="flex items-center gap-1 text-rose-400 font-bold text-xs">
                                <TrendingDown className="w-3 h-3" />
                                -1.5%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <div className="text-center">
                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">Confidence Score</p>
                        <div className="text-3xl font-black text-white mb-2">92%</div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden max-w-[120px] mx-auto">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "92%" }}
                                className="h-full bg-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

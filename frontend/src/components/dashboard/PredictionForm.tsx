"use client";

import { useState } from "react";
import { PredictionRequest } from "@/types";
import {
    Building2,
    MapPin,
    Home,
    Layers,
    Maximize2,
    Sparkles,
    ChevronRight,
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

const NODES = [
    "Kharghar", "Vashi", "Panvel", "Nerul", "Belapur",
    "Seawoods", "Airoli", "Ulwe", "Koparkhairane", "Kamothe",
    "Taloja", "Ghansoli", "Sanpada", "Juinagar", "Dronagiri"
];

const FURNISHING = ["Unfurnished", "Semi-furnished", "Fully-furnished"];
const RESALE_TYPE = ["New Property", "Resale"];

interface PredictionFormProps {
    onSubmit: (data: PredictionRequest) => void;
    isLoading?: boolean;
}

export function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
    const [formData, setFormData] = useState<PredictionRequest>({
        node: "Kharghar",
        bhk: 2,
        area: 1000,
        furnishing: "Semi-furnished",
        floor: 5,
        newResale: "New Property",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
                {/* Node Selection */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        Location Node
                    </label>
                    <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                        value={formData.node}
                        onChange={(e) => setFormData({ ...formData, node: e.target.value })}
                    >
                        {NODES.map(node => <option key={node} value={node} className="bg-slate-900">{node}</option>)}
                    </select>
                </div>

                {/* Area & BHK */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <Maximize2 className="w-3 h-3" />
                            Area (Sq.ft)
                        </label>
                        <input
                            type="number"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <Home className="w-3 h-3" />
                            BHK
                        </label>
                        <input
                            type="number"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={formData.bhk}
                            onChange={(e) => setFormData({ ...formData, bhk: parseInt(e.target.value) })}
                        />
                    </div>
                </div>

                {/* Floor & Furnishing */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <Layers className="w-3 h-3" />
                            Floor
                        </label>
                        <input
                            type="number"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={formData.floor}
                            onChange={(e) => setFormData({ ...formData, floor: parseInt(e.target.value) })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            Furnishing
                        </label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                            value={formData.furnishing}
                            onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
                        >
                            {FURNISHING.map(f => <option key={f} value={f} className="bg-slate-900">{f}</option>)}
                        </select>
                    </div>
                </div>

                {/* Resale Type */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                        <Building2 className="w-3 h-3" />
                        Property Status
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {RESALE_TYPE.map(type => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setFormData({ ...formData, newResale: type })}
                                className={cn(
                                    "py-2 px-4 rounded-xl text-xs font-bold border transition-all",
                                    formData.newResale === type
                                        ? "bg-blue-600 border-blue-500 text-white"
                                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                )}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <>
                        Run Analysis
                        <ChevronRight className="w-4 h-4" />
                    </>
                )}
            </button>

            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <p className="text-[10px] text-blue-400 font-medium leading-relaxed">
                    <span className="font-bold uppercase mr-1">Note:</span>
                    Our ML model uses historical transaction data and current infrastructure development metrics to provide these estimates.
                </p>
            </div>
        </form>
    );
}

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Calculator, MapPin, Home, Bath, ArrowUp, Calendar, Info } from "lucide-react";
import { cn } from "@/lib/utils";

import { API_URL } from "@/lib/api";

export function PredictionForm() {
    const [locations, setLocations] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [formData, setFormData] = useState({
        location: "",
        area_sqft: "",
        bhk: "2",
        bathrooms: "2",
        floor: "0",
        total_floors: "10",
        age_of_property: "5",
        parking: true,
        lift: true,
    });

    useEffect(() => {
        axios.get(`${API_URL}/locations`)
            .then(res => setLocations(res.data))
            .catch(err => console.error("Error fetching locations", err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const response = await axios.post(`${API_URL}/predict`, {
                ...formData,
                area_sqft: parseFloat(formData.area_sqft),
                bhk: parseInt(formData.bhk),
                bathrooms: parseInt(formData.bathrooms),
                floor: parseInt(formData.floor),
                total_floors: parseInt(formData.total_floors),
                age_of_property: parseFloat(formData.age_of_property),
            });
            setResult(response.data);
        } catch (err) {
            console.error("Prediction error", err);
            alert("Error calculating price. Please check if the backend is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Location
                    </label>
                    <select
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        required
                    >
                        <option value="">Select Locality</option>
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                        <Home className="w-4 h-4" /> Carpet Area (sqft)
                    </label>
                    <input
                        type="number"
                        placeholder="e.g. 1000"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={formData.area_sqft}
                        onChange={e => setFormData({ ...formData, area_sqft: e.target.value })}
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2 font-mono">
                            BHK
                        </label>
                        <input
                            type="number"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white outline-none"
                            value={formData.bhk}
                            onChange={e => setFormData({ ...formData, bhk: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Bath className="w-4 h-4" /> Baths
                        </label>
                        <input
                            type="number"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white outline-none"
                            value={formData.bathrooms}
                            onChange={e => setFormData({ ...formData, bathrooms: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            Floor
                        </label>
                        <input
                            type="number"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white outline-none"
                            value={formData.floor}
                            onChange={e => setFormData({ ...formData, floor: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            Total Floors
                        </label>
                        <input
                            type="number"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white outline-none"
                            value={formData.total_floors}
                            onChange={e => setFormData({ ...formData, total_floors: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Age of Property (years)
                    </label>
                    <input
                        type="number"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white outline-none"
                        value={formData.age_of_property}
                        onChange={e => setFormData({ ...formData, age_of_property: e.target.value })}
                    />
                </div>

                <div className="col-span-1 md:col-span-2 flex items-center gap-8 py-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-blue-500 focus:ring-blue-500"
                            checked={formData.parking}
                            onChange={e => setFormData({ ...formData, parking: e.target.checked })}
                        />
                        <span className="text-sm text-slate-300">Parking</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-blue-500 focus:ring-blue-500"
                            checked={formData.lift}
                            onChange={e => setFormData({ ...formData, lift: e.target.checked })}
                        />
                        <span className="text-sm text-slate-300">Lift</span>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="col-span-1 md:col-span-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold p-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                    Calculate Valuation
                </button>
            </form>

            {result && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 glass-effect p-8 rounded-2xl border-blue-500/20">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h3 className="text-slate-400 uppercase tracking-widest text-xs font-bold">Estimated Market Value</h3>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            {result.formatted_price}
                        </div>
                        <div className="flex items-center gap-6 text-sm text-slate-400 pt-2">
                            <div className="flex items-center gap-1"><ArrowUp className="w-4 h-4 text-green-400" /> {result.price_per_sqft} /sqft</div>
                            <div className="flex items-center gap-1"><Info className="w-4 h-4" /> Confidence High</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

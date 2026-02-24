"use client";

import { motion } from "framer-motion";
import {
    Plane,
    Train,
    Anchor,
    ArrowUpRight,
    Calendar,
    MapPin,
    Navigation,
    Info
} from "lucide-react";

const projects = [
    {
        name: "Navi Mumbai Intl. Airport (NMIA)",
        impact: "+18-25%",
        timeline: "2025-2026",
        distance: "0-15km radius",
        description: "Multi-modal transport hub expected to handle 90M passengers annually by 2032. Massive delta for Ulwe, Panvel, and Kharghar.",
        icon: Plane,
        color: "blue"
    },
    {
        name: "Navi Mumbai Metro Line 1",
        impact: "+12-15%",
        timeline: "Operational",
        distance: "Walking distance to stations",
        description: "Connecting Belapur to Pendhar. Significant premium for properties within 500m of metro stations.",
        icon: Train,
        color: "indigo"
    },
    {
        name: "MTHL (Trans Harbour Link)",
        impact: "+25-30%",
        timeline: "Operational",
        distance: "Direct connectivity to South Mumbai",
        description: "Sewri-Nhava Sheva link. Reducing travel time to 20 mins. Direct impact on Ulwe and Dronagiri nodes.",
        icon: Anchor,
        color: "emerald"
    }
];

export default function InfrastructurePage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Infrastructure Impact</h1>
                <p className="text-slate-500">Analyze the correlation between mega-projects and local real estate appreciation.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col group relative overflow-hidden"
                    >
                        {/* Decorative background icon */}
                        <project.icon className="absolute -right-6 -top-6 w-32 h-32 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity" />

                        <div className="flex items-center justify-between mb-8">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                <project.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-emerald-400 font-black text-xl">{project.impact}</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Est. Appreciation</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.name}</h3>
                        <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-slate-500" />
                                <span className="text-xs text-slate-300">Timeline: <span className="text-blue-400 font-bold">{project.timeline}</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Navigation className="w-4 h-4 text-slate-500" />
                                <span className="text-xs text-slate-300">Impact Radius: <span className="text-blue-400 font-bold">{project.distance}</span></span>
                            </div>
                        </div>

                        <button className="mt-8 w-full py-3 rounded-xl bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-all border border-white/5 flex items-center justify-center gap-2 group-hover:border-blue-500/50">
                            View Node-level Correlation
                            <ArrowUpRight className="w-3 h-3" />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white">Project Proximity Map</h3>
                        <p className="text-sm text-slate-500">Visualizing infra projects vs. high-growth nodes</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Under Construction
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            Operational
                        </div>
                    </div>
                </div>

                <div className="aspect-[21/9] rounded-2xl bg-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Navi+Mumbai&zoom=11&size=1000x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=element:geometry|color:0x242f3e&style=feature:water|element:geometry|color:0x17263c&key=YOUR_KEY')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                    <div className="relative z-10 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-blue-500" />
                        </div>
                        <p className="text-sm text-slate-400 font-medium font-mono">MAPS_API_OVERLAY_RESERVED</p>
                        <div className="flex items-center gap-4 justify-center">
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest px-3 py-1 border border-white/5 rounded-full">Pan & Zoom Disabled</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest px-3 py-1 border border-white/5 rounded-full">Vector Assets Running</span>
                        </div>
                    </div>

                    <div className="absolute top-8 left-8 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 hidden md:block">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3">Active Data Layers</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" checked readOnly className="rounded border-white/10 bg-white/5" />
                                <span className="text-xs text-white">Residential Zones</span>
                            </div>
                            <div className="flex items-center gap-3 opacity-50">
                                <input type="checkbox" readOnly className="rounded border-white/10 bg-white/5" />
                                <span className="text-xs text-white">Commercial Hubs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

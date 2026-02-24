"use client";

import { FileText, Download, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Market Reports</h1>
                <p className="text-slate-500">Generate and download comprehensive node-level PDF reports.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Panvel Growth Report Q1", date: "Feb 10, 2026", size: "2.4 MB" },
                    { title: "Navi Mumbai Airport Impact Study", date: "Jan 25, 2026", size: "5.8 MB" },
                    { title: "Kharghar Residential Outlook", date: "Jan 12, 2026", size: "1.9 MB" },
                ].map((report, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col group hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-xl bg-slate-800 text-slate-400 group-hover:text-blue-400 transition-colors">
                                <FileText className="w-6 h-6" />
                            </div>
                            <button className="p-2 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>

                        <h3 className="font-bold text-white mb-2">{report.title}</h3>

                        <div className="mt-auto flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                            <div className="flex items-center gap-1.5 text-blue-400/80">
                                <Clock className="w-3 h-3" />
                                {report.date}
                            </div>
                            <span>{report.size}</span>
                        </div>
                    </motion.div>
                ))}

                <button className="border-2 border-dashed border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 group hover:bg-white/5 hover:border-white/10 transition-all">
                    <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">Generate Custom Report</p>
                        <p className="text-xs text-slate-500">Pro Feature</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

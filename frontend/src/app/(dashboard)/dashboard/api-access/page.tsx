"use client";

import { Lock, ShieldCheck, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function APIAccessPage() {
    return (
        <div className="h-[calc(100vh-160px)] flex items-center justify-center">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative inline-block"
                >
                    <div className="w-24 h-24 rounded-3xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 mx-auto">
                        <Lock className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-slate-950">
                        <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                </motion.div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-black text-white">Enterprise API Access</h1>
                    <p className="text-slate-400 leading-relaxed">
                        Direct access to our ML models and node-level data streams is reserved for Enterprise partners.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <Zap className="w-5 h-5 text-blue-400 mb-2" />
                        <p className="text-xs font-bold text-white mb-1">Real-time Stream</p>
                        <p className="text-[10px] text-slate-500">Live transaction endpoints</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <Code2 className="w-5 h-5 text-indigo-400 mb-2" />
                        <p className="text-xs font-bold text-white mb-1">SDK & Webhooks</p>
                        <p className="text-[10px] text-slate-500">Native Python/JS support</p>
                    </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                    Contact Sales for Enterprise
                </button>
            </div>
        </div>
    );
}

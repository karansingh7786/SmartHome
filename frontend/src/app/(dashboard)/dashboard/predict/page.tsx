"use client";

import { useState } from "react";
import { PredictionForm } from "@/components/dashboard/PredictionForm";
import { PredictionResults } from "@/components/dashboard/PredictionResults";
import { PredictionRequest, PredictionResponse } from "@/types";
import { getPrediction } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

export default function PriceEstimatorPage() {
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState<PredictionResponse | null>(null);

    const handlePredict = async (data: PredictionRequest) => {
        setLoading(true);
        setPrediction(null);
        try {
            const res = await getPrediction(data);
            setPrediction(res);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-white tracking-tight">AI Price Estimator</h1>
                <p className="text-slate-500">Get instant, ML-powered valuations for any property in Navi Mumbai.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <div className="p-1 rounded-2xl bg-white/5 border border-white/10 sticky top-24">
                        <PredictionForm onSubmit={handlePredict} isLoading={loading} />
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-[400px] flex flex-col items-center justify-center space-y-4"
                            >
                                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                                <p className="text-slate-400 font-medium animate-pulse">Analyzing market trends and infrastructure impact...</p>
                            </motion.div>
                        ) : prediction ? (
                            <PredictionResults key="results" prediction={prediction} />
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-[400px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                    <Search className="w-8 h-8 text-slate-600" />
                                </div>
                                <h3 className="text-lg font-bold text-white">No Prediction Yet</h3>
                                <p className="text-slate-500 max-w-xs mx-auto">Fill out the form to the left to see the estimated value of your property.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

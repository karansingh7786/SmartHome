import { Navbar } from "@/components/Navbar";
import { PredictionForm } from "@/components/PredictionForm";
import { BackgroundBeams } from "@/components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundBeams />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Valuation</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Accurate house price predictions for Navi Mumbai built on verified infrastructure and transaction data.
          </p>
        </div>

        <PredictionForm />
      </div>

      <footer className="relative z-10 border-t border-white/5 py-12 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">© 2026 Navi Mumbai Price Predictor. All rights reserved.</div>
          <div className="flex items-center gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-400 transition-colors">API Access</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

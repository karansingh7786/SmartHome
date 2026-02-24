import { Sidebar } from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/dashboard/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto scrollbar-hide">
                    <div className="container mx-auto p-4 md:p-8 space-y-8 max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

import { Link, useLocation, Outlet } from "react-router-dom";
import { Mic, Brain, Video, Sparkles } from "lucide-react";

export default function AppLayout() {
    const location = useLocation();

    const nav = [
        { name: "Podcast", path: "/podcast", icon: Mic },
        { name: "Flashcards", path: "/flashcards", icon: Brain },
        { name: "Video Generator", path: "/video", icon: Video },
    ];

    return (
        <div className="min-h-screen bg-[#070711] text-white flex">

            {/* SIDEBAR */}
            <aside className="w-64 p-6 flex flex-col gap-6
      bg-white/5 backdrop-blur-xl border-r border-white/10">

                <div className="flex items-center gap-3 text-2xl font-bold">
                    <Sparkles className="text-purple-400" />
                    Lumala
                </div>

                <nav className="flex flex-col gap-2 mt-6">
                    {nav.map((item) => {
                        const Icon = item.icon;
                        const active = location.pathname === item.path;

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${active
                                        ? "bg-purple-500/30 border border-purple-400/40"
                                        : "hover:bg-white/10"}`}
                            >
                                <Icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto text-xs text-white/40">
                    Lumala AI © {new Date().getFullYear()}
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-10 relative">

                {/* glow background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_40%)]" />

                <div className="bg-white/5 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 min-h-[80vh]">
                    <Outlet />
                </div>

            </main>
        </div>
    );
}

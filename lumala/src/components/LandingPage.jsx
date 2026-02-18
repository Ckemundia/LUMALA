import React from "react";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden text-white font-sans bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">

            {/* Soft glowing background */}
            <div className="absolute top-[-100px] left-[-100px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[160px]"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-400/20 rounded-full blur-[160px]"></div>

            {/* HERO */}
            <section className="relative z-10 flex flex-col items-center text-center pt-32 px-6">

                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
                    LUMA<span className="text-cyan-400">LA</span> 💡
                </h1>

                <p className="mt-6 text-xl text-gray-300 max-w-xl">
                    Learn, Understand, Make Awesome Learning Adventures
                </p>

                <button className="
          mt-10 px-10 py-4 rounded-full
          bg-cyan-400 text-black font-bold text-lg
          shadow-[0_0_30px_rgba(34,211,238,0.7)]
          hover:scale-105 transition
        ">
                    Start Smart Studying
                </button>

            </section>

            {/* FEATURES */}
            <section className="relative z-10 px-6 md:px-20 pt-24 pb-32">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <Feature
                        icon="🎧"
                        title="AI Podcasts"
                        desc="Listen to your notes like a Spotify lecture while walking, cooking or commuting."
                    />

                    <Feature
                        icon="🧠"
                        title="Smart Flashcards"
                        desc="Automatically generated memory cards using spaced repetition."
                    />

                    <Feature
                        icon="⚡"
                        title="Instant Quizzes"
                        desc="Test your understanding in seconds before exams."
                    />

                </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center text-gray-400 pb-10">
                © 2026 Lumala — An AI-Powered Interactive Learning Platform for Self-Study
            </footer>
        </div>
    );
}

/* Feature Card Component */
function Feature({ icon, title, desc }) {
    return (
        <div className="
      bg-white/5 border border-white/10
      backdrop-blur-xl rounded-2xl p-8
      hover:scale-105 transition
      shadow-[0_0_40px_rgba(0,255,255,0.1)]
    ">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300">{desc}</p>
        </div>
    );
}

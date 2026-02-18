import React from 'react';

export default function Podcast() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">🎙 Podcast Generator</h1>

            <div className="space-y-4">
                <textarea
                    placeholder="Paste your notes or topic here..."
                    className="w-full h-48 bg-black/30 border border-white/10
          rounded-xl p-4 focus:outline-none focus:border-purple-400"
                />

                <div className="flex gap-4">
                    <select className="bg-black/30 border border-white/10 rounded-xl px-4 py-2">
                        <option>Friendly Teacher</option>
                        <option>Professional Lecturer</option>
                        <option>Storytelling Style</option>
                    </select>

                    <button className="px-6 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 transition">
                        Generate Podcast
                    </button>
                </div>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                Generated audio will appear here
            </div>
        </div>
    );
}

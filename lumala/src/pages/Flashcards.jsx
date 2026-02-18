export default function Flashcards() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">🧠 Flashcard Generator</h1>

            <textarea
                placeholder="Paste notes, PDF text, or topic..."
                className="w-full h-48 bg-black/30 border border-white/10
        rounded-xl p-4 focus:outline-none focus:border-purple-400"
            />

            <button className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition">
                Generate Flashcards
            </button>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                    Question 1
                </div>
                <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                    Question 2
                </div>
                <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                    Question 3
                </div>
            </div>
        </div>
    );
}

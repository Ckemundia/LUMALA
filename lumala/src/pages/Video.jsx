export default function Video() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">🎥 Video Generator</h1>

      <textarea
        placeholder="Enter topic or paste notes..."
        className="w-full h-40 bg-black/30 border border-white/10
        rounded-xl p-4 focus:outline-none focus:border-purple-400"
      />

      <div className="flex gap-4">
        <select className="bg-black/30 border border-white/10 rounded-xl px-4 py-2">
          <option>Short (30s)</option>
          <option>Medium (2 min)</option>
          <option>Long (5 min)</option>
        </select>

        <button className="px-6 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 transition">
          Generate Video
        </button>
      </div>

      <div className="bg-black/30 border border-white/10 rounded-xl h-64 flex items-center justify-center">
        Video preview will appear here
      </div>
    </div>
  );
}

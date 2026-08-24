import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/destinations?search=${encodeURIComponent(query.trim())}`);
  };

  const categories = [
    { label: "Mountains", icon: "🏔️", search: "Manali" },
    { label: "Beaches", icon: "🏖️", search: "Goa" },
    { label: "Heritage", icon: "🕌", search: "Jaipur" },
    { label: "Nature", icon: "🌿", search: "Munnar" },
    { label: "Adventure", icon: "🧗", search: "Rishikesh" }
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-[550px] md:min-h-[650px] flex items-center justify-center border-b border-slate-200 dark:border-[#1F1F1F]">
      {/* Background Image: Full-width realistic mountain valley image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: "url('/images/hero/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Subtle Dark Overlay (rgba(0, 0, 0, 0.30)) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
        />

        {/* Bottom subtle gradient blend into page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 dark:from-[#050505] to-transparent opacity-90" />
      </div>

      {/* Content over background */}
      <div className="relative z-10 max-w-4xl text-center px-6 py-14 md:py-20 flex flex-col items-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/50 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 shadow-lg transition-colors">
          <span className="text-sky-400">✨</span>
          <span>Next-Generation Travel Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight md:leading-tight drop-shadow-md">
          Explore India. <br />
          <span className="text-sky-400">Travel Smarter.</span>
        </h1>

        {/* Supporting text */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-xs font-medium">
          Discover destinations, build personalized itineraries, and find experiences made for you.
        </p>

        {/* Search Input Container */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-9 w-full max-w-xl flex flex-col sm:flex-row gap-2 bg-white/95 dark:bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/30 dark:border-white/20 shadow-2xl focus-within:border-sky-400 transition-all"
        >
          <div className="flex-1 flex items-center px-3.5">
            <span className="text-sky-600 dark:text-sky-400 text-base mr-2.5">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations (e.g. Manali, Goa, Jaipur)..."
              className="w-full py-2.5 bg-transparent text-slate-900 dark:text-white font-semibold placeholder-slate-500 dark:placeholder-slate-300 outline-none text-xs sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Quick Categories with translucent backdrop blur */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate(`/destinations?search=${encodeURIComponent(cat.label)}`)}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
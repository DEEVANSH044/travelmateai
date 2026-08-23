import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // Navigate to Destinations with search query in state or query param
    navigate(`/destinations?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-sky-50 via-slate-50 to-indigo-50 py-28 md:py-36 flex flex-col items-center justify-center border-b border-gray-100">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 text-sky-600 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-pulse">
          ✨ Your personal AI Travel Companion
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-850 tracking-tight leading-tight md:leading-none">
          Discover Your Next <br />
          <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Dream Adventure
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-505 max-w-2xl mx-auto leading-relaxed">
          Plan trips, discover hotels, explore local culinary arts, and build custom multi-day plans matching your mood.
        </p>

        {/* Search Input Container */}
        <form
          onSubmit={handleSearch}
          className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-md border border-gray-100/60"
        >
          <div className="flex-1 flex items-center px-3">
            <span className="text-gray-400 text-lg mr-2">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Where do you want to go? (e.g. Manali, Goa...)"
              className="w-full py-3 bg-transparent text-slate-850 font-medium placeholder-gray-400 outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-7 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-sm transition-all duration-200"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-500 font-medium">
          <span>Popular:</span>
          <button
            onClick={() => navigate("/destination/manali")}
            className="hover:text-sky-600 underline"
          >
            Manali
          </button>
          <span>•</span>
          <button
            onClick={() => navigate("/destination/goa")}
            className="hover:text-sky-600 underline"
          >
            Goa
          </button>
          <span>•</span>
          <button
            onClick={() => navigate("/destination/jaipur")}
            className="hover:text-sky-600 underline"
          >
            Jaipur
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
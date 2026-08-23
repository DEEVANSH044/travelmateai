import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Places from "../data/Places";

function TravelDNA() {
  // Quiz State
  const [terrain, setTerrain] = useState("Mountains");
  const [pace, setPace] = useState("Balanced");
  const [budgetStyle, setBudgetStyle] = useState("Comfort");
  const [vibe, setVibe] = useState("Adventure");
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const archetypes = {
    Mountains: {
      title: "The Himalayan Mystic",
      badge: "🏔️ High-Altitude Explorer",
      desc: "You thrive among snow peaks, pine valleys, and peaceful mountain monasteries. You value raw nature, crisp air, and thrilling treks.",
      traits: { Adventure: 95, Nature: 98, Relaxation: 80, Culture: 75 },
      matchedDestinations: ["Manali", "Leh", "Gulmarg", "Kasol", "Auli", "Dharamshala"]
    },
    Beaches: {
      title: "The Coastal Nomad",
      badge: "🏝️ Sun & Wave Seeker",
      desc: "Your ideal getaway involves golden sands, sea breezes, vibrant beach shacks, seafood platters, and ocean sunsets.",
      traits: { Adventure: 80, Nature: 90, Relaxation: 95, Culture: 70 },
      matchedDestinations: ["Goa", "Andaman Islands", "Pondicherry", "Alleppey", "Kochi", "Puri"]
    },
    Heritage: {
      title: "The Heritage Connoisseur",
      badge: "🕌 History & Royalty Buff",
      desc: "You are fascinated by grand fortresses, royal architecture, ancient stepwells, spiritual rituals, and timeless bazaars.",
      traits: { Adventure: 65, Nature: 70, Relaxation: 80, Culture: 98 },
      matchedDestinations: ["Jaipur", "Udaipur", "Varanasi", "Hampi", "Agra", "Mysore"]
    },
    Nature: {
      title: "The Wild & Forest Wanderer",
      badge: "🌿 Rainforest & Sanctuary Scout",
      desc: "You seek tea plantations, wildlife safaris, jungle waterfalls, and serene eco-resorts far away from urban noise.",
      traits: { Adventure: 88, Nature: 99, Relaxation: 85, Culture: 72 },
      matchedDestinations: ["Munnar", "Coorg", "Jim Corbett", "Wayanad", "Kaziranga", "Shillong"]
    }
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }, 1200);
  };

  const currentResult = archetypes[terrain] || archetypes.Mountains;
  const recommendedPlaces = Places.filter(p =>
    currentResult.matchedDestinations.includes(p.name)
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      <Nav />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
            Personalized Travel Profile
          </span>
          <h1 className="text-4xl font-extrabold text-slate-850 tracking-tight mt-1">
            🧬 Discover Your Travel DNA
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Take our 60-second assessment to unlock your travel archetype and get matched with India's best destinations.
          </p>
        </div>

        {/* Assessment Form Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Travel Preferences & Vibe</h2>

          <form onSubmit={handleAnalyze} className="space-y-8">
            {/* 1. Preferred Terrain */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-3 uppercase tracking-wide">
                1. What terrain speaks to your soul?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "🏔️ Snow & Mountains", val: "Mountains" },
                  { label: "🏖️ Tropical Beaches", val: "Beaches" },
                  { label: "🕌 Palaces & Heritage", val: "Heritage" },
                  { label: "🌿 Lush Hills & Forests", val: "Nature" }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.val}
                    onClick={() => setTerrain(item.val)}
                    className={`p-4 rounded-2xl border text-xs font-bold text-center transition-all cursor-pointer ${
                      terrain === item.val
                        ? "bg-sky-600 border-sky-600 text-white shadow-sm"
                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pace */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-3 uppercase tracking-wide">
                2. Your ideal vacation pace
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "🧘 Chill & Slow", val: "Slow" },
                  { label: "⚖️ Balanced Explorer", val: "Balanced" },
                  { label: "⚡ Action-Packed", val: "Fast" }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.val}
                    onClick={() => setPace(item.val)}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      pace === item.val
                        ? "bg-slate-800 border-slate-800 text-white"
                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Budget Style */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-3 uppercase tracking-wide">
                3. Comfort & Accommodation Style
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "🎒 Backpack & Local", val: "Budget" },
                  { label: "🏨 Boutique & Comfort", val: "Comfort" },
                  { label: "👑 Royal & Luxury", val: "Luxury" }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.val}
                    onClick={() => setBudgetStyle(item.val)}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      budgetStyle === item.val
                        ? "bg-slate-800 border-slate-800 text-white"
                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Primary Activity Vibe */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-3 uppercase tracking-wide">
                4. What activity excites you most?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "🧗 Trekking & Thrills", val: "Adventure" },
                  { label: "🍛 Street Food & Dining", val: "Food" },
                  { label: "🛕 Temples & Architecture", val: "Culture" },
                  { label: "🌅 Sunsets & Stargazing", val: "Relaxation" }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.val}
                    onClick={() => setVibe(item.val)}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      vibe === item.val
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? "🧬 Analyzing Your Preferences..." : "⚡ Generate My Travel DNA Profile"}</span>
            </button>
          </form>
        </div>

        {/* Results Section */}
        {analyzed && (
          <div className="space-y-10 animate-fade-in">
            {/* Archetype Profile Card */}
            <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div>
                  <span className="text-xs bg-sky-500 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {currentResult.badge}
                  </span>
                  <h2 className="text-3xl font-extrabold mt-3">{currentResult.title}</h2>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed max-w-xl">
                    {currentResult.desc}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 w-full md:w-64 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">DNA Trait Breakdown</h4>
                  {Object.entries(currentResult.traits).map(([trait, score]) => (
                    <div key={trait}>
                      <div className="flex justify-between text-xs font-semibold text-white/90 mb-1">
                        <span>{trait}</span>
                        <span>{score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-400 rounded-full" style={{ width: `${score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Matched Recommendations Grid */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
                  Tailored Match Engine
                </span>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-1">
                  Top Destinations for Your Travel DNA
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden">
                        <img
                          src={place.img}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded-lg text-xs font-bold text-slate-800">
                          ⭐ {place.rating}
                        </div>
                      </div>
                      <div className="p-5">
                        <span className="text-[11px] font-bold text-sky-600 uppercase">{place.state}</span>
                        <h4 className="text-lg font-bold text-slate-800 mt-0.5">{place.name}</h4>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                          {place.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex gap-2">
                      <Link
                        to={`/destination/${place.name.toLowerCase()}`}
                        className="flex-1 text-center bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl border border-slate-100 transition-colors"
                      >
                        Explore
                      </Link>
                      <Link
                        to={`/planner?destination=${encodeURIComponent(place.name)}`}
                        className="flex-1 text-center bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                      >
                        Plan Itinerary
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <span className="text-lg font-bold text-white">TravelMate AI</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} TravelMate AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TravelDNA;

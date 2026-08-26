import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Places from "../data/Places";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Destinations() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search") || "";
    setSearchQuery(searchParam);
  }, [location.search]);

  const states = ["All", ...new Set(Places.map((p) => p.state))];

  const filteredPlaces = Places.filter((place) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      place.name.toLowerCase().includes(query) ||
      place.state.toLowerCase().includes(query) ||
      place.description.toLowerCase().includes(query) ||
      place.attractions?.some(a => a.toLowerCase().includes(query)) ||
      place.food?.some(f => f.toLowerCase().includes(query));

    const matchesState = selectedState === "All" || place.state === selectedState;

    return matchesSearch && matchesState;
  });

  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Curated All-India Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Explore Destinations
            </h1>
            <p className="text-slate-600 dark:text-[#9CA3AF] mt-2 text-xs sm:text-sm">
              Find your next place to explore across 50 verified Indian destinations.
            </p>
          </div>
          <div className="w-full md:w-80 flex items-center bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] rounded-xl px-3.5 py-2.5 shadow-xs focus-within:border-sky-500/60 transition-colors">
            <span className="text-sky-600 dark:text-sky-400 mr-2.5 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city, food, attraction..."
              className="w-full bg-transparent outline-none text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6B7280]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-slate-400 dark:text-[#6B7280] hover:text-slate-700 dark:hover:text-white text-xs px-1 font-bold cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 max-h-36 overflow-y-auto p-1">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer shadow-xs ${
                selectedState === state
                  ? "bg-sky-600 dark:bg-sky-500 border-sky-600 dark:border-sky-500 text-white dark:text-slate-950 font-bold"
                  : "bg-white dark:bg-[#0F0F0F] border-slate-200 dark:border-[#262626] text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-50 dark:hover:bg-[#151515]"
              }`}
            >
              {state}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-[#6B7280] font-medium mb-6">
          Showing {filteredPlaces.length} of {Places.length} destinations
        </p>
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center sm:justify-items-stretch">
            {filteredPlaces.map((place) => (
              <Card
                key={place.id}
                name={place.name}
                state={place.state}
                img={place.img}
                images={place.images}
                rating={place.rating}
                weather={place.weather}
                budget={place.budget}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] p-8 max-w-lg mx-auto mt-6 shadow-xs">
            <span className="text-4xl">🏝️</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">No destinations found</h3>
            <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-2 leading-relaxed">
              We couldn't find any destinations matching "{searchQuery}" in state "{selectedState}". Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedState("All");
              }}
              className="mt-6 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Destinations;
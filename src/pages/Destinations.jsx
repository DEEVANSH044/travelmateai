import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Places from "../data/Places";
import Card from "../components/Card";
import Nav from "../components/Nav";

function Destinations() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  // Read search query from URL on load/change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search") || "";
    setSearchQuery(searchParam);
  }, [location.search]);

  // Unique list of states for filter pills
  const states = ["All", ...new Set(Places.map((p) => p.state))];

  // Filter places based on search query and selected state
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
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title & Search bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
              Curated All-India Catalog
            </span>
            <h1 className="text-4xl font-extrabold text-slate-850 tracking-tight mt-1">
              Explore 50 Destinations
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              From Himalayan snow peaks to tropical coastal lagoons, explore every corner of India.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80 flex items-center bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-xs">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, food, attraction..."
              className="w-full bg-transparent outline-none text-sm font-medium text-slate-850 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-slate-600 text-xs px-1 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filters pills */}
        <div className="flex flex-wrap gap-2 mb-10 max-h-36 overflow-y-auto p-1">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                selectedState === state
                  ? "bg-sky-600 border-sky-600 text-white shadow-xs"
                  : "bg-white border-gray-100 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-gray-400 font-medium mb-6">
          Showing {filteredPlaces.length} of {Places.length} destinations
        </p>

        {/* Destinations Grid */}
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
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-xs max-w-lg mx-auto mt-6">
            <span className="text-4xl">🏝️</span>
            <h3 className="text-xl font-bold text-slate-800 mt-4">No destinations found</h3>
            <p className="text-gray-500 text-sm mt-2">
              We couldn't find any destinations matching "{searchQuery}" in state "{selectedState}". Try another query!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedState("All");
              }}
              className="mt-6 bg-sky-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-sky-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
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

export default Destinations;
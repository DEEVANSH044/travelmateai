import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Places from "../data/Places";

function Planner() {
  const location = useLocation();

  // Form states
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("Moderate");
  const [companion, setCompanion] = useState("Family");
  const [interests, setInterests] = useState(["Sightseeing"]);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [itinerary, setItinerary] = useState(null);
  const [activeDay, setActiveDay] = useState(1);
  const [savedTrips, setSavedTrips] = useState([]);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [isSavedCurrent, setIsSavedCurrent] = useState(false);

  // Load saved trips from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("travelmate_saved_trips");
      if (stored) setSavedTrips(JSON.parse(stored));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Pre-fill destination from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destParam = params.get("destination") || "";
    if (destParam) {
      setDestination(destParam);
    }
  }, [location.search]);

  const interestOptions = [
    { label: "🏔️ Nature", value: "Nature" },
    { label: "🏃 Adventure", value: "Adventure" },
    { label: "🍛 Food", value: "Food" },
    { label: "🕌 Culture", value: "Culture" },
    { label: "📸 Sightseeing", value: "Sightseeing" }
  ];

  const handleInterestToggle = (val) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleSaveTrip = () => {
    if (!itinerary) return;
    const newTrip = {
      id: Date.now(),
      savedAt: new Date().toLocaleDateString(),
      ...itinerary
    };
    const updated = [newTrip, ...savedTrips.filter(t => t.destination !== itinerary.destination)];
    setSavedTrips(updated);
    localStorage.setItem("travelmate_saved_trips", JSON.stringify(updated));
    setIsSavedCurrent(true);
  };

  const handleLoadTrip = (trip) => {
    setItinerary(trip);
    setDestination(trip.destination);
    setDays(trip.duration);
    setBudget(trip.budgetTier);
    setIsSavedCurrent(true);
    setShowSavedModal(false);
    setActiveDay(1);
  };

  const handleDeleteSaved = (id, e) => {
    e.stopPropagation();
    const updated = savedTrips.filter(t => t.id !== id);
    setSavedTrips(updated);
    localStorage.setItem("travelmate_saved_trips", JSON.stringify(updated));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!destination) {
      alert("Please select a destination to plan!");
      return;
    }

    setIsLoading(true);
    setLoadingStep(0);
    setItinerary(null);
    setIsSavedCurrent(false);

    // Dynamic step progress mock intervals
    const stepIntervals = [500, 1000, 1500, 2000];
    stepIntervals.forEach((time, index) => {
      setTimeout(() => {
        setLoadingStep(index + 1);
      }, time);
    });

    setTimeout(() => {
      // Mock generated itinerary data based on selection
      const matchedPlace = Places.find(
        (p) => p.name.toLowerCase() === destination.toLowerCase()
      ) || {
        name: destination,
        state: "India",
        weather: "22°C",
        budget: "₹15,000",
        hotels: ["The Grand Stay", "Peak View Residency"],
        food: ["Traditional Thali", "Local Street Food"],
        attractions: ["City Palace", "Main Street Viewpoint", "Botanical Heritage Garden"]
      };

      // Construct day schedules
      const generatedDays = [];
      const attractionsList = matchedPlace.attractions || ["Old City Heritage Walk", "Valley Sunset Point", "Local Crafts Bazaar"];

      for (let i = 1; i <= days; i++) {
        const attr1 = attractionsList[(i * 2 - 2) % attractionsList.length];
        const attr2 = attractionsList[(i * 2 - 1) % attractionsList.length];
        generatedDays.push({
          day: i,
          schedule: [
            {
              time: "🌅 Morning (08:30 AM)",
              title: `Explore ${attr1}`,
              desc: `Start the day with breakfast at local cafe, followed by a guided tour of ${attr1}. Great lighting for photos.`
            },
            {
              time: "☀️ Afternoon (01:00 PM)",
              title: `Authentic Lunch & ${attr2}`,
              desc: `Enjoy local ${matchedPlace.food?.[i % (matchedPlace.food?.length || 1)] || "cuisine"}, followed by visiting ${attr2}.`
            },
            {
              time: "🌆 Evening (06:00 PM)",
              title: "Sunset Promenade & Cultural Dining",
              desc: `Stroll through the town square, enjoy evening cultural views, and relax with traditional hospitality.`
            }
          ]
        });
      }

      // Dynamic packing list
      let packingList = ["Comfortable walking shoes", "Sunglasses", "Reusable water bottle", "Camera / Power bank"];
      if (matchedPlace.weather && matchedPlace.weather.includes("°") && parseFloat(matchedPlace.weather) < 18) {
        packingList.push("Heavy woolens & Thermals", "Gloves & Beanie", "Lip balm & Moisturizer");
      } else {
        packingList.push("Breathable cottons", "Sunscreen SPF 50", "Cap / Hat", "Light sandals");
      }

      // Cost estimation based on budget tier and days
      const multiplier = budget === "Budget" ? 2500 : budget === "Moderate" ? 5500 : 12000;
      const totalCostNum = multiplier * days;

      // Budget breakdown categories
      const budgetBreakdown = [
        { category: "🏨 Hotels & Lodging", percent: 40, amount: Math.round(totalCostNum * 0.40) },
        { category: "🚕 Transit & Cab Hire", percent: 25, amount: Math.round(totalCostNum * 0.25) },
        { category: "🍛 Food & Dining", percent: 20, amount: Math.round(totalCostNum * 0.20) },
        { category: "🎟️ Entry Tickets & Activities", percent: 15, amount: Math.round(totalCostNum * 0.15) }
      ];

      setItinerary({
        destination: matchedPlace.name,
        state: matchedPlace.state,
        weather: matchedPlace.weather,
        budgetTier: budget,
        duration: days,
        days: generatedDays,
        hotelSuggestion: matchedPlace.hotels?.[0] || "Premier Resort",
        foodSuggestion: matchedPlace.food?.[0] || "Local Specialty",
        packing: packingList,
        totalCostNum,
        estCost: `₹${totalCostNum.toLocaleString()}`,
        breakdown: budgetBreakdown
      });

      setIsLoading(false);
      setActiveDay(1);
    }, 2400);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header & Saved Trips Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
              Smart Travel Generator
            </span>
            <h1 className="text-4xl font-extrabold text-slate-850 tracking-tight mt-1">
              🤖 AI Itinerary Planner
            </h1>
            <p className="text-gray-500 mt-2 text-sm max-w-xl">
              Configure your preferences below to assemble an optimized hour-by-hour roadmap with budget breakdown.
            </p>
          </div>

          <button
            onClick={() => setShowSavedModal(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-sky-500 px-5 py-2.5 rounded-2xl text-xs font-bold text-slate-700 hover:text-sky-600 shadow-xs transition-all duration-200 cursor-pointer"
          >
            <span>📁</span>
            <span>Saved Trips ({savedTrips.length})</span>
          </button>
        </div>

        {/* Form and Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column: Form Controls */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Trip Parameters</h2>

            <form onSubmit={handleGenerate} className="space-y-6">
              {/* Destination */}
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-2 uppercase tracking-wide">
                  Destination (50 Available)
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="">Select a Destination</option>
                  {Places.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} — {p.state}
                    </option>
                  ))}
                  <option value="Custom">Custom City...</option>
                </select>
                {destination === "Custom" && (
                  <input
                    type="text"
                    placeholder="Enter custom city..."
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full mt-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-sky-500 transition-colors"
                  />
                )}
              </div>

              {/* Trip Duration */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  <span>Duration</span>
                  <span className="text-sky-600">{days} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-sky-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Budget Tier */}
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-2.5 uppercase tracking-wide">
                  Budget Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Budget", "Moderate", "Luxury"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        budget === tier
                          ? "bg-slate-800 border-slate-800 text-white shadow-xs"
                          : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Companion Style */}
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-2.5 uppercase tracking-wide">
                  Travel Companion
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Solo", "Couple", "Family", "Friends"].map((comp) => (
                    <button
                      type="button"
                      key={comp}
                      onClick={() => setCompanion(comp)}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        companion === comp
                          ? "bg-sky-600 border-sky-600 text-white"
                          : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-2.5 uppercase tracking-wide">
                  Interests & Vibe
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => handleInterestToggle(opt.value)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-150 cursor-pointer ${
                        interests.includes(opt.value)
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>✨</span>
                <span>Generate Itinerary</span>
              </button>
            </form>
          </div>

          {/* Right Column: Results Display */}
          <div className="lg:col-span-2 min-h-[450px]">
            {/* 1. Empty State */}
            {!isLoading && !itinerary && (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-xs flex flex-col items-center justify-center h-full min-h-[400px]">
                <span className="text-5xl animate-bounce">🤖</span>
                <h3 className="text-xl font-bold text-slate-800 mt-4">AI Ready to Plan</h3>
                <p className="text-gray-500 text-sm mt-2 max-w-sm">
                  Adjust preferences on the left and click "Generate Itinerary" to assemble your custom schedule and cost breakdown.
                </p>
              </div>
            )}

            {/* 2. Loading State */}
            {isLoading && (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 shadow-xs flex flex-col items-center justify-center h-full min-h-[400px]">
                {/* Spinner */}
                <div className="relative w-16 h-16 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-sky-100" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-sky-600 animate-spin" />
                </div>

                <h3 className="text-lg font-bold text-slate-850">Analyzing routes & local timings...</h3>

                {/* Progressive step metrics */}
                <div className="mt-8 space-y-3.5 w-full max-w-xs text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 1 ? "text-emerald-500" : "text-gray-300"}>
                      {loadingStep >= 1 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 0 ? "text-slate-800 animate-pulse" : loadingStep > 0 ? "text-slate-400" : ""}>
                      Analyzing seasonal conditions in {destination}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 2 ? "text-emerald-500" : "text-gray-300"}>
                      {loadingStep >= 2 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 1 ? "text-slate-800 animate-pulse" : loadingStep > 1 ? "text-slate-400" : ""}>
                      Selecting stays matching {budget} budget
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 3 ? "text-emerald-500" : "text-gray-300"}>
                      {loadingStep >= 3 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 2 ? "text-slate-800 animate-pulse" : loadingStep > 2 ? "text-slate-400" : ""}>
                      Mapping local culinary & attractions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 4 ? "text-emerald-500" : "text-gray-300"}>
                      {loadingStep >= 4 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 3 ? "text-slate-800 animate-pulse" : loadingStep > 3 ? "text-slate-400" : ""}>
                      Generating categorized budget breakdown
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Result State */}
            {!isLoading && itinerary && (
              <div className="space-y-6">
                {/* Meta details header */}
                <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 p-6 rounded-3xl text-white shadow-md">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="text-xs bg-sky-500 text-white font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {itinerary.state}
                      </span>
                      <h2 className="text-2xl font-extrabold mt-1">{itinerary.destination} Itinerary</h2>
                      <p className="text-white/70 text-xs mt-1">
                        Designed for a {itinerary.duration}-day {companion.toLowerCase()} stay • {interests.join(", ")} vibes.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-white/50 block">Est. Trip Cost</span>
                      <span className="text-xl font-black text-emerald-400">{itinerary.estCost}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/10 text-center text-xs">
                    <div>
                      <span className="text-white/50 block text-[10px]">Weather</span>
                      <span className="font-bold">{itinerary.weather}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block text-[10px]">Lodging Choice</span>
                      <span className="font-bold truncate max-w-[120px] inline-block">{itinerary.hotelSuggestion}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block text-[10px]">Cuisine Pick</span>
                      <span className="font-bold truncate max-w-[120px] inline-block">{itinerary.foodSuggestion}</span>
                    </div>
                  </div>
                </div>

                {/* Categorized Budget Breakdown */}
                {itinerary.breakdown && (
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
                    <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-1.5">
                      <span>💰</span> Estimated Budget Breakdown
                    </h3>
                    <div className="space-y-3">
                      {itinerary.breakdown.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                            <span>{item.category}</span>
                            <span className="text-slate-900 font-bold">₹{item.amount.toLocaleString()} ({item.percent}%)</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full transition-all duration-500"
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Packing List Checklist */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                    🎒 Recommended Packing Checklist
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
                    {itinerary.packing.map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-slate-850">
                        <input type="checkbox" className="accent-sky-600" defaultChecked />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Day-by-Day Timeline */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
                  {/* Days tab selector */}
                  <div className="flex border-b border-gray-100 overflow-x-auto bg-slate-50/50">
                    {itinerary.days.map((d) => (
                      <button
                        key={d.day}
                        onClick={() => setActiveDay(d.day)}
                        className={`flex-1 py-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                          activeDay === d.day
                            ? "border-sky-600 text-sky-600 bg-white"
                            : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        Day {d.day}
                      </button>
                    ))}
                  </div>

                  {/* Day Content */}
                  <div className="p-6 space-y-6">
                    {itinerary.days
                      .filter((d) => d.day === activeDay)
                      .map((d) => (
                        <div key={d.day} className="relative pl-6 border-l-2 border-sky-100 space-y-8 py-2">
                          {d.schedule.map((item, idx) => (
                            <div key={idx} className="relative group">
                              <div className="absolute -left-[31px] top-1 bg-white border-2 border-sky-500 w-4 h-4 rounded-full group-hover:bg-sky-600 transition-colors" />
                              <div>
                                <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md uppercase">
                                  {item.time}
                                </span>
                                <h4 className="text-sm font-bold text-slate-800 mt-2">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Action Buttons: Save Trip & Download PDF */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleSaveTrip}
                    className={`flex-1 font-bold py-3.5 rounded-2xl shadow-xs transition-all text-xs text-center cursor-pointer flex items-center justify-center gap-2 ${
                      isSavedCurrent
                        ? "bg-emerald-600 text-white cursor-default"
                        : "bg-white border border-gray-200 text-slate-800 hover:border-sky-600 hover:text-sky-600"
                    }`}
                  >
                    <span>{isSavedCurrent ? "✓ Saved to My Trips" : "💾 Save Trip to Profile"}</span>
                  </button>
                  <button
                    onClick={() => alert("📥 Downloading Complete Travel Map as PDF...")}
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-2xl shadow-xs transition-colors text-xs text-center cursor-pointer"
                  >
                    Download PDF Schedule
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Saved Trips Modal */}
      {showSavedModal && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4"
          onClick={() => setShowSavedModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span>📁</span> My Saved Itineraries ({savedTrips.length})
              </h3>
              <button
                onClick={() => setShowSavedModal(false)}
                className="text-gray-400 hover:text-slate-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 py-2">
              {savedTrips.length > 0 ? (
                savedTrips.map((trip) => (
                  <div
                    key={trip.id}
                    onClick={() => handleLoadTrip(trip)}
                    className="p-4 rounded-2xl border border-gray-100 hover:border-sky-500 hover:bg-sky-50/40 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-sky-600">
                        {trip.destination} ({trip.duration} Days)
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {trip.budgetTier} • Saved on {trip.savedAt || "Recently"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-emerald-600">{trip.estCost}</span>
                      <button
                        onClick={(e) => handleDeleteSaved(trip.id, e)}
                        className="text-gray-300 hover:text-rose-600 text-sm font-bold px-2 py-1"
                        title="Delete"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-400 text-xs">
                  No saved trips yet. Generate an itinerary and click "Save Trip".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Planner;

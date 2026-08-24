import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
              desc: `Start the day with local breakfast, followed by a scenic guided tour of ${attr1}. Optimal lighting for photography.`
            },
            {
              time: "☀️ Afternoon (01:00 PM)",
              title: `Authentic Lunch & ${attr2}`,
              desc: `Enjoy local specialty ${matchedPlace.food?.[i % (matchedPlace.food?.length || 1)] || "cuisine"}, followed by visiting ${attr2}.`
            },
            {
              time: "🌆 Evening (06:00 PM)",
              title: "Sunset Promenade & Cultural Dining",
              desc: `Stroll through the town quarter, enjoy panoramic evening views, and relax with regional culinary hospitality.`
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
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Header & Saved Trips Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Smart Travel Generator
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              AI Itinerary Planner
            </h1>
            <p className="text-slate-600 dark:text-[#9CA3AF] mt-2 text-xs sm:text-sm max-w-xl">
              Configure your preferences below to assemble an optimized hour-by-hour roadmap with budget breakdown.
            </p>
          </div>

          <button
            onClick={() => setShowSavedModal(true)}
            className="flex items-center gap-2 bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] hover:border-sky-500/60 px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 shadow-xs transition-all duration-200 cursor-pointer"
          >
            <span>📁</span>
            <span>Saved Trips ({savedTrips.length})</span>
          </button>
        </div>

        {/* Form and Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="bg-white dark:bg-[#0F0F0F] p-7 rounded-3xl border border-slate-200 dark:border-[#262626] lg:sticky lg:top-24 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5">Trip Parameters</h2>

            <form onSubmit={handleGenerate} className="space-y-5">
              {/* Destination */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Destination (50 Available)
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-sky-500 transition-colors cursor-pointer"
                >
                  <option value="" className="bg-white dark:bg-[#141414] text-slate-900 dark:text-white">Select a Destination</option>
                  {Places.map((p) => (
                    <option key={p.id} value={p.name} className="bg-white dark:bg-[#141414] text-slate-900 dark:text-white">
                      {p.name} — {p.state}
                    </option>
                  ))}
                  <option value="Custom" className="bg-white dark:bg-[#141414] text-slate-900 dark:text-white">Custom City...</option>
                </select>
                {destination === "Custom" && (
                  <input
                    type="text"
                    placeholder="Enter custom city..."
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full mt-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-sky-500 transition-colors"
                  />
                )}
              </div>

              {/* Trip Duration */}
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] mb-2 uppercase tracking-wide">
                  <span>Duration</span>
                  <span className="text-sky-600 dark:text-sky-400 font-bold">{days} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-sky-600 dark:accent-sky-400 h-1.5 bg-slate-200 dark:bg-[#1F1F1F] rounded-lg cursor-pointer"
                />
              </div>

              {/* Budget Tier */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Budget Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Budget", "Moderate", "Luxury"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        budget === tier
                          ? "bg-sky-600 dark:bg-sky-500 border-sky-600 dark:border-sky-500 text-white dark:text-slate-950 shadow-sm"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#383838]"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Companion Style */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Travel Companion
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Solo", "Couple", "Family", "Friends"].map((comp) => (
                    <button
                      type="button"
                      key={comp}
                      onClick={() => setCompanion(comp)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        companion === comp
                          ? "bg-sky-600 dark:bg-sky-500 border-sky-600 dark:border-sky-500 text-white dark:text-slate-950"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#383838]"
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Interests & Vibe
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {interestOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => handleInterestToggle(opt.value)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                        interests.includes(opt.value)
                          ? "bg-sky-50 dark:bg-sky-500/15 border-sky-400 text-sky-700 dark:text-sky-400 font-bold"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-[#383838]"
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
                className="w-full bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-bold py-3 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-xs sm:text-sm"
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
              <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px] shadow-xs">
                <span className="text-4xl">🤖</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">AI Ready to Plan</h3>
                <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-2 max-w-sm leading-relaxed">
                  Adjust preferences on the left and click "Generate Itinerary" to assemble your custom schedule and cost breakdown.
                </p>
              </div>
            )}

            {/* 2. Loading State */}
            {isLoading && (
              <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] p-12 flex flex-col items-center justify-center h-full min-h-[400px] shadow-xs">
                {/* Spinner */}
                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 rounded-full border-3 border-slate-200 dark:border-[#1F1F1F]" />
                  <div className="absolute inset-0 rounded-full border-3 border-t-sky-600 dark:border-t-sky-400 animate-spin" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">Analyzing routes & local timings...</h3>

                {/* Progressive step metrics */}
                <div className="mt-7 space-y-3 w-full max-w-xs text-xs font-semibold text-slate-600 dark:text-[#9CA3AF]">
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 1 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-[#6B7280]"}>
                      {loadingStep >= 1 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 0 ? "text-slate-900 dark:text-white animate-pulse" : loadingStep > 0 ? "text-slate-500 dark:text-[#6B7280]" : ""}>
                      Analyzing weather in {destination}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 2 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-[#6B7280]"}>
                      {loadingStep >= 2 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 1 ? "text-slate-900 dark:text-white animate-pulse" : loadingStep > 1 ? "text-slate-500 dark:text-[#6B7280]" : ""}>
                      Selecting stays matching {budget} tier
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 3 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-[#6B7280]"}>
                      {loadingStep >= 3 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 2 ? "text-slate-900 dark:text-white animate-pulse" : loadingStep > 2 ? "text-slate-500 dark:text-[#6B7280]" : ""}>
                      Mapping local culinary & attractions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={loadingStep >= 4 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-[#6B7280]"}>
                      {loadingStep >= 4 ? "✓" : "○"}
                    </span>
                    <span className={loadingStep === 3 ? "text-slate-900 dark:text-white animate-pulse" : loadingStep > 3 ? "text-slate-500 dark:text-[#6B7280]" : ""}>
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
                <div className="bg-slate-100 dark:bg-[#141414] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] text-sky-600 dark:text-sky-400 font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {itinerary.state}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1.5">{itinerary.destination} Itinerary</h2>
                      <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-1">
                        Designed for a {itinerary.duration}-day {companion.toLowerCase()} stay • {interests.join(", ")} vibes.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 dark:text-[#6B7280] block uppercase">Est. Trip Cost</span>
                      <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">{itinerary.estCost}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-200 dark:border-[#1F1F1F] text-center text-xs">
                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">Weather</span>
                      <span className="font-bold text-slate-900 dark:text-white">{itinerary.weather}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">Lodging Choice</span>
                      <span className="font-bold text-slate-900 dark:text-white truncate max-w-[120px] inline-block">{itinerary.hotelSuggestion}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">Cuisine Pick</span>
                      <span className="font-bold text-slate-900 dark:text-white truncate max-w-[120px] inline-block">{itinerary.foodSuggestion}</span>
                    </div>
                  </div>
                </div>

                {/* Categorized Budget Breakdown */}
                {itinerary.breakdown && (
                  <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <span>💰</span> Estimated Budget Breakdown
                    </h3>
                    <div className="space-y-3">
                      {itinerary.breakdown.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-[#9CA3AF] mb-1">
                            <span>{item.category}</span>
                            <span className="text-slate-900 dark:text-white font-bold">₹{item.amount.toLocaleString()} ({item.percent}%)</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky-600 dark:bg-sky-400 rounded-full transition-all duration-500"
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Packing List Checklist */}
                <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    🎒 Recommended Packing Checklist
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-[#9CA3AF] font-medium">
                    {itinerary.packing.map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-slate-950 dark:hover:text-white p-2 rounded-lg bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]">
                        <input type="checkbox" className="accent-sky-600 dark:accent-sky-400" defaultChecked />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Day-by-Day Timeline */}
                <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] overflow-hidden shadow-xs">
                  {/* Days tab selector */}
                  <div className="flex border-b border-slate-200 dark:border-[#1F1F1F] overflow-x-auto bg-slate-100 dark:bg-[#0A0A0A]">
                    {itinerary.days.map((d) => (
                      <button
                        key={d.day}
                        onClick={() => setActiveDay(d.day)}
                        className={`flex-1 py-3.5 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                          activeDay === d.day
                            ? "border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400 bg-white dark:bg-[#0F0F0F]"
                            : "border-transparent text-slate-500 dark:text-[#6B7280] hover:text-slate-900 dark:hover:text-white"
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
                        <div key={d.day} className="relative pl-6 border-l border-slate-200 dark:border-[#262626] space-y-6 py-1">
                          {d.schedule.map((item, idx) => (
                            <div key={idx} className="relative group">
                              <div className="absolute -left-[31px] top-1 bg-white dark:bg-[#0F0F0F] border-2 border-sky-600 dark:border-sky-400 w-3.5 h-3.5 rounded-full group-hover:bg-sky-600 dark:group-hover:bg-sky-400 transition-colors" />
                              <div>
                                <span className="text-[10px] bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-sky-600 dark:text-sky-400 font-bold px-2 py-0.5 rounded-md uppercase">
                                  {item.time}
                                </span>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-1 leading-relaxed">
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
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleSaveTrip}
                    className={`flex-1 font-bold py-3 rounded-xl transition-all text-xs text-center cursor-pointer flex items-center justify-center gap-2 ${
                      isSavedCurrent
                        ? "bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 cursor-default"
                        : "bg-white dark:bg-[#141414] hover:bg-slate-100 dark:hover:bg-[#1f1f1f] border border-slate-200 dark:border-[#262626] text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/50 shadow-xs"
                    }`}
                  >
                    <span>{isSavedCurrent ? "✓ Saved to My Trips" : "💾 Save Trip to Profile"}</span>
                  </button>
                  <button
                    onClick={() => alert("📥 Downloading Complete Travel Map as PDF...")}
                    className="flex-1 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-bold py-3 rounded-xl transition-colors text-xs text-center cursor-pointer shadow-xs"
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
          className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setShowSavedModal(false)}
        >
          <div
            className="bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#1F1F1F]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>📁</span> My Saved Itineraries ({savedTrips.length})
              </h3>
              <button
                onClick={() => setShowSavedModal(false)}
                className="text-slate-400 dark:text-[#9CA3AF] hover:text-slate-700 dark:hover:text-white text-base font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 py-2">
              {savedTrips.length > 0 ? (
                savedTrips.map((trip) => (
                  <div
                    key={trip.id}
                    onClick={() => handleLoadTrip(trip)}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] hover:border-sky-500/60 hover:bg-slate-100 dark:hover:bg-[#1a1a1a] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {trip.destination} ({trip.duration} Days)
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-[#6B7280] mt-0.5">
                        {trip.budgetTier} • Saved on {trip.savedAt || "Recently"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">{trip.estCost}</span>
                      <button
                        onClick={(e) => handleDeleteSaved(trip.id, e)}
                        className="text-slate-400 dark:text-[#6B7280] hover:text-red-600 dark:hover:text-red-400 text-xs font-bold px-2 py-1 cursor-pointer"
                        title="Delete"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400 dark:text-[#6B7280] text-xs">
                  No saved trips yet. Generate an itinerary and click "Save Trip".
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Planner;

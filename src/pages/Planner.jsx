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

  // Convert MongoDB trip data into Planner format
  const normalizeTrip = (trip) => {
    const duration = trip.duration || trip.days || 0;

    const budgetTier =
      trip.budgetTier || trip.budget || "Moderate";

    const daysArray = Array.isArray(trip.days)
      ? trip.days
      : Array.isArray(trip.itinerary)
      ? trip.itinerary
      : [];

    const packing = Array.isArray(trip.packing)
      ? trip.packing
      : Array.isArray(trip.packingList)
      ? trip.packingList
      : [];

    const breakdown = Array.isArray(trip.breakdown)
      ? trip.breakdown
      : Array.isArray(trip.budgetBreakdown)
      ? trip.budgetBreakdown
      : [];

    const totalCostNum =
      trip.totalCostNum ||
      (budgetTier === "Budget"
        ? 2500
        : budgetTier === "Moderate"
        ? 5500
        : 12000) * Number(duration);

    return {
      ...trip,
      duration: Number(duration),
      budgetTier,
      days: daysArray,
      packing,
      breakdown,
      totalCostNum,
      estCost:
        trip.estCost ||
        `₹${Number(totalCostNum).toLocaleString()}`,
      savedAt:
        trip.savedAt ||
        (trip.createdAt
          ? new Date(trip.createdAt).toLocaleDateString()
          : "Recently"),
    };
  };

  // Load saved trips from MongoDB
  useEffect(() => {
    const loadSavedTrips = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const response = await fetch(
          "http://localhost:5005/api/trips",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to load trips:", data);
          return;
        }

        setSavedTrips(data.map(normalizeTrip));
      } catch (error) {
        console.error("Load saved trips error:", error);
      }
    };

    loadSavedTrips();
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
    { label: "📸 Sightseeing", value: "Sightseeing" },
  ];

  const handleInterestToggle = (val) => {
    setInterests((prev) =>
      prev.includes(val)
        ? prev.filter((i) => i !== val)
        : [...prev, val]
    );
  };

  // Save current itinerary
  const handleSaveTrip = async () => {
    if (!itinerary) return;

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to save your trip.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5005/api/trips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            destination: itinerary.destination,
            days: itinerary.duration,
            budget: itinerary.budgetTier,
            companion,
            interests,
            itinerary: itinerary.days,
            packingList: itinerary.packing,
            budgetBreakdown: itinerary.breakdown,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to save trip.");
        return;
      }

      const normalizedTrip = normalizeTrip(data.trip);

      setSavedTrips((prev) => [
        normalizedTrip,
        ...prev,
      ]);

      setIsSavedCurrent(true);

      console.log("Trip saved:", data.trip);
    } catch (error) {
      console.error("Save trip error:", error);
      alert("Unable to connect to the server.");
    }
  };

  // Load saved trip
  const handleLoadTrip = (trip) => {
    const normalizedTrip = normalizeTrip(trip);

    setItinerary(normalizedTrip);
    setDestination(normalizedTrip.destination);
    setDays(normalizedTrip.duration || 3);
    setBudget(
      normalizedTrip.budgetTier || "Moderate"
    );
    setCompanion(
      normalizedTrip.companion || "Family"
    );

    setInterests(
      normalizedTrip.interests?.length
        ? normalizedTrip.interests
        : ["Sightseeing"]
    );

    setIsSavedCurrent(true);
    setShowSavedModal(false);
    setActiveDay(1);
  };

  // Delete saved trip
  const handleDeleteSaved = async (id, e) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await fetch(
        `http://localhost:5005/api/trips/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to delete trip.");
        return;
      }

      setSavedTrips((prev) =>
        prev.filter((trip) => trip._id !== id)
      );

      console.log("Trip deleted:", data);
    } catch (error) {
      console.error("Delete trip error:", error);
    }
  };

  // Generate AI itinerary
  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!destination) {
      alert("Please select a destination to plan!");
      return;
    }

    setIsLoading(true);
    setLoadingStep(0);
    setItinerary(null);
    setIsSavedCurrent(false);

    try {
      // Loading step 1
      setTimeout(() => {
        setLoadingStep(1);
      }, 400);

      // Loading step 2
      setTimeout(() => {
        setLoadingStep(2);
      }, 900);

      // Loading step 3
      setTimeout(() => {
        setLoadingStep(3);
      }, 1400);

      const response = await fetch(
        "http://localhost:5005/api/ai/plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            days,
            budget,
            companion,
            interests,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "AI generation failed"
        );
      }

      console.log("Gemini itinerary:", data.trip);

      setLoadingStep(4);

      const aiTrip = data.trip;

      // Safety fallback for state/weather
      const matchedPlace = Places.find(
        (p) =>
          p.name.toLowerCase() ===
          destination.toLowerCase()
      );

      const finalTrip = {
        ...aiTrip,

        destination:
          aiTrip.destination || destination,

        state:
          aiTrip.state ||
          matchedPlace?.state ||
          "India",

        weather:
          aiTrip.weather ||
          matchedPlace?.weather ||
          "22°C",

        budgetTier:
          aiTrip.budgetTier || budget,

        duration:
          Number(aiTrip.duration) || days,

        days:
          Array.isArray(aiTrip.days)
            ? aiTrip.days
            : [],

        hotelSuggestion:
          aiTrip.hotelSuggestion ||
          matchedPlace?.hotels?.[0] ||
          "Premier Resort",

        foodSuggestion:
          aiTrip.foodSuggestion ||
          matchedPlace?.food?.[0] ||
          "Local Specialty",

        packing:
          Array.isArray(aiTrip.packing)
            ? aiTrip.packing
            : [
                "Comfortable walking shoes",
                "Reusable water bottle",
                "Sunglasses",
                "Power bank",
              ],

        totalCostNum:
          Number(aiTrip.totalCostNum) || 0,

        estCost:
          aiTrip.estCost ||
          `₹${Number(
            aiTrip.totalCostNum || 0
          ).toLocaleString()}`,

        breakdown:
          Array.isArray(aiTrip.breakdown)
            ? aiTrip.breakdown
            : [],
      };

      setItinerary(finalTrip);
      setActiveDay(1);
    } catch (error) {
      console.error("AI itinerary error:", error);

      alert(
        error.message ||
          "Unable to generate AI itinerary."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Smart Travel Generator
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              AI Itinerary Planner
            </h1>

            <p className="text-slate-600 dark:text-[#9CA3AF] mt-2 text-xs sm:text-sm max-w-xl">
              Configure your preferences below to assemble an
              optimized hour-by-hour roadmap with budget breakdown.
            </p>
          </div>

          <button
            onClick={() => setShowSavedModal(true)}
            className="flex items-center gap-2 bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] hover:border-sky-500/60 px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 shadow-xs transition-all duration-200 cursor-pointer"
          >
            <span>📁</span>
            <span>
              Saved Trips ({savedTrips.length})
            </span>
          </button>
        </div>

        {/* Form and Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left Column */}
          <div className="bg-white dark:bg-[#0F0F0F] p-7 rounded-3xl border border-slate-200 dark:border-[#262626] lg:sticky lg:top-24 shadow-xs">

            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
              Trip Parameters
            </h2>

            <form
              onSubmit={handleGenerate}
              className="space-y-5"
            >

              {/* Destination */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Destination (50 Available)
                </label>

                <select
                  value={destination}
                  onChange={(e) =>
                    setDestination(e.target.value)
                  }
                  className="w-full bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-sky-500 transition-colors cursor-pointer"
                >
                  <option value="">
                    Select a Destination
                  </option>

                  {Places.map((p) => (
                    <option
                      key={p.id}
                      value={p.name}
                    >
                      {p.name} — {p.state}
                    </option>
                  ))}

                  <option value="Custom">
                    Custom City...
                  </option>
                </select>

                {destination === "Custom" && (
                  <input
                    type="text"
                    placeholder="Enter custom city..."
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                    className="w-full mt-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-sky-500 transition-colors"
                  />
                )}
              </div>

              {/* Duration */}
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] mb-2 uppercase tracking-wide">
                  <span>Duration</span>

                  <span className="text-sky-600 dark:text-sky-400 font-bold">
                    {days} Days
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) =>
                    setDays(Number(e.target.value))
                  }
                  className="w-full accent-sky-600 dark:accent-sky-400 h-1.5 bg-slate-200 dark:bg-[#1F1F1F] rounded-lg cursor-pointer"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Budget Level
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    "Budget",
                    "Moderate",
                    "Luxury",
                  ].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        budget === tier
                          ? "bg-sky-600 dark:bg-sky-500 border-sky-600 dark:border-sky-500 text-white dark:text-slate-950 shadow-sm"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF]"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Companion */}
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-[#9CA3AF] block mb-2 uppercase tracking-wide">
                  Travel Companion
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Solo",
                    "Couple",
                    "Family",
                    "Friends",
                  ].map((comp) => (
                    <button
                      type="button"
                      key={comp}
                      onClick={() =>
                        setCompanion(comp)
                      }
                      className={`py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        companion === comp
                          ? "bg-sky-600 dark:bg-sky-500 border-sky-600 dark:border-sky-500 text-white dark:text-slate-950"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF]"
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
                      onClick={() =>
                        handleInterestToggle(
                          opt.value
                        )
                      }
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                        interests.includes(opt.value)
                          ? "bg-sky-50 dark:bg-sky-500/15 border-sky-400 text-sky-700 dark:text-sky-400 font-bold"
                          : "bg-slate-100 dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-700 dark:text-[#9CA3AF]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
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

          {/* Right Column */}
          <div className="lg:col-span-2 min-h-[450px]">

            {/* Empty */}
            {!isLoading && !itinerary && (
              <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px] shadow-xs">
                <span className="text-4xl">
                  🤖
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">
                  AI Ready to Plan
                </h3>

                <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-2 max-w-sm leading-relaxed">
                  Adjust preferences on the left and click
                  "Generate Itinerary" to assemble your custom
                  schedule and cost breakdown.
                </p>
              </div>
            )}

            {/* Loading */}
            {isLoading && (
              <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] p-12 flex flex-col items-center justify-center h-full min-h-[400px] shadow-xs">

                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 rounded-full border-3 border-slate-200 dark:border-[#1F1F1F]" />

                  <div className="absolute inset-0 rounded-full border-3 border-t-sky-600 dark:border-t-sky-400 animate-spin" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  AI is creating your itinerary...
                </h3>

                <div className="mt-7 space-y-3 w-full max-w-xs text-xs font-semibold text-slate-600 dark:text-[#9CA3AF]">

                  <div className="flex items-center gap-2">
                    <span>
                      {loadingStep >= 1
                        ? "✓"
                        : "○"}
                    </span>

                    <span>
                      Analyzing destination
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>
                      {loadingStep >= 2
                        ? "✓"
                        : "○"}
                    </span>

                    <span>
                      Matching your preferences
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>
                      {loadingStep >= 3
                        ? "✓"
                        : "○"}
                    </span>

                    <span>
                      Planning daily activities
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>
                      {loadingStep >= 4
                        ? "✓"
                        : "○"}
                    </span>

                    <span>
                      Generating budget & packing list
                    </span>
                  </div>

                </div>
              </div>
            )}

            {/* Result */}
            {!isLoading && itinerary && (
              <div className="space-y-6">

                {/* Meta Header */}
                <div className="bg-slate-100 dark:bg-[#141414] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">

                  <div className="flex flex-wrap justify-between items-start gap-4">

                    <div>
                      <span className="text-[10px] bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] text-sky-600 dark:text-sky-400 font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {itinerary.state}
                      </span>

                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1.5">
                        {itinerary.destination} Itinerary
                      </h2>

                      <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-1">
                        Designed for a{" "}
                        {itinerary.duration}-day{" "}
                        {companion.toLowerCase()} stay •{" "}
                        {interests.join(", ")} vibes.
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 dark:text-[#6B7280] block uppercase">
                        Est. Trip Cost
                      </span>

                      <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                        {itinerary.estCost}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-200 dark:border-[#1F1F1F] text-center text-xs">

                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">
                        Weather
                      </span>

                      <span className="font-bold text-slate-900 dark:text-white">
                        {itinerary.weather}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">
                        Lodging Choice
                      </span>

                      <span className="font-bold text-slate-900 dark:text-white truncate max-w-[120px] inline-block">
                        {itinerary.hotelSuggestion}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-[#6B7280] block text-[10px]">
                        Cuisine Pick
                      </span>

                      <span className="font-bold text-slate-900 dark:text-white truncate max-w-[120px] inline-block">
                        {itinerary.foodSuggestion}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Budget Breakdown */}
                {itinerary.breakdown?.length > 0 && (
                  <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">

                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <span>💰</span>
                      Estimated Budget Breakdown
                    </h3>

                    <div className="space-y-3">
                      {itinerary.breakdown.map(
                        (item, idx) => (
                          <div key={idx}>

                            <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-[#9CA3AF] mb-1">

                              <span>
                                {item.category}
                              </span>

                              <span className="text-slate-900 dark:text-white font-bold">
                                ₹
                                {Number(
                                  item.amount || 0
                                ).toLocaleString()}{" "}
                                ({item.percent}%)
                              </span>

                            </div>

                            <div className="w-full h-1.5 bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-full overflow-hidden">

                              <div
                                className="h-full bg-sky-600 dark:bg-sky-400 rounded-full transition-all duration-500"
                                style={{
                                  width: `${item.percent}%`,
                                }}
                              />

                            </div>

                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Packing */}
                <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">

                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    🎒 Recommended Packing Checklist
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-[#9CA3AF] font-medium">

                    {itinerary.packing?.map(
                      (item, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-2 cursor-pointer hover:text-slate-950 dark:hover:text-white p-2 rounded-lg bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]"
                        >
                          <input
                            type="checkbox"
                            className="accent-sky-600 dark:accent-sky-400"
                            defaultChecked
                          />

                          <span>{item}</span>
                        </label>
                      )
                    )}

                  </div>
                </div>

                {/* Day-by-Day Timeline */}
                <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] overflow-hidden shadow-xs">

                  <div className="flex border-b border-slate-200 dark:border-[#1F1F1F] overflow-x-auto bg-slate-100 dark:bg-[#0A0A0A]">

                    {itinerary.days?.map(
                      (d) => (
                        <button
                          key={d.day}
                          onClick={() =>
                            setActiveDay(d.day)
                          }
                          className={`flex-1 py-3.5 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                            activeDay === d.day
                              ? "border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400 bg-white dark:bg-[#0F0F0F]"
                              : "border-transparent text-slate-500 dark:text-[#6B7280] hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          Day {d.day}
                        </button>
                      )
                    )}

                  </div>

                  <div className="p-6 space-y-6">

                    {itinerary.days
                      ?.filter(
                        (d) =>
                          d.day === activeDay
                      )
                      .map((d) => (
                        <div
                          key={d.day}
                          className="relative pl-6 border-l border-slate-200 dark:border-[#262626] space-y-6 py-1"
                        >

                          {d.schedule?.map(
                            (item, idx) => (
                              <div
                                key={idx}
                                className="relative group"
                              >

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
                            )
                          )}

                        </div>
                      ))}

                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={handleSaveTrip}
                    className={`flex-1 font-bold py-3 rounded-xl transition-all text-xs text-center cursor-pointer flex items-center justify-center gap-2 ${
                      isSavedCurrent
                        ? "bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 cursor-default"
                        : "bg-white dark:bg-[#141414] hover:bg-slate-100 dark:hover:bg-[#1f1f1f] border border-slate-200 dark:border-[#262626] text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/50 shadow-xs"
                    }`}
                  >
                    <span>
                      {isSavedCurrent
                        ? "✓ Saved to My Trips"
                        : "💾 Save Trip to Profile"}
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        "📥 Downloading Complete Travel Map as PDF..."
                      )
                    }
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
          onClick={() =>
            setShowSavedModal(false)
          }
        >

          <div
            className="bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-[#1F1F1F]">

              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>📁</span>
                My Saved Itineraries (
                {savedTrips.length})
              </h3>

              <button
                onClick={() =>
                  setShowSavedModal(false)
                }
                className="text-slate-400 dark:text-[#9CA3AF] hover:text-slate-700 dark:hover:text-white text-base font-bold cursor-pointer"
              >
                ✕
              </button>

            </div>

            {/* Saved Trips */}
            <div className="flex-1 overflow-y-auto space-y-2.5 py-2">

              {savedTrips.length > 0 ? (
                savedTrips.map((trip) => (
                  <div
                    key={trip._id}
                    onClick={() =>
                      handleLoadTrip(trip)
                    }
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] hover:border-sky-500/60 hover:bg-slate-100 dark:hover:bg-[#1a1a1a] transition-all cursor-pointer flex items-center justify-between group"
                  >

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {trip.destination} (
                        {trip.duration} Days)
                      </h4>

                      <p className="text-[11px] text-slate-500 dark:text-[#6B7280] mt-0.5">
                        {trip.budgetTier} • Saved on{" "}
                        {trip.savedAt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">

                      <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                        {trip.estCost}
                      </span>

                      <button
                        onClick={(e) =>
                          handleDeleteSaved(
                            trip._id,
                            e
                          )
                        }
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
                  No saved trips yet. Generate an itinerary and click
                  "Save Trip".
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
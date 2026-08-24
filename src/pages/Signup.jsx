import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please check and try again.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Temporary frontend authentication
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white transition-colors duration-300 relative">
      {/* Top right theme toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-[#0F0F0F] hover:bg-slate-100 dark:hover:bg-[#151515] border border-slate-200 dark:border-[#262626] text-sm transition-all duration-200 cursor-pointer shadow-xs"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl border border-slate-200 dark:border-[#262626] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
          {/* Left Column: Brand & Story */}
          <div className="relative min-h-[300px] md:min-h-[500px] p-8 md:p-12 flex flex-col justify-between overflow-hidden bg-slate-900 text-white">
            <img
              src="/images/destinations/goa/hero.jpg"
              alt="Travel India"
              className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-2xl">✈️</span>
                <span className="text-xl font-bold tracking-tight text-white">TravelMate <span className="text-sky-400">AI</span></span>
              </div>

              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/15 rounded-full text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-4">
                Begin Your Journey
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white tracking-tight">
                Join thousands of mindful travelers today.
              </h2>

              <p className="mt-3 text-white/80 text-xs leading-relaxed">
                Create your account to access custom AI travel plans, explore destination insights, and take the Travel DNA quiz.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-6 border-t border-white/15 relative z-10 space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Personalized traveler profiling (Travel DNA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Custom day-by-day itineraries tailored to you</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Instant access across 50 Indian tourist circuits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signup Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-[#0F0F0F]">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Create Account
              </h1>
              <p className="text-slate-500 dark:text-[#9CA3AF] text-xs mt-1">
                Sign up to start planning your dream journey.
              </p>
            </div>

            {error && (
              <div className="mb-5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs font-medium px-4 py-3 rounded-xl flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6B7280] focus:border-sky-500 focus:outline-none transition-colors"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@travelmate.ai"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6B7280] focus:border-sky-500 focus:outline-none transition-colors"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6B7280] focus:border-sky-500 focus:outline-none transition-colors"
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#6B7280] focus:border-sky-500 focus:outline-none transition-colors"
                  autoComplete="new-password"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#1F1F1F] text-center text-xs text-slate-500 dark:text-[#9CA3AF]">
              Already have an account?{" "}
              <Link to="/login" className="text-sky-600 dark:text-sky-400 font-bold hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

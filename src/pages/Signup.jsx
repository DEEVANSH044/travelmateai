import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Brand & Story */}
          <div className="bg-gradient-to-br from-indigo-800 via-sky-700 to-sky-600 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-3xl">✈️</span>
                <span className="text-2xl font-extrabold tracking-tight">TravelMate AI</span>
              </div>

              <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider text-sky-100 mb-4">
                Begin Your Adventure
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                Join thousands of mindful travelers today.
              </h2>

              <p className="mt-4 text-sky-100 text-sm leading-relaxed">
                Create your free account to access custom AI travel plans, explore destination insights, and take the Travel DNA quiz.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-6 border-t border-white/15 relative z-10 space-y-3 text-xs text-sky-100">
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>Personalized traveler profiling (Travel DNA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>Custom day-by-day itineraries tailored to you</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>Instant access across all Indian tourist circuits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signup Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Create Account
              </h1>
              <p className="text-slate-500 text-sm mt-1.5">
                Sign up to start planning your dream journey.
              </p>
            </div>

            {error && (
              <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium px-4 py-3 rounded-xl flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@travelmate.ai"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  autoComplete="new-password"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="text-sky-600 font-bold hover:text-sky-700 hover:underline">
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

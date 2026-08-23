import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
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
          {/* Left Column: Brand & Value Proposition */}
          <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background circles for depth */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-3xl">✈️</span>
                <span className="text-2xl font-extrabold tracking-tight">TravelMate AI</span>
              </div>

              <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider text-sky-100 mb-4">
                Smart Journey Companion
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                Plan smarter, travel deeper, explore better.
              </h2>

              <p className="mt-4 text-sky-100 text-sm leading-relaxed">
                Unlock tailor-made itineraries, curated stays, and authentic local experiences powered by AI.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-6 border-t border-white/15 relative z-10 space-y-3 text-xs text-sky-100">
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>50+ Handpicked Indian destinations & hidden gems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>Personalized multi-day itinerary builder</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                <span>Budget forecasts, local food guide & hotel ratings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-slate-500 text-sm mt-1.5">
                Login to continue planning your next trip.
              </p>
            </div>

            {error && (
              <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium px-4 py-3 rounded-xl flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
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
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Password reset instructions will be sent once backend is connected.")}
                    className="text-xs text-sky-600 hover:text-sky-700 font-medium cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Login
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-sky-600 font-bold hover:text-sky-700 hover:underline">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

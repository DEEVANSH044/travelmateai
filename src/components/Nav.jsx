import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

function Nav() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/destinations", label: "Explore" },
    { to: "/planner", label: "Planner" },
    { to: "/travel-dna", label: "Travel DNA", icon: "🧬" },
    { to: "/about", label: "About" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 dark:bg-black/40 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3.5">
        {/* Brand Logo */}
        <NavLink to="/home" className="flex items-center gap-2.5 group">
          <span className="text-2xl transition-transform group-hover:scale-110">✈️</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            TravelMate <span className="text-sky-600 dark:text-sky-400">AI</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 items-center text-xs font-semibold text-slate-700 dark:text-[#E2E8F0]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1.5 transition-colors duration-200 hover:text-slate-950 dark:hover:text-white flex items-center gap-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-600 dark:after:bg-sky-400 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-sky-600 dark:text-sky-400 after:w-full font-bold"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.icon && <span>{link.icon}</span>}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right CTA / Theme Toggle / Auth */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border border-slate-200/80 dark:border-white/20 text-sm transition-all duration-200 cursor-pointer shadow-xs backdrop-blur-md"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <NavLink
            to="/planner"
            className="bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition-all duration-200 cursor-pointer"
          >
            Plan Now
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-red-600 bg-white/80 hover:bg-red-50/80 border border-slate-200/80 dark:text-[#E2E8F0] dark:hover:text-red-400 dark:bg-black/40 dark:hover:bg-red-950/40 dark:border-white/20 dark:hover:border-red-900/50 backdrop-blur-md transition-all duration-200 cursor-pointer"
              title="Sign out of your account"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-white/80 hover:bg-white border border-slate-200/80 dark:text-white dark:bg-black/40 dark:hover:bg-black/60 dark:border-white/20 backdrop-blur-md transition-all duration-200"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-white/80 dark:bg-black/40 border border-slate-200/80 dark:border-white/20 text-xs transition-colors cursor-pointer backdrop-blur-md"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <NavLink
            to="/planner"
            className="bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
          >
            Plan
          </NavLink>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 dark:bg-black/40 border border-slate-200/80 dark:border-white/20 text-slate-800 dark:text-white hover:bg-white dark:hover:bg-black/60 transition-colors cursor-pointer backdrop-blur-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <span className="text-sm font-bold block w-5 h-5 text-center leading-5">✕</span>
            ) : (
              <span className="text-sm font-bold block w-5 h-5 text-center leading-5">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1F1F1F] px-6 py-4 space-y-3 animate-fade-in transition-colors duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-sky-50 text-sky-600 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-[#9CA3AF] dark:hover:text-white dark:hover:bg-[#151515]"
                }`
              }
            >
              {link.icon && <span>{link.icon}</span>}
              <span>{link.label}</span>
            </NavLink>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-[#1F1F1F] flex items-center justify-between gap-3">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="w-full text-center py-2 px-4 rounded-xl text-xs font-semibold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 dark:text-red-400 dark:bg-[#0F0F0F] dark:border-[#262626] dark:hover:bg-red-950/20 transition-colors cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 px-4 rounded-xl text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 dark:text-white dark:bg-[#0F0F0F] dark:border-[#262626]"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
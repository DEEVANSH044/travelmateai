import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#050505] text-slate-600 dark:text-[#9CA3AF] border-t border-slate-200 dark:border-[#1F1F1F] py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-slate-200 dark:border-[#1F1F1F]">
      
          <div>
            <Link to="/home" className="flex items-center gap-2">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">TravelMate AI</span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-[#6B7280] mt-2 font-medium">
              Plan smarter. Travel better. Discover handpicked Indian destinations.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-600 dark:text-[#9CA3AF]">
            <Link to="/home" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Explore
            </Link>
            <Link to="/planner" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Planner
            </Link>
            <Link to="/travel-dna" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Travel DNA
            </Link>
            <Link to="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-500 dark:text-[#6B7280]">
          <p>© {new Date().getFullYear()} TravelMate AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

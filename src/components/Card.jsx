import { Link } from "react-router-dom";

function Card({ name, state, img, images, rating, weather, budget }) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  const imageUrl = img || (images && images.length > 0 ? images[0] : `/images/destinations/${slug}/hero.jpg`);

  return (
    <div className="group w-full max-w-[320px] sm:max-w-none bg-white dark:bg-[#0F0F0F] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-50/50 dark:hover:bg-[#151515] transition-all duration-300 flex flex-col shadow-xs hover:shadow-md">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-[#0A0A0A]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Adaptive subtle rating badge */}
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-[#050505]/85 backdrop-blur-xs border border-slate-200 dark:border-[#262626] px-2.5 py-1 rounded-lg text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 shadow-sm">
            <span className="text-amber-500 dark:text-amber-400">★</span>
            <span>{rating}</span>
          </div>
        )}

        {/* Adaptive subtle weather badge */}
        {weather && (
          <div className="absolute bottom-3 left-3 bg-slate-900/80 dark:bg-[#050505]/85 backdrop-blur-xs border border-slate-700/50 dark:border-[#262626] px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white dark:text-[#9CA3AF] flex items-center gap-1">
            <span>🌦️</span>
            <span>{weather}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            {state}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
            {name}
          </h3>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#1F1F1F] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 dark:text-[#6B7280] block font-medium uppercase tracking-wide">
              Est. Budget
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">{budget || "N/A"}</span>
          </div>

          <Link
            to={`/destination/${name.toLowerCase()}`}
            className="bg-slate-100 dark:bg-[#141414] hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white dark:hover:text-slate-950 text-slate-800 dark:text-white border border-slate-200 dark:border-[#262626] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
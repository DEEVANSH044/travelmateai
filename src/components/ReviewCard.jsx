function ReviewCard({ author, rating, date, comment, tag }) {
  const initials = author
    ? author.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
    : "TR";

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-2xl p-5 border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-50/50 dark:hover:bg-[#151515] transition-all duration-200 flex flex-col justify-between shadow-xs">
      <div>
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] flex items-center justify-center text-sky-600 dark:text-sky-400 text-xs font-bold shadow-xs">
            {initials}
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{author}</h4>
            <span className="text-[10px] text-slate-500 dark:text-[#6B7280] block">{date}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-amber-500 dark:text-amber-400 text-xs gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
            ))}
          </div>
          {tag && (
            <span className="text-[10px] bg-sky-50 dark:bg-[#141414] text-sky-700 dark:text-sky-400 font-semibold px-2 py-0.5 rounded-full border border-sky-200 dark:border-[#262626]">
              {tag}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-3 leading-relaxed italic">
          "{comment}"
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#1F1F1F] flex items-center justify-between text-[11px] text-slate-500 dark:text-[#6B7280]">
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
          <span>✓</span> Verified Traveler
        </span>
        <button className="hover:text-slate-900 dark:hover:text-white font-medium transition-colors cursor-pointer">
          Helpful? (12)
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;

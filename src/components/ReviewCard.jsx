function ReviewCard({ author, rating, date, comment, tag, index }) {
  // Colorful gradients for avatar fallbacks
  const gradients = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-cyan-500",
    "from-teal-500 to-emerald-500",
    "from-amber-500 to-orange-500"
  ];
  const gradient = gradients[(index || 0) % gradients.length];
  const initials = author
    ? author.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
    : "TR";

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center text-white text-sm font-bold shadow-xs`}>
            {initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">{author}</h4>
            <span className="text-[11px] text-gray-400 block">{date}</span>
          </div>
        </div>

        {/* Rating and Tag */}
        <div className="flex items-center gap-2 mt-3.5">
          <div className="flex text-yellow-500 text-xs gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
            ))}
          </div>
          {tag && (
            <span className="text-[10px] bg-sky-50 text-sky-600 font-semibold px-2 py-0.5 rounded-full">
              {tag}
            </span>
          )}
        </div>

        {/* Comment */}
        <p className="text-xs text-gray-600 mt-3.5 leading-relaxed italic">
          "{comment}"
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100/50 flex items-center justify-between text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <span>✓</span> Verified Reviewer
        </span>
        <button className="hover:text-sky-600 font-semibold transition-colors duration-150">
          Helpful? (12)
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;

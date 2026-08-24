function FoodCard({ name, index }) {
  const foodTags = [
    ["Local Speciality", "Spicy", "Authentic"],
    ["Traditional Delicacy", "Savory", "Must Try"],
    ["Sweet Delight", "Dessert", "Popular"],
    ["Healthy Choice", "Vegetarian", "Organic"]
  ][index % 4];

  const type = index % 3 === 0 ? "Spicy" : index % 3 === 1 ? "Mild" : "Sweet";
  const typeBadgeColors = {
    Spicy: "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50",
    Mild: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50",
    Sweet: "text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50"
  };

  const imageUrl = `https://picsum.photos/400/300?food,${name.replace(/\s+/g, "")}`;

  const handleFindPlaces = () => {
    alert(`🔍 Scanning verified local eateries for "${name}"...\n\nTop Recommended Spots:\n1. The Heritage Kitchen (4.8⭐) — 800m away\n2. Authentic Flavors Diner (4.7⭐) — 1.4km away\n3. City Center Cafe (4.5⭐) — 2.2km away`);
  };

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-50/50 dark:hover:bg-[#151515] transition-all duration-300 flex flex-col h-full group shadow-xs">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-[#0A0A0A]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 dark:opacity-90"
          loading="lazy"
        />
        <div className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${typeBadgeColors[type]}`}>
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{name}</h3>
          <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-1.5 leading-relaxed">
            Experience the authentic culinary heritage and flavor notes of this iconic regional preparation.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {foodTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-slate-100 dark:bg-[#141414] text-slate-700 dark:text-[#9CA3AF] px-2 py-0.5 rounded-md border border-slate-200 dark:border-[#262626] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleFindPlaces}
          className="mt-5 w-full bg-slate-100 dark:bg-[#141414] hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white dark:hover:text-slate-950 text-slate-800 dark:text-white border border-slate-200 dark:border-[#262626] hover:border-transparent text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
        >
          Find Where to Eat
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

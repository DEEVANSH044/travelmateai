function FoodCard({ name, index }) {
  // Generates tags and type based on food name
  const foodTags = [
    ["Local Speciality", "Spicy", "Authentic"],
    ["Traditional Delicacy", "Savory", "Must Try"],
    ["Sweet Delight", "Dessert", "Popular"],
    ["Healthy Choice", "Vegetarian", "Organic"]
  ][index % 4];

  const type = index % 3 === 0 ? "Spicy" : index % 3 === 1 ? "Mild" : "Sweet";
  const colors = {
    Spicy: "text-rose-600 bg-rose-50 border-rose-100",
    Mild: "text-amber-600 bg-amber-50 border-amber-100",
    Sweet: "text-purple-600 bg-purple-50 border-purple-100"
  };

  const imageUrl = `https://picsum.photos/400/300?food,${name.replace(/\s+/g, "")}`;

  const handleFindPlaces = () => {
    alert(`🔍 Scanning local eateries for "${name}"...\n\nTop Recommended Places:\n1. The Local Bistro (4.8⭐) - 1.2 km away\n2. Authentic Flavors Diner (4.6⭐) - 800 m away\n3. Heritage Kitchen (4.5⭐) - 2.5 km away`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md border ${colors[type]}`}>
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{name}</h3>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Experience the rich heritage and unique flavors of this beloved local preparation.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {foodTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleFindPlaces}
          className="mt-4 w-full bg-slate-50 hover:bg-sky-600 hover:text-white text-sky-600 border border-sky-100 hover:border-sky-600 text-xs font-semibold py-2 rounded-xl transition-all duration-200"
        >
          Find Where to Eat
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

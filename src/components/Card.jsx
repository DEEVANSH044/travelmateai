import { Link } from "react-router-dom";

function Card({ name, state, img, images, rating, weather, budget }) {
  // Use destination image or fallback to local destination hero
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  const imageUrl = img || (images && images.length > 0 ? images[0] : `/images/destinations/${slug}/hero.jpg`);

  return (
    <div className="group w-80 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Rating Badge */}
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-sm font-bold text-slate-800 flex items-center gap-1 shadow-sm">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        )}
        {/* Weather Badge */}
        {weather && (
          <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1">
            <span>🌦️</span>
            <span>{weather}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
            {state}
          </span>
          <h3 className="text-xl font-bold text-slate-850 mt-1 group-hover:text-sky-600 transition-colors duration-200">
            {name}
          </h3>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Est. Budget</span>
            <span className="text-sm font-bold text-emerald-600">{budget || "N/A"}</span>
          </div>

          <Link
            to={`/destination/${name.toLowerCase()}`}
            className="bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
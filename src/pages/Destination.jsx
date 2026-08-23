import { useParams, Link } from "react-router-dom";
import Places from "../data/Places";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import HotelCard from "../components/HotelCard";
import FoodCard from "../components/FoodCard";
import ReviewCard from "../components/ReviewCard";

function Destination() {
  const { name } = useParams();

  // Find the place matching the URL parameter (case-insensitive)
  const place = Places.find(
    (item) => item.name.toLowerCase() === name?.toLowerCase() ||
              item.name.toLowerCase().replace(/\s+/g, "-") === name?.toLowerCase()
  );

  if (!place) {
    return (
      <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col">
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <span className="text-5xl">🏝️</span>
          <h2 className="text-2xl font-bold mt-4">Destination Not Found</h2>
          <p className="text-gray-500 mt-2">
            The destination "{name}" could not be found in our directory.
          </p>
          <Link
            to="/destinations"
            className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-sky-700 transition-colors"
          >
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  const reviewsToDisplay = (place.reviews && place.reviews.length > 0)
    ? place.reviews
    : [
        {
          author: "Traveler Community",
          rating: place.rating,
          date: "Verified Visit",
          comment: `Exploring ${place.name} was an unforgettable experience. Top rated local food and picturesque landscapes.`,
          tag: "Verified Explorer"
        }
      ];

  const mapQuery = encodeURIComponent(`${place.name}, ${place.state}, India`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-850 pb-20">
      <Nav />

      {/* Hero Banner with local hero image */}
      <div className="relative h-[460px] w-full overflow-hidden">
        <img
          src={place.img || place.images?.[0]}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/20" />

        {/* Hero Meta Info */}
        <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-6 text-white">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold mb-4 transition-colors"
          >
            ← Back to All 50 Destinations
          </Link>

          <span className="text-xs bg-sky-500 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-max">
            {place.state}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">
            {place.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-4 text-sm font-medium text-white/90">
            <span className="flex items-center gap-1.5">
              ⭐ <strong className="text-white">{place.rating}</strong> Rating
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              🌦️ Weather: <strong className="text-white">{place.weather}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              💰 Est. Budget: <strong className="text-white">{place.budget}</strong>
            </span>
            {place.bestTime && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  🗓️ Best Time: <strong className="text-white">{place.bestTime}</strong>
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: About, Attractions, Hidden Gems, Gallery, Hotels, Food, Map */}
        <div className="lg:col-span-2 space-y-12">
          {/* About Section */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              About {place.name}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {place.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100/50">
                <span className="text-2xl">🌦️</span>
                <h4 className="text-xs font-bold text-slate-500 uppercase mt-2">Avg Weather</h4>
                <p className="text-lg font-extrabold text-sky-600 mt-1">{place.weather}</p>
              </div>
              <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50">
                <span className="text-2xl">💰</span>
                <h4 className="text-xs font-bold text-slate-500 uppercase mt-2">Est. Budget</h4>
                <p className="text-lg font-extrabold text-emerald-600 mt-1">{place.budget}</p>
              </div>
              <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100/50">
                <span className="text-2xl">🗓️</span>
                <h4 className="text-xs font-bold text-slate-500 uppercase mt-2">Best Season</h4>
                <p className="text-sm font-extrabold text-purple-600 mt-1.5">{place.bestTime || "Year Round"}</p>
              </div>
            </div>
          </section>

          {/* Top Attractions & Hidden Gems */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Attractions */}
            {place.attractions && place.attractions.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>🏛️</span> Top Attractions
                </h3>
                <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
                  {place.attractions.map((attr, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-sky-500 font-bold">•</span>
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hidden Gems */}
            {place.hiddenGems && place.hiddenGems.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>💎</span> Offbeat & Hidden Gems
                </h3>
                <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
                  {place.hiddenGems.map((gem, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/60">
                      <span className="text-amber-500 font-bold">✨</span>
                      <span>{gem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Photo Gallery */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              📸 Real Destination Photographs
            </h2>
            <Gallery images={place.images} name={place.name} />
          </section>

          {/* Recommended Hotels */}
          {place.hotels && place.hotels.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🏨 Recommended Places to Stay
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {place.hotels.map((hotel, index) => (
                  <HotelCard key={index} name={hotel} index={index} />
                ))}
              </div>
            </section>
          )}

          {/* Famous Food */}
          {place.food && place.food.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🍛 Local Culinary Delights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {place.food.map((dish, index) => (
                  <FoodCard key={index} name={dish} index={index} />
                ))}
              </div>
            </section>
          )}

          {/* Interactive Map Section */}
          <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span>🗺️</span> Destination Map & Coordinates
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">Explore {place.name}, {place.state} on the interactive map</p>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-xl hover:bg-sky-600 hover:text-white transition-colors"
              >
                Open in Maps ↗
              </a>
            </div>

            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-100 relative bg-slate-100">
              <iframe
                title={`Map of ${place.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </section>
        </div>

        {/* Right Side: Planner CTA, Emergency Directory & Reviews Sidebar */}
        <div className="space-y-8">
          {/* Quick Book / Trip Planner Card */}
          <div className="bg-gradient-to-tr from-sky-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold">Ready to travel to {place.name}?</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Use our AI-driven itinerary builder to customize a day-by-day plan matching your mood, season, and budget!
            </p>
            <Link
              to={`/planner?destination=${encodeURIComponent(place.name)}`}
              className="mt-6 w-full text-center inline-block bg-white text-sky-600 font-bold py-3 rounded-2xl shadow-sm hover:shadow transition-all duration-200"
            >
              Build AI Itinerary
            </Link>
          </div>

          {/* Emergency & Tourist Safety Directory */}
          <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs bg-gradient-to-b from-rose-50/40 to-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🚨</span>
              <h3 className="text-lg font-bold text-slate-800">Emergency & Helplines</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Important 24x7 emergency contacts and local safety assistance for travelers visiting {place.name}.
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-700">🌐 Tourist Helpline (Multilingual)</span>
                <span className="font-bold text-sky-600">1363</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-700">👮 Police Emergency (All India)</span>
                <span className="font-bold text-indigo-600">112</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-700">🚑 Ambulance / Medical SOS</span>
                <span className="font-bold text-rose-600">108 / 102</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-700">🚒 Fire Control</span>
                <span className="font-bold text-amber-600">101</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              📍 Local Assistance: Regional Tourist Information Centre, {place.state}
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-800">
                Traveler Reviews ({reviewsToDisplay.length})
              </h3>
              <span className="text-sm font-semibold text-sky-600">★ {place.rating}</span>
            </div>
            <div className="space-y-5">
              {reviewsToDisplay.map((review, index) => (
                <ReviewCard
                  key={index}
                  author={review.author}
                  rating={review.rating}
                  date={review.date}
                  comment={review.comment}
                  tag={review.tag}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
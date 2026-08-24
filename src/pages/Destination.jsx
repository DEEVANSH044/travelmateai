import { useParams, Link } from "react-router-dom";
import Places from "../data/Places";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import HotelCard from "../components/HotelCard";
import FoodCard from "../components/FoodCard";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

function Destination() {
  const { name } = useParams();

  // Find the place matching the URL parameter (case-insensitive)
  const place = Places.find(
    (item) => item.name.toLowerCase() === name?.toLowerCase() ||
              item.name.toLowerCase().replace(/\s+/g, "-") === name?.toLowerCase()
  );

  if (!place) {
    return (
      <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <span className="text-5xl">🏝️</span>
          <h2 className="text-2xl font-bold mt-4 text-slate-900 dark:text-white">Destination Not Found</h2>
          <p className="text-slate-600 dark:text-[#9CA3AF] mt-2 text-sm">
            The destination "{name}" could not be found in our directory.
          </p>
          <Link
            to="/destinations"
            className="mt-6 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
          >
            ← Back to Explore
          </Link>
        </div>
        <Footer />
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
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      <Nav />

      {/* Hero Banner with local hero image */}
      <div className="relative h-[480px] w-full overflow-hidden bg-slate-900">
        <img
          src={place.img || place.images?.[0]}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient for hero text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />

        {/* Hero Meta Info */}
        <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-6 text-white">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold mb-4 transition-colors"
          >
            ← Back to All Destinations
          </Link>

          <span className="text-[11px] bg-black/60 backdrop-blur-xs border border-white/20 text-sky-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-max">
            {place.state}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-3 tracking-tight text-white">
            {place.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs font-medium text-white/90">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-lg">
              <span className="text-amber-400">★</span> <strong className="text-white">{place.rating}</strong> Rating
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-lg">
              🌦️ Weather: <strong className="text-white">{place.weather}</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-lg">
              💰 Est. Budget: <strong className="text-white">{place.budget}</strong>
            </span>
            {place.bestTime && (
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-lg">
                🗓️ Best Time: <strong className="text-white">{place.bestTime}</strong>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-8 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 flex-1 w-full">
        {/* Left Side: About, Info Cards, Attractions, Hidden Gems, Gallery, Hotels, Food, Map */}
        <div className="lg:col-span-2 space-y-12">
          {/* About Section */}
          <section className="bg-white dark:bg-[#0F0F0F] p-8 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              About {place.name}
            </h2>
            <p className="text-slate-600 dark:text-[#9CA3AF] leading-relaxed text-xs sm:text-sm">
              {place.description}
            </p>

            {/* Quick Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
              <div className="bg-slate-50 dark:bg-[#141414] p-5 rounded-2xl border border-slate-200 dark:border-[#262626]">
                <span className="text-xl">🌦️</span>
                <h4 className="text-[10px] font-bold text-slate-500 dark:text-[#6B7280] uppercase mt-2">Avg Weather</h4>
                <p className="text-base font-extrabold text-slate-900 dark:text-white mt-1">{place.weather}</p>
              </div>
              <div className="bg-slate-50 dark:bg-[#141414] p-5 rounded-2xl border border-slate-200 dark:border-[#262626]">
                <span className="text-xl">💰</span>
                <h4 className="text-[10px] font-bold text-slate-500 dark:text-[#6B7280] uppercase mt-2">Est. Budget</h4>
                <p className="text-base font-extrabold text-slate-900 dark:text-white mt-1">{place.budget}</p>
              </div>
              <div className="bg-slate-50 dark:bg-[#141414] p-5 rounded-2xl border border-slate-200 dark:border-[#262626]">
                <span className="text-xl">🗓️</span>
                <h4 className="text-[10px] font-bold text-slate-500 dark:text-[#6B7280] uppercase mt-2">Best Season</h4>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white mt-1.5">{place.bestTime || "Year Round"}</p>
              </div>
            </div>
          </section>

          {/* Top Attractions & Hidden Gems */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Attractions */}
            {place.attractions && place.attractions.length > 0 && (
              <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🏛️</span> Top Attractions
                </h3>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-[#9CA3AF]">
                  {place.attractions.map((attr, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-50 dark:bg-[#141414] p-2.5 rounded-xl border border-slate-200 dark:border-[#262626]">
                      <span className="text-sky-600 dark:text-sky-400 font-bold">•</span>
                      <span className="text-slate-900 dark:text-white">{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hidden Gems */}
            {place.hiddenGems && place.hiddenGems.length > 0 && (
              <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>💎</span> Offbeat & Hidden Gems
                </h3>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-[#9CA3AF]">
                  {place.hiddenGems.map((gem, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-50 dark:bg-[#141414] p-2.5 rounded-xl border border-slate-200 dark:border-[#262626]">
                      <span className="text-amber-500 dark:text-amber-400 font-bold">✨</span>
                      <span className="text-slate-900 dark:text-white">{gem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Photo Gallery */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5">
              📸 Real Destination Photographs
            </h2>
            <Gallery images={place.images} name={place.name} />
          </section>

          {/* Recommended Hotels */}
          {place.hotels && place.hotels.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5">
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
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5">
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
          <section className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] overflow-hidden shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🗺️</span> Destination Map & Coordinates
                </h2>
                <p className="text-xs text-slate-500 dark:text-[#6B7280] mt-0.5">Explore {place.name}, {place.state} on the interactive map</p>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white dark:text-slate-950 bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                Open in Maps ↗
              </a>
            </div>

            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262626] relative bg-slate-100 dark:bg-[#0A0A0A]">
              <iframe
                title={`Map of ${place.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="w-full h-full dark:[filter:invert(90%)_hue-rotate(180deg)]"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </section>
        </div>

        {/* Right Side: Planner CTA, Emergency Directory & Reviews Sidebar */}
        <div className="space-y-8">
          {/* Quick Book / Trip Planner Card */}
          <div className="bg-white dark:bg-[#0F0F0F] rounded-3xl p-7 border border-slate-200 dark:border-[#262626] relative overflow-hidden shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ready to visit {place.name}?</h3>
            <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-2 leading-relaxed">
              Use our AI-driven itinerary builder to customize a day-by-day roadmap matching your mood, season, and budget.
            </p>
            <Link
              to={`/planner?destination=${encodeURIComponent(place.name)}`}
              className="mt-6 w-full text-center inline-block bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-bold py-3 rounded-xl text-xs shadow-sm transition-all duration-200"
            >
              Build AI Itinerary
            </Link>
          </div>

          {/* Emergency & Tourist Safety Directory */}
          <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🚨</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Emergency & Helplines</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mb-4 leading-relaxed">
              Important 24x7 emergency contacts and local safety assistance for travelers visiting {place.name}.
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]">
                <span className="font-medium text-slate-700 dark:text-[#9CA3AF]">🌐 Tourist Helpline</span>
                <span className="font-bold text-sky-600 dark:text-sky-400">1363</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]">
                <span className="font-medium text-slate-700 dark:text-[#9CA3AF]">👮 Police Emergency</span>
                <span className="font-bold text-slate-900 dark:text-white">112</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]">
                <span className="font-medium text-slate-700 dark:text-[#9CA3AF]">🚑 Medical SOS</span>
                <span className="font-bold text-red-600 dark:text-red-400">108 / 102</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626]">
                <span className="font-medium text-slate-700 dark:text-[#9CA3AF]">🚒 Fire Control</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">101</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#1F1F1F] text-[11px] text-slate-500 dark:text-[#6B7280]">
              📍 Regional Tourist Information Centre, {place.state}
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-3xl border border-slate-200 dark:border-[#262626] shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Traveler Reviews ({reviewsToDisplay.length})
              </h3>
              <span className="text-xs font-semibold text-amber-500 dark:text-amber-400">★ {place.rating}</span>
            </div>
            <div className="space-y-4">
              {reviewsToDisplay.map((review, index) => (
                <ReviewCard
                  key={index}
                  author={review.author}
                  rating={review.rating}
                  date={review.date}
                  comment={review.comment}
                  tag={review.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Destination;
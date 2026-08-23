import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Navigation */}
      <Nav />

      {/* Hero Banner with Search */}
      <Hero />

      {/* Popular Destinations section */}
      <div className="max-w-7xl mx-auto px-6">
        <Popular />
      </div>

      {/* Premium Features Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-sky-600 tracking-wider uppercase">
              Our Features
            </span>
            <h2 className="text-4xl font-extrabold text-slate-850 mt-2">
              Why Choose TravelMate AI?
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We leverage advanced AI technology to craft travel itineraries and match you with absolute perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl font-bold mb-6">
                🤖
              </div>
              <h3 className="text-xl font-bold text-slate-850">AI Smart Planner</h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Generate custom multi-day plans matching your mood, companion, and budget constraint instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-6">
                🏨
              </div>
              <h3 className="text-xl font-bold text-slate-850">Curated Local Stays</h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Direct connections and handpicked hotel recommendations that offer maximum comfort and ratings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-6">
                🍛
              </div>
              <h3 className="text-xl font-bold text-slate-850">Local Cuisine Insights</h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Never miss out on local delicacies. Find where to get authentic cultural foods during your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <span className="text-lg font-bold text-white">TravelMate AI</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} TravelMate AI. All rights reserved. Made for premium traveling.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
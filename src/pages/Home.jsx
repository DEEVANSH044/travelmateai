import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <Nav />

      {/* Hero Banner with Search */}
      <Hero />

      {/* Popular Destinations section */}
      <div className="max-w-7xl mx-auto px-6 w-full flex-1">
        <Popular />
      </div>

      {/* Premium Features Section */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-[#1F1F1F] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Why Choose TravelMate AI?
            </h2>
            <p className="text-slate-600 dark:text-[#9CA3AF] mt-3 text-xs sm:text-sm leading-relaxed">
              We leverage intelligent planning to craft tailor-made travel itineraries and match you with absolute perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 dark:bg-[#0F0F0F] p-8 rounded-2xl border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-100/60 dark:hover:bg-[#151515] transition-all duration-300 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-200/70 dark:bg-[#141414] border border-slate-300/60 dark:border-[#262626] text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl font-bold mb-6">
                🤖
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Smart Planner</h3>
              <p className="text-slate-600 dark:text-[#9CA3AF] mt-2.5 text-xs sm:text-sm leading-relaxed">
                Generate custom multi-day plans matching your mood, companion, and budget constraints instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 dark:bg-[#0F0F0F] p-8 rounded-2xl border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-100/60 dark:hover:bg-[#151515] transition-all duration-300 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-200/70 dark:bg-[#141414] border border-slate-300/60 dark:border-[#262626] text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl font-bold mb-6">
                🏨
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Curated Local Stays</h3>
              <p className="text-slate-600 dark:text-[#9CA3AF] mt-2.5 text-xs sm:text-sm leading-relaxed">
                Handpicked hotel recommendations and verified stays that offer maximum comfort, safety, and ratings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 dark:bg-[#0F0F0F] p-8 rounded-2xl border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-100/60 dark:hover:bg-[#151515] transition-all duration-300 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-200/70 dark:bg-[#141414] border border-slate-300/60 dark:border-[#262626] text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl font-bold mb-6">
                🍛
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Local Cuisine Insights</h3>
              <p className="text-slate-600 dark:text-[#9CA3AF] mt-2.5 text-xs sm:text-sm leading-relaxed">
                Never miss out on regional delicacies. Discover where to find authentic cultural dishes during your stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-white flex flex-col transition-colors duration-300">
      <Nav />

      <main className="max-w-4xl mx-auto px-6 py-14 flex-1 w-full">
 
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            About TravelMate AI
          </h1>
          <p className="text-slate-600 dark:text-[#9CA3AF] mt-3 leading-relaxed text-xs sm:text-sm">
            We are dedicated to redefining how travelers discover and plan journeys across India. By merging artificial intelligence with local expertise, we design custom roadmaps for unforgettable adventures.
          </p>
        </div>

    
        <section className="bg-white dark:bg-[#0F0F0F] rounded-3xl p-8 border border-slate-200 dark:border-[#262626] mb-8 shadow-xs">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">Our Mission</span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">Redefining Indian Travel Planning</h2>
          <p className="text-slate-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4">
            Finding authentic culinary spots, verified hotel recommendations, and crafting customized schedules has historically been a fragmented, time-consuming experience. TravelMate AI consolidates search parameters, local insights, and itinerary generation into a single unified platform.
          </p>
          <p className="text-slate-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed">
            Whether you are planning a snowy mountain retreat to Manali, a sunny beach trip to Goa, or a royal heritage tour of Jaipur, our smart engine maps it all seamlessly based on your preferred pace and budget tier.
          </p>
        </section>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-2xl border border-slate-200 dark:border-[#262626] shadow-xs">
            <div className="text-xl mb-2 text-sky-600 dark:text-sky-400">⚡</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Why TravelMate?</h3>
            <p className="text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Unlike generic search engines, TravelMate AI factors in weather seasonality, verified hidden gems, culinary specialties, and group dynamics to craft realistic, hour-by-hour travel plans.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F0F0F] p-6 rounded-2xl border border-slate-200 dark:border-[#262626] shadow-xs">
            <div className="text-xl mb-2 text-indigo-600 dark:text-indigo-400">🧠</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Technology & Architecture</h3>
            <p className="text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Built on modern React 19, Vite, client-side intelligence profiling (Travel DNA), and optimized CDN asset pipelines to provide instantaneous responses with zero latency.
            </p>
          </div>
        </div>

  
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">Leadership</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Deevansh Rana", role: "Co-Founder & AI Architect", emoji: "👨‍💻" },
              { name: "Eshaan Puri", role: "Lead Travel Curator", emoji: "✈️" },
              { name: "Eddam Goyal", role: "Product Designer", emoji: "🎨" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F0F0F] p-6 rounded-2xl border border-slate-200 dark:border-[#262626] text-center hover:border-slate-300 dark:hover:border-[#383838] transition-colors shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm">
                  {member.emoji}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-slate-500 dark:text-[#9CA3AF] mt-1 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Future Vision */}
        <section className="bg-white dark:bg-[#0F0F0F] rounded-3xl p-8 border border-slate-200 dark:border-[#262626] mb-8 shadow-xs">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">Roadmap</span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">Future Vision</h2>
          <p className="text-slate-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed">
            Our vision is to empower every traveler in India with real-time multi-modal AI agents capable of instant live flight re-routing, dynamic group expense splitting, and hyper-local audio guides that bring centuries of history alive right on your mobile screen.
          </p>
        </section>

        {/* 5. Contact Section */}
        <section className="bg-white dark:bg-[#0F0F0F] rounded-3xl p-8 border border-slate-200 dark:border-[#262626] shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">Have questions or suggestions?</h2>
          <p className="text-slate-600 dark:text-[#9CA3AF] text-xs leading-relaxed max-w-lg mb-6">
            If you want to suggest missing local dishes, verify your resort, or collaborate with our team, reach out at any time.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold">
            <a
              href="mailto:support@travelmate.ai"
              className="bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 px-4 py-2.5 rounded-xl font-bold transition-colors cursor-pointer"
            >
              Email Support
            </a>
            <button
              onClick={() => alert("📞 Dialing TravelMate Helpdesk: +91 (120) 456-7890\nOperational Hours: 9 AM - 6 PM IST")}
              className="border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] bg-slate-100 hover:bg-slate-200 dark:bg-[#141414] dark:hover:bg-[#1a1a1a] text-slate-800 dark:text-white px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Call Our Office
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
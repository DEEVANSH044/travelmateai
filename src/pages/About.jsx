import Nav from "../components/Nav";

function About() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Nav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-sky-600 tracking-wider uppercase">
            Who We Are
          </span>
          <h1 className="text-4xl font-extrabold text-slate-850 mt-2 tracking-tight">
            About TravelMate AI
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed text-base">
            We are dedicated to redefining how travelers discover and plan trips in India. By merging artificial intelligence with local expertise, we design custom maps for unforgettable adventures.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Our Vision & Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Finding authentic culinary spots, top hotel recommendations, and crafting customized schedules has historically been a scattered experience. TravelMate AI consolidates search parameters into a single platform that delivers curated suggestions instantly.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you are planning a chilly mountain retreat to Manali, a sunny beach trip to Goa, or a heritage tour of Jaipur, our engine maps it all seamlessly based on budget levels and styles.
          </p>
        </section>

        {/* Team Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Deevansh Rana", role: "Co-Founder & AI Architect", emoji: "👨‍💻" },
              { name: "Eshaan Puri", role: "Lead Travel Curator", emoji: "✈️" },
              { name: "Eddam Goyal", role: "Product Designer", emoji: "🎨" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="text-base font-bold text-slate-800">{member.name}</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-900 rounded-3xl p-8 text-white shadow-md relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-xl font-bold mb-2">Have questions?</h2>
          <p className="text-white/70 text-xs leading-relaxed max-w-lg mb-6">
            If you want to suggest missing local dishes, verify your resort, or collaborate, reach out to our team at any time!
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            <a href="mailto:support@travelmate.ai" className="bg-white text-slate-900 px-4 py-2 rounded-xl">
              Email Support
            </a>
            <button
              onClick={() => alert("📞 Dialing +91 (120) 456-7890\nOperational Hours: 9 AM - 6 PM IST")}
              className="border border-white/35 hover:bg-white/10 px-4 py-2 rounded-xl"
            >
              Call Our Office
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">✈️</span>
            <span className="text-sm font-bold text-white">TravelMate AI</span>
          </div>
          <p>© {new Date().getFullYear()} TravelMate AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
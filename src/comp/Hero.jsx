
function Hero() {

  return (

    <section className="min-h-screen flex flex-col items-center justify-center bg-sky-100">
      <h1 className="text-6xl font-bold text-slate-800">Discover Your Next Adventure</h1>
      <p className="mt-4 text-lg text-gray-600"> Explore India's most beautiful destinations.</p>
      <div className="flex mt-8 gap-3">
        <input type="text" placeholder="Search destination..." className="w-80 p-3 rounded-lg border outline-none"/>
        <button className="px-6 py-3 bg-sky-600 text-white rounded-lg">Search</button>
      </div>
    </section>
  );
}
export default Hero;
import places from "../data/Places";
import Card from "./Card";

function Popular() {
  const popularPlaces = places.slice(0, 8);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
          Featured Locations
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
          Popular Destinations
        </h2>
        <p className="text-slate-600 dark:text-[#9CA3AF] mt-2.5 text-xs sm:text-sm max-w-lg mx-auto">
          Explore our handpicked selection of top locations across India with verified local recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-stretch">
        {popularPlaces.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            state={item.state}
            img={item.img}
            images={item.images}
            rating={item.rating}
            weather={item.weather}
            budget={item.budget}
          />
        ))}
      </div>
    </section>
  );
}

export default Popular;
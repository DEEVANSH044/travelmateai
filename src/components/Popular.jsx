import places from "../data/Places";
import Card from "./Card";

function Popular() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-sky-600 tracking-wider uppercase">
          Trending Now
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-850 mt-2">
          Popular Destinations
        </h2>
        <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
          Explore our handpicked selection of top locations across India with verified recommendations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {places.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            state={item.state}
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
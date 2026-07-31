import places from "../data/Places";
import Card from "./Card";

function Popular() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center">
        Popular Destination
      </h2>

      <div className="flex justify-center gap-8 mt-10">
        {places.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            state={item.state}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Popular;
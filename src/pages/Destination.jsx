import Places from "../data/places";
import { useParams } from "react-router-dom";

function Destination() {
  const { name } = useParams();
  const place = Places.find(
    (item) => item.name.toLowerCase() === name);
  return (
    <div className="max-w-6xl mx-auto p-8">
    {/* Hero Image */}
    <img
      src={place.img}
      alt={place.name}
      className="w-full h-96 object-cover rounded-xl"
    />
    {/* Destination Info */}
    <div className="mt-8">
      <h1 className="text-5xl font-bold">
        {place.name}
      </h1>
      <p className="text-xl text-gray-600 mt-2"> 📍 {place.state}</p>
      <p className="text-yellow-500 text-lg mt-2"> ⭐ {place.rating} </p>
    </div>
    {/* About Section */}
<div className="mt-8">

  <h2 className="text-3xl font-bold mb-3">

    About Destination

  </h2>

  <p className="text-gray-700 leading-8">

    {place.description}

  </p>

</div>
{/* Add this here */}

<div className="grid grid-cols-2 gap-6 mt-10">

  <div className="bg-blue-100 p-6 rounded-xl shadow">
    <h3 className="text-xl font-semibold">
      🌦️ Weather
    </h3>

    <p className="text-3xl font-bold mt-2">
      {place.weather}
    </p>
  </div>

  <div className="bg-green-100 p-6 rounded-xl shadow">
    <h3 className="text-xl font-semibold">
      💰 Budget
    </h3>

    <p className="text-3xl font-bold mt-2">
      {place.budget}
    </p>
  </div>

</div>
  </div>
  );
}

export default Destination;
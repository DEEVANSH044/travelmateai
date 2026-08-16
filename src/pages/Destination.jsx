import Places from "../data/places";
import { useParams } from "react-router-dom";

function Destination() {
  const { name } = useParams();

  const place = Places.find(
    (item) => item.name.toLowerCase() === name
  );

  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Hero Image */}
      <img
        src={place.img}
        alt={place.name}
        className="w-full h-96 object-cover rounded-xl"
      />

      {/* Image Gallery */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-5">
          📸 Destination Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {place.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${place.name} ${index + 1}`}
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          ))}

        </div>

      </div>

      {/* Destination Info */}
      <div className="mt-8">

        <h1 className="text-5xl font-bold">
          {place.name}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          📍 {place.state}
        </p>

        <p className="text-yellow-500 text-lg mt-2">
          ⭐ {place.rating}
        </p>

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

      {/* Weather & Budget */}
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

      {/* Recommended Hotels */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-5">
          🏨 Recommended Hotels
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {place.hotels.map((hotel, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl"
            >

              <h3 className="text-xl font-semibold">
                {hotel}
              </h3>

              <p className="text-gray-600 mt-2">
                Comfortable stay with great facilities.
              </p>

              <button className="mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg">
                View Hotel
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Famous Food */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-5">
          🍛 Famous Food
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {place.food.map((food, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg"
            >

              <h3 className="text-xl font-semibold">
                {food}
              </h3>

              <p className="text-gray-600 mt-2">
                Famous local food
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Destination;
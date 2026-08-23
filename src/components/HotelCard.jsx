import { useState } from "react";

function HotelCard({ name, index }) {
  const [isBooked, setIsBooked] = useState(false);

  // Generate some realistic mock data based on the index/name
  const ratings = [4.8, 4.7, 4.6, 4.9, 4.5][index % 5];
  const reviewsCount = [128, 94, 210, 85, 142][index % 5];
  const prices = ["₹4,500", "₹6,200", "₹8,500", "₹3,800", "₹7,000"][index % 5];
  const amenities = [
    ["Free Wi-Fi", "Pool", "Breakfast Included"],
    ["Free Wi-Fi", "Mountain View", "Spa"],
    ["Luxury Rooms", "Bar", "Pool", "Wi-Fi"],
    ["Budget Friendly", "Free Parking", "Wi-Fi"],
    ["Sea View", "Breakfast Included", "Free Parking"]
  ][index % 5];

  const imageUrl = `https://picsum.photos/400/300?hotel,${name.replace(/\s+/g, "")}`;

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      alert(`🎉 Booking Requested!\nWe have sent your reservation inquiry for ${name}. Our agent will contact you shortly.`);
      setIsBooked(false);
    }, 400);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
          Recommended
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{name}</h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-slate-700">{ratings}</span>
            <span className="text-gray-400">({reviewsCount} reviews)</span>
          </div>

          {/* Amenities Badges */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {amenities.map((item, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block">Per Night</span>
            <span className="text-base font-bold text-slate-800">{prices}</span>
          </div>

          <button
            onClick={handleBooking}
            disabled={isBooked}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isBooked
                ? "bg-emerald-500 text-white cursor-default"
                : "bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow"
            }`}
          >
            {isBooked ? "Booking..." : "Book Room"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

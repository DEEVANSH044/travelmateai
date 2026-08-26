import { useState } from "react";

function HotelCard({ name, index }) {
  const [isBooked, setIsBooked] = useState(false);
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
      alert(`🎉 Booking Inquiry Sent!\nWe have sent your reservation inquiry for "${name}". Our concierge team will reach out with confirmed slots.`);
      setIsBooked(false);
    }, 400);
  };

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262626] hover:border-slate-300 dark:hover:border-[#383838] hover:bg-slate-50/50 dark:hover:bg-[#151515] transition-all duration-300 flex flex-col h-full shadow-xs">

      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-[#0A0A0A]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-95 dark:opacity-90"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#050505]/85 backdrop-blur-xs border border-slate-200 dark:border-[#262626] text-sky-600 dark:text-sky-400 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs">
          Curated Stay
        </div>
      </div>

    
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">{name}</h3>

         
          <div className="flex items-center gap-1.5 mt-1.5 text-xs">
            <span className="text-amber-500 dark:text-amber-400">★</span>
            <span className="font-bold text-slate-800 dark:text-white">{ratings}</span>
            <span className="text-slate-500 dark:text-[#6B7280]">({reviewsCount} reviews)</span>
          </div>

  
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {amenities.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-100 dark:bg-[#141414] text-slate-700 dark:text-[#9CA3AF] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-[#262626] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>


        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#1F1F1F] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 dark:text-[#6B7280] block uppercase tracking-wide">Per Night</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{prices}</span>
          </div>

          <button
            onClick={handleBooking}
            disabled={isBooked}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              isBooked
                ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 cursor-default"
                : "bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 shadow-sm"
            }`}
          >
            {isBooked ? "Inquiring..." : "Reserve Stay"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

import { useState, useEffect } from "react";

function Gallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => {
          // Make first image larger for a beautiful hero-gallery effect
          const isFeatured = index === 0;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg cursor-pointer group transition-all duration-300 ${
                isFeatured ? "col-span-2 row-span-2 h-96" : "h-44"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={`${name || "Destination"} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-200" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-5 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200"
            onClick={handlePrev}
          >
            ◀
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[80vh] px-4 flex flex-col items-center">
            <img
              src={images[selectedIndex]}
              alt={`${name} Enlarged`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Status indicators */}
            <div className="absolute -bottom-8 text-white/80 text-sm font-semibold">
              {selectedIndex + 1} of {images.length}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-5 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200"
            onClick={handleNext}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;

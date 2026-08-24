import { useState, useEffect, useCallback } from "react";

function Gallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

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
  }, [selectedIndex, handleNext, handlePrev]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {images.map((image, index) => {
          const isFeatured = index === 0;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-[#262626] bg-slate-100 dark:bg-[#0A0A0A] cursor-pointer group transition-all duration-300 shadow-xs ${
                isFeatured ? "col-span-2 row-span-2 h-80 sm:h-96" : "h-38 sm:h-44"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={`${name || "Destination"} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-200" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 border border-white/15 w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-200 cursor-pointer shadow-lg"
            onClick={() => setSelectedIndex(null)}
            title="Close Gallery"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 sm:left-8 text-white bg-white/10 hover:bg-white/20 border border-white/15 w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200 cursor-pointer shadow-lg"
            onClick={handlePrev}
            title="Previous Image"
          >
            ◀
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[82vh] px-4 flex flex-col items-center">
            <img
              src={images[selectedIndex]}
              alt={`${name} Enlarged`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Status indicators */}
            <div className="mt-4 text-white/90 text-xs font-semibold bg-white/10 backdrop-blur-xs border border-white/10 px-3.5 py-1 rounded-full">
              {selectedIndex + 1} of {images.length}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 sm:right-8 text-white bg-white/10 hover:bg-white/20 border border-white/15 w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200 cursor-pointer shadow-lg"
            onClick={handleNext}
            title="Next Image"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;

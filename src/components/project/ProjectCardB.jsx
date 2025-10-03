// src/components/project/ProjectCardB.jsx
import React, { useRef, useEffect, useState } from "react";

// contoh images
import img1 from "./img/aurora1.jpg";
import img2 from "./img/aurora2.webp";
import img3 from "./img/aurora3.webp";
import img4 from "./img/aurora4.jpg";

function ProjectCardB() {
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const slider = sliderRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 3;
    };
    slider.addEventListener("wheel", onWheel);

    const onScroll = () => {
      const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      setActiveDot(activeIndex);
    };
    slider.addEventListener("scroll", onScroll);

    return () => {
      slider.removeEventListener("wheel", onWheel);
      slider.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    slider.scrollTo({ left: slider.clientWidth * index, behavior: "smooth" });
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg w-[360px] overflow-hidden">
      <div className="relative w-full aspect-[2/3.1] overflow-hidden rounded-3xl">
        {/* Slider gambar */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth w-full h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0 snap-center">
              <img
                src={img}
                alt={`slide-${i}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            </div>
          ))}
        </div>

        {/* Overlay caption */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Deep Blue Nights</h2>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">$2,999</span>
          </div>
          <p className="text-sm mb-4 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa veritatis dicta qui maxime fuga obcaecati laboriosam aperiam, iste maiores harum!
          </p>
          <div className="flex gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Top Pick</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Only 9 vibes left</span>
          </div>
          <button className="w-full bg-white hover:bg-gray-200 text-teal-900 font-semibold py-3 rounded-full transition">
            Add to Cart
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute top-2 w-full flex justify-center space-x-[5px] z-20">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`dot h-1.5 rounded-full cursor-pointer ${
                i === activeDot ? "bg-white/50 w-5" : "bg-white/20 w-1.5"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCardB;

// src/components/project/ProjectCardA.jsx
import React, { useRef, useEffect, useState } from "react";

// contoh images
import img1 from "./img/aurora1.jpg";
import img2 from "./img/aurora2.webp";
import img3 from "./img/aurora3.webp";
import img4 from "./img/aurora4.jpg";

function ProjectCardA() {
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const slider = sliderRef.current;

    // scroll pakai wheel
    const onWheel = (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 3;
    };
    slider.addEventListener("wheel", onWheel);

    // update dot aktif saat scroll
    const onScroll = () => {
      const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      setActiveDot(activeIndex);
    };
    slider.addEventListener("scroll", onScroll);

    // cleanup
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
    <div className="bg-white flex flex-col rounded-3xl shadow-lg w-[360px] p-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-lg">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="flex-shrink-0 min-w-full aspect-square object-cover snap-center"
            />
          ))}
        </div>
        {/* Dot indicator */}
        <div className="absolute bottom-3 w-full flex justify-center space-x-[5px]">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`dot h-1.5 rounded-full cursor-pointer ${
                i === activeDot ? "bg-white/60 w-5" : "bg-white/30 w-1.5"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">Deep Blue Nights</h2>
          <span className="bg-teal-900 text-white text-xs px-3 py-1 rounded-full">
            $2,999
          </span>
        </div>
        <p className="text-xs text-justify mb-4 text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi quas
          iure nihil.
        </p>
        <div className="flex gap-2 mb-4">
          <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
            Top Pick
          </span>
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
            Only 9 vibes left
          </span>
        </div>
        <button className="w-full bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 rounded-full transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProjectCardA;

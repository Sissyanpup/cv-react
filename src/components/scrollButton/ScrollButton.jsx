import React, { useEffect, useState } from "react";

function ScrollButton() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsBottom(scrollY + windowHeight >= docHeight - 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={isBottom ? "#uppest" : "#the-end"}
      className="fixed bottom-5 right-5 z-50 transition-all duration-300"
    >
      <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-zinc-900/5 shadow-lg rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-primary transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isBottom
                ? "M5 15l7-7 7 7" // panah ke atas
                : "M19 9l-7 7-7-7" // panah ke bawah
            }
          />
        </svg>
      </div>
    </a>
  );
}

export default ScrollButton;

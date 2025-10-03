import React, { useEffect, useState } from "react";
import profilePic from "../assets/beranda/pfp.png";
import cloudImg1 from "../assets/beranda/awan1.PNG";
import cloudImg2 from "../assets/beranda/awan2.PNG";
import fgImg from "../assets/beranda/fg.PNG";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="beranda" className="relative w-full h-screen overflow-hidden">
        <div id="uppest"></div>
      {/* Layer 1: Langit */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 bg-gradient-to-b from-blue-300 to-blue-500"></div>

      {/* Layer 3: Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center px-4"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <img
          src={profilePic}
          alt="Profil"
          className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-5xl font-bold text-white mb-2">
          Muhammad Zirlda Prairi
        </h1>
        <p className="text-xl text-white mb-4">
          Frontend Developer & UI/UX Designer
        </p>
        <a
          href="https://daily-activity-zirlda.vercel.app/index.html" target="_blank"
          className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-darkPrimary transition"
        >
          Lihat Daily Activity
        </a>
      </div>

      {/* Layer 4: Rumput / foreground */}
      <div
        className="absolute bottom-0 left-0 w-full z-30 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <img src={fgImg} alt="grass" className="w-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;

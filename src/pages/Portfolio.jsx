// src/pages/Portfolio.jsx
import React from "react";
import ProjectCardA from "../components/project/ProjectCardA";
import ProjectCardB from "../components/project/ProjectCardB";

function Portfolio() {
  const projects = [
    {
      title: "Deep Blue Nights",
      price: "$2,999",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis aliquid ea, rem facere expedita consequatur consequuntur magni tempora voluptates!", 
      tags: ["Top Pick", "Only 9 vibes left"],
    },
    // tambahkan project lain
  ];

  return (
    <section id="portfolio" className="pt-36 pb-32">
        <div className="flex flex-col justify-center items-center mx-auto">
        <h2 className="text-darkPrimary text-4xl font-bold mb-6">Contoh Project Kecil Saya</h2>
            <div className="container mx-auto flex flex-wrap justify-center items-center gap-16">
                <ProjectCardA />
                <ProjectCardB />
            </div>
        </div>
    </section>
  );
}

export default Portfolio;

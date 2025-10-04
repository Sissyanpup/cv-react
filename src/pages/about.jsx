import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "Procreate",
  "Lightroom",
  "JavaScript",
  "HTML/CSS",
];

function AboutMe() {
  return (
    <section className="pt-36 pb-32 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto text-center px-10">
        <h2 className="text-4xl font-bold mb-6 text-darkPrimary">Tentang Saya</h2>
        <p className="text-lg text-gray-700 mb-10">
          Saya seorang Frontend Developer dan Digital Artist. Passion saya adalah membuat website interaktif dan estetis, serta mengembangkan skill visual art.
        </p>

        {/* Skill Highlights */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <button
              key={skill}
              className="px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-primary hover:text-white hover:scale-105 transition transform duration-300"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

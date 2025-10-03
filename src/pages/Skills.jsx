import React from "react";
import "./css/Skills.css";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "HTML", level: 85, detail: "Mahir dalam struktur dan semantik HTML5." },
      { name: "CSS", level: 70, detail: "Penguasaan layout, responsive, dan animasi." },
      { name: "JavaScript", level: 15, detail: "Logika dasar, DOM, dan ES6+." },
      { name: "PHP", level: 25, detail: "Backend dasar dan integrasi database." },
    ],
  },
  {
    category: "Frameworks / Libraries",
    items: [
      { name: "React", level: 30, detail: "Pengembangan SPA dan komponen modular." },
      { name: "Tailwind", level: 80, detail: "Styling cepat berbasis utility-first." },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 30, detail: "Kontrol versi dan kolaborasi proyek." },
      { name: "Linux", level: 30, detail: "Dasar terminal dan manajemen sistem." },
      { name: "Shell", level: 35, detail: "Menulis script otomatisasi sederhana." },
    ],
  },
  {
    category: "MicrosoftOffice",
    items: [
      { name: "Word", level: 80, detail: "Kontrol versi dan kolaborasi proyek." },
      { name: "Excel", level: 60, detail: "Dasar terminal dan manajemen sistem." },
      { name: "PowerPoint", level: 65, detail: "Menulis script otomatisasi sederhana." },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="pt-36 pb-32 bg-white">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-16 text-darkPrimary">Skills & Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((group, i) => (
            <div key={i} className="fade-up text-left">
              <h3 className="text-2xl font-semibold mb-8 text-secondary">
                {group.category}
              </h3>

              <div className="flex flex-col gap-6">
                {group.items.map((skill, j) => (
                  <div key={j} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm font-semibold text-secondary">{skill.level}%</span>
                    </div>

                    {/* Progress bar container */}
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
                      <div
                        className="bg-secondary h-4 rounded-full progress-line"
                        style={{ width: `${skill.level}%` }}
                      ></div>

                      {/* Tooltip saat hover */}
                      <div className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-indigo-600 text-white text-xs rounded-lg px-3 py-2 shadow-lg z-10 text-center">
                        {skill.detail}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rotate-45"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

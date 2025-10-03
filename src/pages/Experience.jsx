import React, { useState } from "react";
import "./css/Experience.css";

const experiences = [
  {
    company: "Freelance BethaPup",
    position: "Directur Digital Artist",
    duration: "Jan 2022 - Sekarang",
    summary: "Meluangkan karya seni pada citra digital.",
    details:
      "Menggambar dan memotret sebagai media luang karya seni visual, dapat membagikan suasana, memori, maupun sekedar konsumsi.",
  },
  {
    company: "Project Class - Pamulang University",
    position: "Frontend Developer",
    duration: "Jun 2024 - Sekarang",
    summary: "Mengembangkan UI interaktif untuk platform profile.",
    details:
      "Bertanggung jawab atas pengembangan komponen React reusable, optimasi performa halaman, serta kolaborasi dengan tim backend untuk integrasi API.",
  },
];

function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="pt-36 pb-32 bg-gray-50 transition-all duration-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-darkPrimary">Pengalaman</h2>

        <div className="relative border-l-4 border-secondary ml-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-10 ml-8 relative group cursor-pointer transition-all"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <span className="absolute -left-4 top-2 w-8 h-8 bg-secondary rounded-full border-4 border-white group-hover:scale-110 transition-transform"></span>

              <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="text-secondary font-medium">
                  {exp.position} • {exp.duration}
                </p>
                <p className="mt-2 text-gray-700">{exp.summary}</p>

                {/* Expandable details */}
                {expanded === index && (
                  <div className="mt-4 text-gray-600 border-t pt-3 animate-slideDown">
                    {exp.details}
                  </div>
                )}
                {expanded !== index && (
                  <div className="hidden-content animate-slideUp"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

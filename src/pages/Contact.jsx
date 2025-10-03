import React from "react";
import wa from "../assets/sosmed/wa.jpg";
import tele from "../assets/sosmed/tele.jpg";
import gm from "../assets/sosmed/gmail.jpg";
import dc from "../assets/sosmed/dc.png";
import git from "../assets/sosmed/git.png";

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white via-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-darkPrimary mb-4">Contact Me</h2>
          <p className="text-zinc-600">Terhubunglah denganku melalui sosial media berikut</p>
        </div>

        {/* Grid Sosial Media */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          
          {/* Card WhatsApp */}
          <a
            href="https://wa.me/6285219558325"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-64 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <img
              src={wa}
              alt="WhatsApp"
              className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">WhatsApp</h3>
            <p className="text-sm text-zinc-600">Zirlda</p>
          </a>

          {/* Card Telegram */}
          <a
            href="https://t.me/sissyan"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-64 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <img
              src={tele}
              alt="Telegram"
              className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Telegram</h3>
            <p className="text-sm text-zinc-600">@sissyan</p>
          </a>

          {/* Card Gmail */}
          <a
            href="mailto:muhammadzirldaprairi999@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-64 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <img
              src={gm}
              alt="Gmail"
              className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Gmail</h3>
            <p className="text-sm text-zinc-600">email</p>
          </a>

          {/* Card Discord */}
          <a
            href="https://discord.com/users/710100510836785193"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-64 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <img
              src={dc}
              alt="Discord"
              className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Discord</h3>
            <p className="text-sm text-zinc-600">@bethapup</p>
          </a>

          {/* Card GitHub */}
          <a
            href="https://github.com/Sissyanpup"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-64 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <img
              src={git}
              alt="GitHub"
              className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">GitHub</h3>
            <p className="text-sm text-zinc-600">@Sissyanpup</p>
          </a>
            </div>
        </div>
    </section>
  );
}

export default Contact;

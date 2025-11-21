import { skillsData } from "../data/data.jsx";
import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="page-wrapper relative py-12 bg-[#121219] border border-white/6"> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-center text-white mb-8 space-y-2">
            <h2 className="text-3xl font-bold">
                my <span className="text-pink-600 italic">skills</span>
            </h2>
            <p>may or may not be true, u decide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div key={category.title} className="p-6 rounded-xl border border-white/6 bg-white/3">
              <h3 className="text-xl text-white font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="relative group">
                    <div className="flex items-center gap-3 px-3 py-2 bg-white/4 border border-white/6 rounded-full text-white text-sm transition transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-2xl group-hover:z-20 group-hover:bg-white/12 group-hover:border-white/20 group-hover:text-white">
                      <span className="w-5 h-5 flex items-center justify-center">{skill.icon}</span>
                      <span className="whitespace-nowrap">{skill.name}</span>
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
};
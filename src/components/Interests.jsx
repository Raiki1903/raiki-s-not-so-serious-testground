import React, { useState } from "react";
import { interestsData } from "../data/data.jsx";

export const Interests = () => {
  const categories = interestsData.map((c) => c.category);
  const [active, setActive] = useState("Music");

  const activeGroup = interestsData.find((g) => g.category === active) || interestsData[0];

  return (
    <section id="interests" className="page-wrapper relative py-12 bg-[#121219] border border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className=" text-white mb-8 space-y-2 flex flex-col items-center">
            <h2 className="text-3xl font-bold">
                my <span className="text-pink-600 italic">interests</span>
            </h2>
            <p>i recommend you check these out (please do, especially warframe)</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition-colors 
                ${
                    active === cat ? "text-pink-600 bg-white/5" : "text-white hover:text-pink-600"
                }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of items for active category */}
        {/* Small screens: simple responsive grid. Md+ screens: display first 3 items in a row, then center remaining items on a second row. */}
        {/* Unified responsive grid — matches project layout */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeGroup.items.map((it, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 shadow-lg/5 flex flex-col items-center">
                    <div className="overflow-hidden rounded-md mb-4 w-full aspect-square">
                        <img src={it.image} alt={it.name} className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-sm font-medium text-white">{it.name}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

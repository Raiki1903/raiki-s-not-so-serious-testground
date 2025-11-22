import React from "react";
import { projectItems } from "../data/data.jsx";

export const Projects = () => {
    return (
        <section id="projects" className="w-full py-12">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-start gap-8 ">
                {/* Header */}
                <div className="w-full z-20">
                    <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-pink-600 italic">Projects</span></h2>
                    <p className="text-sm text-white mb-6">these aren't real, don't take them seriously 😅</p>
                </div>

                {/* Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectItems.map((p, idx) => (
                            <article key={idx} className="p-4 rounded-xl border border-white/6 bg-white/6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 shadow-lg/5">
                                <div className="overflow-hidden rounded-md mb-4">
                                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
                                <p className="text-sm text-white mb-4">{p.category}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
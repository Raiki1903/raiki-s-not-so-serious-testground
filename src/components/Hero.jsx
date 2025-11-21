import { contactItems } from "../data/data.jsx";
import React, { useState } from "react";
import { HeadingHero } from "../utils/HeadingHero.jsx";
import profile from "../assets/profile.jpg";
import bald from "../assets/bald.jpg";

export const Hero = () => {
    const [isBald, setIsBald] = useState(false);

    const toggleImage = () => {
        setIsBald(prev => !prev);
    };

    return (
        <section id="profile" className="w-full min-h-screen flex items-center py-20">
            <div className="max-w-6xl mx-auto px-12 py-12 flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg aspect-square relative z-10">
                        <img 
                            src={isBald ? bald : profile}
                            alt="Profile"
                            onClick={toggleImage}
                            className="w-full h-full object-cover block cursor-pointer select-none"
                            title="click me 👀"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-white space-y-5">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold">hi, i'm Raiki! i'm a</h2>
                        <HeadingHero />
                    </div>

                    <p className="text-white leading-relaxed indent-8">
                        welcome to my testground, a small space for my practice and nonsense. this page will have my projects, skills, interests, and anything else that i can think of. go scroll down to see whats up.
                    </p>

                    <div className="flex gap-4 mt-4 justify-center">
                        {contactItems.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

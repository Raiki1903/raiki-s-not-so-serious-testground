import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../data/data.jsx';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    // close when clicking outside the menu or button
    useEffect(() => {
        const handleOutside = (e) => {
            if (!isOpen) return;
            const target = e.target;
            if (menuRef.current && menuRef.current.contains(target)) return;
            if (buttonRef.current && buttonRef.current.contains(target)) return;
            setIsOpen(false);
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [isOpen]);
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="bg-[#121219] bg-opacity-95 backdrop-blur-sm border-b border-white/5">
                    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between relative">
                        <div className="flex space-x-2 items-center" >
                            <span className="text-white font-bold text-lg">Raiki's</span>
                            <span className="text-pink-600 font-bold text-lg">Testground</span>
                        </div>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} className="text-white hover:text-pink-600 focus:text-pink-600 transition">
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            ref={buttonRef}
                            className="md:hidden p-2 text-white"
                            onClick={() => setIsOpen((s) => !s)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                        {/* Mobile dropdown menu positioned under the button (inside container for symmetric padding) */}
                        <div ref={menuRef} className={`md:hidden absolute right-6 top-full mt-2 w-44 bg-[#121219] border border-white/10 rounded-md shadow-lg py-2 ${isOpen ? 'block' : 'hidden'}`}>
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} className="block px-4 py-2 text-white hover:bg-white/5" onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
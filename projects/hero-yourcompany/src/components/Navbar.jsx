// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between py-4 px-6 relative">
            {/* Brand / Logo */}
            <div className="text-xl font-bold">
                <Link to="/">YourCompany</Link>
            </div>

            {/* Hamburger icon (shown on mobile) */}
            <button
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Navigation Links */}
            <ul className={`bg-[#0b0d26] md:bg-transparent md:flex md:items-center md:static absolute md:relative w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
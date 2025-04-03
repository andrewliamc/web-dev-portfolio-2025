// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between py-4 px-6 relative">
            {/* Logo/Brand */}
            <div className="text-xl font-bold">
                <NavLink to="/" end>
                    YourCompany
                </NavLink>
            </div>

            {/* Hamburger icon for mobile */}
            <button
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Navigation Links */}
            <ul
                className={`bg-[#0b0d26] md:bg-transparent md:flex md:items-center md:static absolute md:relative w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
                    }`}
            >
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <NavLink
                        to="/"
                        end
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 underline" : "hover:text-gray-300"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 underline" : "hover:text-gray-300"
                        }
                    >
                        About Us
                    </NavLink>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <NavLink
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 underline" : "hover:text-gray-300"
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <NavLink
                        to="/blog"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 underline" : "hover:text-gray-300"
                        }
                    >
                        Blog
                    </NavLink>
                </li>
                <li className="md:mx-2 p-2 md:p-0 text-center">
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 underline" : "hover:text-gray-300"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
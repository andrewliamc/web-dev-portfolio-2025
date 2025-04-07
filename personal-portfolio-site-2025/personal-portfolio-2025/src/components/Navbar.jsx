import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className="w-full bg-[#ECECEC] fixed top-0 left-0 z-30">
            <div className="container mx-auto pr-2 pl-6 py-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <div className="text-2xl font-logo">
                        &#123;<span className='text-[#AF69D7] underline'>al</span><span className="text-[#1B1B1B]">Designs&#125;</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="font-body font-medium hidden md:flex space-x-8">
                    <li>
                        <Link to="/" className="text-[#1B1B1B] hover:text-[#AF69D7] px-5">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-[#1B1B1B] hover:text-[#AF69D7] px-5">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-[#1B1B1B] hover:text-[#AF69D7] px-5">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-[#1B1B1B] hover:text-[#AF69D7] pl-5">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden relative -left-6">
                    <div className="p-1 rounded-sm flex items-center justify-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isOpen ? (
                                <CloseIcon size={32} color="#1B1B1B" />
                            ) : (
                                <HamburgerIcon size={32} color="#1B1B1B" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col space-y-4 px-4 py-4 font-medium text-2xl">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-[#1B1B1B] hover:text-[#AF69D7]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="text-[#1B1B1B] hover:text-[#AF69D7]">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={() => setIsOpen(false)} className="text-[#1B1B1B] hover:text-[#AF69D7]">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#1B1B1B] hover:text-[#AF69D7]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
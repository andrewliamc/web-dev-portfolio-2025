import React from 'react';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderOpen,
    AiOutlineMail,
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center py-8 space-y-8 bg-white shadow-md z-20">
            {/* Logo */}
            <div className="text-[#AF69D7] font-logo text-xl leading-none">
                al<span className="text-[#1B1B1B]">Designs</span>
            </div>

            {/* Navigation Icons */}
            <nav className="flex flex-col items-center space-y-6">
                <a
                    href="#home"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="Home"
                >
                    <AiOutlineHome size={24} />
                </a>
                <a
                    href="#about"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="About"
                >
                    <AiOutlineUser size={24} />
                </a>
                <a
                    href="#portfolio"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="Portfolio"
                >
                    <AiOutlineFolderOpen size={24} />
                </a>
                <a
                    href="#contact"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="Contact"
                >
                    <AiOutlineMail size={24} />
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="GitHub"
                >
                    <AiFillGithub size={24} />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
                    aria-label="LinkedIn"
                >
                    <AiFillLinkedin size={24} />
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="fixed bottom-6 left-6 flex flex-col items-center space-y-4 z-30">
            <a
                href="https://github.com/andrewliamc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
            >
                <AiFillGithub size={28} />
            </a>
            <a
                href="https://www.linkedin.com/in/andrewliamcox"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
            >
                <AiFillLinkedin size={28} />
            </a>
            <a
                href="https://www.youtube.com/@andrewliamdesigndevelopment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#1B1B1B] hover:text-[#AF69D7] transition-colors"
            >
                <AiFillYoutube size={28} />
            </a>
        </div>
    );
};

export default Footer;
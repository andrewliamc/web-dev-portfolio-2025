// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-7xl mx-auto px-4 lg:mt-16"
        >
            {/* Square Image with Rounded Corners (left) */}
            <div className="mb-6 md:mb-0 md:mx-auto">
                <div className="w-95 h-95 lg:w-100 lg:h-100 border-4 border-[#1B1B1B] overflow-hidden rounded-lg">
                    <img
                        src="/src/assets/AI-galactic-side-profile.JPG"
                        alt="Andrew's Profile"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Hero Text (right) */}
            <div className='md:px-10'>
                <h2 className="font-body text-4xl md:text-4xl lg:text-8xl font-medium">
                    Hi, I am <span className="text-[#AF69D7] font-extrabold">ANDREW</span>.
                </h2>
                <h3 className="font-body text-2xl mt-2">FRONT-END DEVELOPER</h3>
                <p className="font-body font-light mt-4 max-w-xl text-lg md:text-xl lg:text-3xl">
                    I create <span className="text-[#AF69D7]">smart</span> &amp; <span className="text-[#7869D7]">empathic</span> designs with real-world impact.
                    I build sleek, user-first interfaces that deliver <span className="text-[#697BD7]">results</span>.
                </p>
                <button className="mt-8 bg-[#AF69D7] text-[#ECECEC] font-bold px-6 py-3 rounded-full hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AF69D7]">
                    Connect
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
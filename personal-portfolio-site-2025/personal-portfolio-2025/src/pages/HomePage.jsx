import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
    return (
        <main className="ml-16 px-8 py-12 md:py-16 relative">
            {/* Large Background Text */}
            <h1 className="block text-[8rem] xl:text-[10rem] text-[#1B1B1B] font-bold absolute top-0 left-[-2rem] z-0 pointer-events-none">
                DESIGNER
            </h1>
            <h1 className="block text-[8rem] xl:text-[10rem] text-[#1B1B1B] font-bold absolute bottom-0 right-[-4rem] z-0 pointer-events-none">
                DEVELOPER
            </h1>

            {/* Wrap HeroSection in a container with a higher z-index */}
            <div className="relative z-10">
                <HeroSection />
            </div>
        </main>
    );
};

export default HomePage;
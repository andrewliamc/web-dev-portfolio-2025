import React from "react";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center px-6 md:px-16 py-12 md:py-24">
            {/* Background / Orbiting shapes illustration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Example shapes (circles, birds, etc.) */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Circle */}
                    {/* <div className="absolute w-64 h-64 bg-blue-500 opacity-20 rounded-full -top-10 left-20 animate-pulse"></div> */}
                    {/* <div className="absolute w-40 h-40 bg-pink-500 opacity-30 rounded-full top-20 right-10 animate-pulse"></div> */}
                    {/* Additional shapes */}
                    {/* <div className="absolute w-6 h-6 bg-white rounded-full -top-4 left-1/2 animate-bounce"></div> */}
                    {/* <div className="absolute w-4 h-4 bg-blue-200 rounded-full top-1/3 right-1/3 animate-pulse"></div> */}
                    {/* Feel free to add or remove shapes as needed */}
                </div>
            </div>

            {/* Foreground content (e.g., a character illustration) */}
            <div className="relative z-10">
                {/* Placeholder for the character/illustration */}
                {/* <div className="w-48 h-64 bg-gray-300 rounded-md flex items-center justify-center text-black text-xl">
                    <span>Hero Illustration</span>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
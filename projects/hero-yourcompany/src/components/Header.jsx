import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex flex-col items-start justify-center px-6 md:px-16 py-12 md:py-24 leading-relaxed">
            <p className="text-lg text-gray-400 mb-2">We are a creative team.</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                The best way to <br className="hidden md:block" /> promote business
            </h1>
            <p className="text-gray-300 max-w-2xl mb-6">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
            </p>
            <div className="flex space-x-4">
                <Link
                    to="/about"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
                >
                    Discover More
                </Link>
                <Link
                    to="/services"
                    className="border border-gray-500 px-6 py-2 rounded text-white font-semibold hover:bg-gray-700"
                >
                    Explore Services →
                </Link>
            </div>
        </header>
    );
};

export default Header;
// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} TailGrids. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link to="/privacy" className="text-sm hover:text-white mx-2">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm hover:text-white mx-2">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
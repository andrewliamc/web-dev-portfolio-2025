// src/pages/Services.jsx
import React from "react";
import { FiLayers, FiShoppingCart, FiTrendingUp, FiMonitor, FiDatabase, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const servicesData = [
    {
        id: 1,
        icon: <FiLayers size={32} />,
        name: "Basic Plan",
        description: "We work with discerning clients who value quality, service, integrity & aesthetics.",
        details: ["Responsive Design", "SEO Optimized", "Analytics Included"],
        price: "$9.99/month",
    },
    {
        id: 2,
        icon: <FiShoppingCart size={32} />,
        name: "Standard Plan",
        description: "A perfect plan for small businesses looking to grow online.",
        details: ["Custom Designs", "E-Commerce Support", "24/7 Support"],
        price: "$19.99/month",
    },
    {
        id: 3,
        icon: <FiTrendingUp size={32} />,
        name: "Premium Plan",
        description: "Ideal for companies wanting a competitive edge and premium support.",
        details: ["Unlimited Revisions", "Priority Support", "Advanced Analytics"],
        price: "$29.99/month",
    },
    {
        id: 4,
        icon: <FiMonitor size={32} />,
        name: "Gold Plan",
        description: "For those who need dedicated account management and custom integrations.",
        details: ["Dedicated Manager", "Custom Integrations", "Marketing Tools"],
        price: "$39.99/month",
    },
    {
        id: 5,
        icon: <FiDatabase size={32} />,
        name: "Platinum Plan",
        description: "Comprehensive branding suite for businesses seeking full-scale solutions.",
        details: ["Full Branding Suite", "Pro Photography", "Custom Code"],
        price: "$49.99/month",
    },
    {
        id: 6,
        icon: <FiStar size={32} />,
        name: "Diamond Plan",
        description: "Enterprise-level solutions with premium support and custom APIs.",
        details: ["Enterprise Solutions", "Custom API", "Premium Support"],
        price: "$59.99/month",
    },
];

const Services = () => {
    return (
        <section className="py-12 px-6 md:px-16 text-center">
            {/* Section Header */}
            <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
                Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                What We Offer
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white text-black rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-block">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {service.description}
                        </p>
                        <ul className="text-sm text-gray-700 mb-4">
                            {service.details.map((detail, idx) => (
                                <li key={idx} className="mb-1">
                                    {detail}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg font-semibold">{service.price}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button: Work With Us */}
            <div className="mt-8">
                <Link
                    to="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
                >
                    Work With Us
                </Link>
            </div>
        </section>
    );
};

export default Services;
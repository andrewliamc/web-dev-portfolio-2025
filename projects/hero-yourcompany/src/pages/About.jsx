import React from "react";
import { assets } from "../assets/assets"; // Adjust the path as needed

const About = () => {
    return (
        <section className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 sm:flex-row-reverse">
            {/* Left Side: Grid of Images */}
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-160 self-center">
                <img
                    src={assets.about_1}
                    alt="Team collaborating"
                    className="w-full rounded-lg shadow-md"
                />
                <img
                    src={assets.about_2}
                    alt="Smiling man with glasses"
                    className="w-full rounded-lg shadow-md md:row-span-2 self-center"
                />
                <img
                    src={assets.about_3}
                    alt="Person working on laptop"
                    className="w-full rounded-lg shadow-md" // spans two columns on medium screens
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-1/2 px-10">
                <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
                    Why Choose Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Make your customers happy by giving services.
                </h2>
                <p className="text-gray-300 mb-4">
                Our journey began over a decade ago, when a small group of passionate individuals decided to challenge the status quo. With a   shared vision of innovation and a commitment to excellence, we embarked on a path that would eventually redefine our industry. Every step of the  way, our focus has remained on delivering quality and value to our customers.
                </p>
                <p className="text-gray-300 mb-4">
                At the core of our business is a relentless pursuit of perfection. We believe that the key to success lies in a deep understanding of our clients' needs, combined with the ability to translate those needs into effective solutions. Our team is driven by creativity and fueled by the desire to make a meaningful impact in every project we undertake.
                </p>
                <p className="text-gray-300 mb-4">
                Our values are the foundation of everything we do. Integrity, transparency, and a commitment to excellence guide our actions, ensuring that we build lasting relationships with our clients, partners, and employees. We are proud to cultivate a culture where innovative ideas are nurtured, and where every challenge is met with determination and optimism.
                </p>
                <p className="text-gray-300 mb-4">
                Collaboration is at the heart of our success. We work closely with our clients, combining our expertise with their vision to create solutions that are both innovative and effective. By fostering an environment of open communication and continuous learning, we have built a team that is not only skilled, but also passionate about driving progress in our industry.
                </p>
                <p className="text-gray-300 mb-6">
                As we look to the future, we remain committed to pushing boundaries and exploring new horizons. Our ongoing investments in research, technology, and talent empower us to anticipate market trends and deliver cutting-edge solutions. We invite you to join us on this exciting journey, as we continue to innovate and shape the future of our industry.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default About;
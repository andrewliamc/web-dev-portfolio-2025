import React, { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Import LinkedIn & Twitter icons

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message was sent!");

        // Clear the form fields (optional)
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section className="py-12 px-6 md:px-16 flex flex-col md:flex-row gap-8">
            {/* Left Side: Contact Information */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="mb-2">
                    <strong>Address:</strong> 123 Main St, Suite 456, Anytown, USA
                </p>
                <p className="mb-2">
                    <strong>Phone:</strong> (123) 456-7890
                </p>
                <p className="mb-2">
                    <strong>Fax:</strong> (123) 456-7891
                </p>
                <p className="mb-2">
                    <strong>Email:</strong> info@example.com
                </p>
                <div className="flex space-x-4 mt-4">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                        aria-label="X"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>
                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
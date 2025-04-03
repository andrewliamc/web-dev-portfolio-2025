// src/pages/Blog.jsx
import React from "react";

// Example blog data
const blogPosts = [
    {
        id: 1,
        date: "Dec 22, 2023",
        title: "Meet AutoManage, the best AI management tools",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/src/assets/blog_1.jpg", // Replace with your own image path
    },
    {
        id: 2,
        date: "Mar 15, 2023",
        title: "How to earn more money as a wellness coach",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/src/assets/blog_2.jpg", // Replace with your own image path
    },
    {
        id: 3,
        date: "Jan 05, 2023",
        title: "The no-fuss guide to upselling and cross selling",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/src/assets/blog_3.jpg", // Replace with your own image path
    },
];

const Blog = () => {
    return (
        <section className="py-12 px-6 md:px-16 text-center">
            {/* Section Header */}
            <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
                Our Blogs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Recent News</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white text-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Blog Image */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Post Content */}
                        <div className="p-6 text-left">
                            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                                {post.date}
                            </span>
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-700">{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
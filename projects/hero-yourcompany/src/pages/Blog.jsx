// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../sanityClient';

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post"] | order(_createdAt desc) {
                _id,
                title,
                slug,
                _createdAt,
                excerpt,
                "mainImageUrl": mainImage.asset->url
        }`
            )
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.error('Error fetching blog posts:', err);
                setError("Failed to load blog posts. Please try again later.");
            });
    }, []);

    if (error) {
        return (
            <section className="py-12 px-6 md:px-16 text-center">
                <p className="text-red-500">{error}</p>
            </section>
        );
    }

    if (!posts) {
        return (
            <section className="py-12 px-6 md:px-16 text-center">
                <p>Loading blog posts...</p>
            </section>
        );
    }

    return (
        <section className="py-12 px-6 md:px-16 text-center">
            <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
                Our Blogs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Recent News</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover our latest insights, articles, and updates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link to={`/blog/${post.slug.current}`} key={post._id}>
                        <div className="bg-white text-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            {post.mainImageUrl && (
                                <img
                                    src={post.mainImageUrl}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6 text-left">
                                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                                    {new Date(post._createdAt).toLocaleDateString()}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-700">{post.excerpt}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Blog;
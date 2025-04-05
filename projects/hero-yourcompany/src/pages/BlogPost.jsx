// src/pages/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../sanityClient";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
    block: {
        normal: ({ children }) => <p className="my-4 text-lg">{children}</p>,
        h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 pl-4 italic text-gray-600">
                {children}
            </blockquote>
        ),
    },
};

const BlogPost = () => {
    const { slug } = useParams(); // Extract slug from URL
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post" && slug.current == $slug][0]{
                _id,
                title,
                body,
                "mainImageUrl": mainImage.asset->url,
                _createdAt,
                "authorName": author->name
        }`,
                { slug }
            )
            .then((data) => setPost(data))
            .catch((err) => {
                console.error("Error fetching blog post:", err);
                setError("Failed to load blog post. Please try again later.");
            });
    }, [slug]);

    if (error) {
        return (
            <section className="py-12 px-6 md:px-16 text-center">
                <p className="text-red-500">{error}</p>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="py-12 px-6 md:px-16 text-center">
                <p>Loading blog post...</p>
            </section>
        );
    }

    return (
        <article className="max-w-4xl mx-auto py-12 px-6 text-black bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-1">
                {new Date(post._createdAt).toLocaleDateString()}
            </p>
            {post.authorName && (
                <p className="text-gray-500 mb-4">By {post.authorName}</p>
            )}
            {post.mainImageUrl && (
                <img
                    src={post.mainImageUrl}
                    alt={post.title}
                    className="w-full h-auto mb-8"
                />
            )}
            <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} components={myPortableTextComponents} />
            </div>
        </article>
    );
};

export default BlogPost;
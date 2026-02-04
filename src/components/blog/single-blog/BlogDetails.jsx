import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet-async";  // Importing Helmet
import PostMeta from "./PostMeta";
import CommentForm from "./CommentForm";


// ...existing code...
import CommentList from "./CommentList";

function BlogDetails({ blog }) {
    // Assuming `blog.slug` is available and represents the unique identifier for the blog
    const canonicalUrl = `https://chameleogfxstudio.com/blog/${blog.slug}`; // Replace with your actual blog base URL

    // This function extracts all JSON content from multiple schema script tags
    const extractSchemas = (schemaString) => {
        if (!schemaString || typeof schemaString !== "string") {
            return [];
        }
        // This regular expression gets the content from between all <script> tags
        const regex = /<script.*?>([\s\S]*?)<\/script>/g;
        const schemas = [];
        let match;
        while ((match = regex.exec(schemaString)) !== null) {
            schemas.push(match[1]);
        }
        return schemas;
    };

    const schemas = extractSchemas(blog.schema);

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                {/* This will add the schema scripts to the page head if they exist */}
                {schemas.map((schema, index) => (
                    <script key={index} type="application/ld+json">
                        {schema}
                    </script>
                ))}
            </Helmet>

            <div className="post-thumbnail">
                <LazyLoadImage src={blog.img} alt={blog.alt || blog.title} effect="blur" />
            </div>

            <div className="single-post-content-wrap">
                <PostMeta date={blog.date} />
                <div className="entry-content">
                    <h1 className="blog-h1 mb-3">{blog.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
                </div>
                {/* <CommentForm /> */}
                {/* <CommentList /> */}
            </div>
        </>
    );
}

export default BlogDetails;

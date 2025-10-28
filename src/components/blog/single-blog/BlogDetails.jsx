import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";  // Importing Helmet
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
import CommentForm from "./CommentForm";


// ...existing code...
import CommentList from "./CommentList";

function BlogDetails({ blog }) {
    // Assuming `blog.slug` is available and represents the unique identifier for the blog
    const canonicalUrl = `https://chameleogfxstudio.com/blog/${blog.slug}`; // Replace with your actual blog base URL

    // This function extracts the JSON content from the schema string
    const extractJsonFromScript = (scriptString) => {
        if (!scriptString || typeof scriptString !== "string") {
            return null;
        }
        // This regular expression gets the content from between the <script> tags
        const match = scriptString.match(/<script.*?>(.*?)<\/script>/s);
        return match ? match[1] : null;
    };

    const schemaJson = extractJsonFromScript(blog.schema);

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                {/* This will add the schema script to the page head if it exists */}
                {schemaJson && <script type="application/ld+json">{schemaJson}</script>}
            </Helmet>

            <div className="post-thumbnail">
                <LazyLoadImage src={blog.img} alt={blog.alt || blog.title} effect="blur" />
            </div>

            <div className="single-post-content-wrap">
                <PostMeta date={blog.date} />
                <div className="entry-content">
                    <h1 className="blog-h1 mb-3">{blog.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
                    <PostTags />
                </div>
                {/* <CommentForm /> */}
                {/* <CommentList /> */}
            </div>
        </>
    );
}

export default BlogDetails;



import React from "react";
import { useParams } from "react-router-dom"; // To get the dynamic slug
import BlogBreadCrumb from "../../components/common/BlogBreadcrumb";
import SingleBlog from "../../components/blog/single-blog";

function SingleBlogPage() {
  const { slug } = useParams(); // Get slug from URL

  // Function to convert slug to title-case
  const convertSlugToTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = convertSlugToTitle(slug); // Convert the slug to title

  // This flag will allow you to choose when to convert the slug to title
  const isTitleDynamic = true; // Set this flag to true or false based on your need

  return (
    <>
      <BlogBreadCrumb title={isTitleDynamic ? title : slug} title2="Blog Details"/> {/* Conditionally pass title */}
      <SingleBlog slug={slug} /> {/* Pass the slug to the blog component */}
    </>
  );
}

export default SingleBlogPage;

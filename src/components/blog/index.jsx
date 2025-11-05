import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";
import { BlogData } from "./BlogData";
import Navigation from "./Navigation";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  // Reverse the BlogData array
  const reversedBlogData = [...BlogData].reverse(); // Using spread operator to avoid mutating original array

  // Filter blogs based on selected category or tag
  const filteredBlogs = selectedCategory
    ? reversedBlogData.filter((blog) => blog.category === selectedCategory)
    : selectedTag
    ? reversedBlogData.filter((blog) => blog.keywords.includes(selectedTag))
    : reversedBlogData;

  // Get all unique tags
  const allTags = [...new Set(BlogData.flatMap((blog) => blog.keywords))];

  // Calculate the index range for blogs to be displayed on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Slice the blog data based on the page
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTag(null); // Reset tag when category is selected
    setCurrentPage(1); // Reset to the first page when category changes
  };

  // Handle tag selection
  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setSelectedCategory(null); // Reset category when tag is selected
    setCurrentPage(1); // Reset to the first page when tag changes
  };

  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))
            ) : (
              <p>No blogs found for this selection.</p>
            )}
            <Navigation
              currentPage={currentPage}
              totalBlogs={filteredBlogs.length}
              blogsPerPage={blogsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories
                categories={[...new Set(BlogData.map((blog) => blog.category))]}
                onCategorySelect={handleCategorySelect}
                onAllCategoriesSelect={() => { setSelectedCategory(null); setSelectedTag(null); setCurrentPage(1); }}
              />
              <Tags tags={allTags} onTagSelect={handleTagSelect} />
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

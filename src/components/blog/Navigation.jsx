import React from "react";
import ArrowRightImg from "../../assets/images/icon/arrow-right8.svg";

const Navigation = ({ currentPage, totalBlogs, blogsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="aximo-navigation">
      <nav className="navigation pagination" aria-label="Posts">
        <div className="nav-links">
          <button
            className="prev page-numbers"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <img src={ArrowRightImg} alt="Arrow Left" />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`page-numbers ${currentPage === index + 1 ? "current" : ""}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="next page-numbers"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <img src={ArrowRightImg} alt="Arrow Right" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";

function Categories({ categories, onCategorySelect, onAllCategoriesSelect }) {
  return (
    <div className="widget">
      <h3 className="wp-block-heading">Categories:</h3>
      <ul>
      <li>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#000",
              textDecoration: "underline",
              cursor: "pointer",
			  fontWeight:500
            }}
            onClick={onAllCategoriesSelect}
          >
            All Categories
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#000",
                textDecoration: "underline",
                cursor: "pointer",
				fontWeight:500
              }}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
       
      </ul>
    </div>
  );
}

export default Categories;

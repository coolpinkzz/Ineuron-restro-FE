import React from "react";

const Categories = ({ filterItem }) => {
  return (
    <>
      {/*<div className="btn-container">
        {categories.map((category) => {
          return (
            <button className="filter-btn" onClick={() => filterItem(category)}>
              {category}
            </button>
          );
        })}
      </div>*/}
      <div className="btn-container">
        <button className="filter-btn" onClick={() => filterItem("Italian")}>
          Italian
        </button>
        <button className="filter-btn" onClick={() => filterItem("Starters")}>
          Starters
        </button>
        <button className="filter-btn" onClick={() => filterItem("Mexican")}>
          Mexican
        </button>
        <button className="filter-btn" onClick={() => filterItem("Indian")}>
          Indian
        </button>
        <button className="filter-btn" onClick={() => filterItem("Japanese")}>
          Japanese
        </button>
        <button className="filter-btn" onClick={() => filterItem("shakes")}>
          shakes
        </button>
        <button className="filter-btn" onClick={() => filterItem("American")}>
          American
        </button>
        <button className="filter-btn" onClick={() => filterItem("Bihari")}>
          Bihari
        </button>
        <button className="filter-btn" onClick={() => filterItem("Drinks")}>
          Drinks
        </button>
      </div>
    </>
  );
};

export default Categories;

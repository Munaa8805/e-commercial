import React from "react";
import classes from "./categories.module.css";

const DUMMY_CATEGORIES = [
  { name: "electronics" },
  { name: "jewelery" },
  { name: "men's clothing" },
  { name: "women's clothing" }
];
const Categories = () => {
  return (
    <div className={classes.categoryContainer}>
      {DUMMY_CATEGORIES.map((item, index) => (
        <button key={index}>{item.name}</button>
      ))}
    </div>
  );
};

export default Categories;

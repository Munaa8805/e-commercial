import React from "react";
import classes from "./categories.module.css";
import Button from "../../components/UI/Button";
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
        <Button key={index} text={item.name} btnType="blue" type="button" />
      ))}
    </div>
  );
};

export default Categories;

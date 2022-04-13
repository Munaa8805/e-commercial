import React from "react";
import { useHistory } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import Stars from "simple-rating-stars";
import Meta from "../Meta";
import "./product.css";
const Products = props => {
  const history = useHistory();
  let productId = props.product.id;

  const productDetailHandler = productId => {
    // console.log("productId", productId);
    history.push("/product-detail");
  };
  return (
    <div className="cart-container">
      <Meta description={props.category} keywords={props.title} />
      <div className="image-container">
        <img src={props.product.image} alt={props.title} />
      </div>
      <div className="cart-content">
        <div className="cart-title">
          {/* <h3>{props.product.title}</h3> */}
          <h3>
            <LinesEllipsis
              text={props.product.title}
              maxLine="2"
              ellipsis="..."
            />
          </h3>
        </div>
        <div className="cart-body">
          <LinesEllipsis
            text={props.product.description}
            maxLine="3"
            ellipsis="..."
          />
        </div>
        <div className="cart-body">
          <p>
            <span>Price:</span> ${props.product.price}
          </p>
        </div>
        <div className="cart-body component">
          <p className="card-rating">
            <span>Rating: </span>
            <Stars
              stars={props.product.rating.rate.toFixed(0)}
              outOf={5}
              full={"#FFE900"}
              empty={"#E1F1FF"}
              stroke={"#369"}
            />
          </p>
          <p>
            <span>Count:</span> {props.product.rating.count}
          </p>
        </div>

        <div className="cart-body">
          <p>
            <span>Product category:</span> {props.product.category}
          </p>
        </div>
      </div>
      <div className="btn">
        <button onClick={productDetailHandler}>
          <a>View more</a>
        </button>
      </div>
    </div>
  );
};

export default Products;

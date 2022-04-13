import React from "react";
import classes from "./productdetail.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/productDetailActions";
import Stars from "simple-rating-stars";

const ProductDetail = () => {
  return (
    <div className={classes.containerDetail}>
      <h1>Product detail</h1>
      <div className={classes.productDetail}>
        <div>Image</div>
        <div>
          <h3>MEN'S COLLECTION</h3>

          <h1>Fjallraven - Foldsack Title</h1>
          <div className={classes.starRating}>
            <span>Rating : </span>
            <Stars
              // stars={props.product.rating.rate.toFixed(0)}
              stars={3}
              outOf={5}
              full={"#FFE900"}
              empty={"#E1F1FF"}
              stroke={"#369"}
            />
          </div>
          <div className={classes.priceDetail}>
            <p>
              Price: $<span>109.95</span>
            </p>
          </div>
          <div>
            <p>
              In this video, We'll See How to Build an ECommerce App using React
              JS and Redux with Using Fetch API to Get Products Data. We also
              Add Filter Product Functionality to Filter Products and Use
              Skeleton Loading When Calling API. This is the Best React JS
              Project for Beginners.
            </p>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.buttonDiv}>
              <button>Add to Cart</button>
            </div>
            <div className={`${classes.buttonDiv} ${classes.lastButton}`}>
              <button>Go to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //   console.log("=======", Array.isArray(state.productsReducer.products));
  console.log("===console.log====", state.productDetailReducer.productDetail);
  return {
    productDetail: state.productDetailReducer.productDetail,
    loading: state.productDetailReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productDetail: () => dispatch(actions.productDetailItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

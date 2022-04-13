import React from "react";
import classes from "./productdetail.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import * as actions from "../../redux/actions/productDetailActions";
import Stars from "simple-rating-stars";

const ProductDetail = props => {
  console.log("props productdetail", props);
  let content;
  if (props.loading === false) {
    content = (
      <p className={classes.mainP}>
        <LoadingSpinner />
      </p>
    );
  } else if (props.error) {
    content = <p>Ямар нэгэн алдаа гарлаа.</p>;
  } else {
    content = (
      <div className={classes.productDetail}>
        <div className={classes.productDetailImage}>
          <img
            src={props.productDetailItem.image}
            alt={props.productDetailItem.title}
          />
        </div>
        <div>
          <h3>{props.productDetailItem.category}</h3>

          <h1>{props.productDetailItem.title}</h1>
          <div className={classes.starRating}>
            <span>Rating : </span>
            <Stars
              // stars={props.product.rating.rate.toFixed(0)}
              stars={props.productDetailItem.rating.rate.toFixed(0)}
              outOf={5}
              full={"#FFE900"}
              empty={"#E1F1FF"}
              stroke={"#369"}
            />
          </div>
          <div className={classes.priceDetail}>
            <p>
              Price: $<span>{props.productDetailItem.price}</span>
            </p>
          </div>
          <div>
            <p>{props.productDetailItem.description}</p>
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
    );
  }
  return (
    <div className={classes.containerDetail}>
      <div className={classes.butsahBtn}>
        <Link to="/">БУЦАХ</Link>
      </div>
      {content}
    </div>
  );
};

const mapStateToProps = state => {
  //   console.log("=======", Array.isArray(state.productsReducer.products));
  //   console.log(
  //     "===_PRODUCTDETAIL_ITEM====",
  //     state.productDetailReducer.productDetail
  //   );
  return {
    productDetailItem: state.productDetailReducer.productDetail,
    loading: state.productDetailReducer.loading,
    error: state.productDetailReducer.productError
  };
};

export default connect(mapStateToProps, null)(ProductDetail);

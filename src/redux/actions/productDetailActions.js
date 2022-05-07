import axios from "axios";
import { useState } from "react";

export const productDetailItem = productId => {
  // const [productId, setProductId] = useState(null);
  // console.log(productId);
  return function(dispatch) {
    dispatch(productDetailItemStart());

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(result => {
        console.log("product detail result ", result.data);
        // console.log("======", Array.isArray(result.data));
        // object convert to array

        dispatch(productDetailItemSuccess(result.data));
      })
      .catch(err => {
        // console.log("products error", err);
        dispatch(productDetailItemError(err));
      });
  };
};

export const productDetailItemStart = () => {
  return {
    type: "PRODUCT_DETAIL_START"
  };
};

export const productDetailItemSuccess = productDetail => {
  return {
    type: "PRODUCT_DETAIL_SUCCESS",
    productDetail
  };
};

export const productDetailItemError = error => {
  return {
    type: "PRODUCT_DETAIL_ERROR",
    error
  };
};

import axios from "axios";

export const productDetailItem = () => {
  return function(dispatch) {
    dispatch(productDetailItemStart());

    axios
      .get("'https://fakestoreapi.com/products/1")
      .then(result => {
        // console.log("product result ", result.data);
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

export const productDetailItemSuccess = products => {
  return {
    type: "PRODUCT_DETAIL_SUCCESS",
    products
  };
};

export const productDetailItemError = error => {
  return {
    type: "PRODUCT_DETAIL_ERROR",
    error
  };
};

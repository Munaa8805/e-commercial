import axios from "axios";

export const productItems = () => {
  return function (dispatch) {
    dispatch(productItemsStart());

    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        dispatch(productItemsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(productItemsError(err));
      });
  };
};

export const productItemsStart = () => {
  return {
    type: "PRODUCTS_START"
  };
};

export const productItemsSuccess = (products) => {
  return {
    type: "PRODUCTS_SUCCESS",
    products
  };
};

export const productItemsError = (error) => {
  return {
    type: "PRODUCTS_ERROR",
    error
  };
};

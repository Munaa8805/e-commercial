const initialState = {
  products: null,
  productError: null
};
const productsReducer = (state = initialState, action) => {
  //   console.log("===Reducer===", Array.isArray(action.products));
  //   console.log("==========", action.products);

  switch (action.type) {
    case "PRODUCTS_START":
      return {
        ...state,
        products: null
      };
    case "PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.products
      };
    case "PRODUCTS_ERROR":
      return {
        ...state,
        products: null,
        productError: action.error
      };
    default:
      return state;
  }
};
export default productsReducer;

const initialState = {
  products: [],
  productError: null,
  loading: true
};
const productsReducer = (state = initialState, action) => {
  //   console.log("===Reducer===", Array.isArray(action.products));
  //   console.log("==========", action.products);

  switch (action.type) {
    case "PRODUCTS_START":
      return {
        ...state,
        products: null,
        loading: false
      };
    case "PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.products,
        loading: true
      };
    case "PRODUCTS_ERROR":
      return {
        ...state,
        products: null,
        productError: action.error,
        loading: true
      };
    default:
      return state;
  }
};
export default productsReducer;

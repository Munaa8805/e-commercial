const initialState = {
  productDetail: null,
  productError: null,
  loading: true
};
const productDetailReducer = (state = initialState, action) => {
  //   console.log("===Reducer===", Array.isArray(action.products));
  //   console.log("==========", action.products);

  switch (action.type) {
    case "PRODUCT_DETAIL_START":
      return {
        ...state,
        productDetail: null,
        loading: false
      };
    case "PRODUCT_DETAIL_SUCCESS":
      return {
        ...state,
        productDetail: action.products,
        loading: true
      };
    case "PRODUCT_DETAIL_ERROR":
      return {
        ...state,
        productDetail: null,
        productError: action.error,
        loading: true
      };
    default:
      return state;
  }
};
export default productDetailReducer;

import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  SET_PRODUCTS,
} from "../../constant";
const initialState = {
  products: [],
  isLoading: false,
  error: "",
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
        isLoading: false,
        error: "",
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };

    default:
      return state;
  }
};

import { GET_PRODUCTS } from "../../constant";
const initialState = {
  products: [],
  isLoading: false,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

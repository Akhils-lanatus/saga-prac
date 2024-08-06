import { SET_PRODUCTS } from "../../constant";
const initialState = {
  products: [],
  isLoading: false,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
};

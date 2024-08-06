import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../../constant";
const initialState = {
  cartData: [],
  isLoading: false,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.data],
      };
    case REMOVE_FROM_CART:
      const id = action.id;
      const filteredData = state.cartData.filter((item) => item.id !== id);
      return {
        ...state,
        cartData: filteredData,
      };
    case EMPTY_CART:
      return {
        ...state,
        cartData: [],
      };
    default:
      return state;
  }
};

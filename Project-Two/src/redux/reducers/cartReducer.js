import { MERGED_SAGA_CALL } from "../../constant";
const initialState = {
  cartData: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case MERGED_SAGA_CALL:
      console.log(action.data);
      return state;
    default:
      return state;
  }
};

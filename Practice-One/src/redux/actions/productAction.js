import { GET_PRODUCTS, SEARCH_PRODUCTS } from "../../constant";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const searchProducts = (query) => {
  return {
    type: SEARCH_PRODUCTS,
    query,
  };
};

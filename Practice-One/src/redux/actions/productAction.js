import { GET_PRODUCTS } from "../../constant";

export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  const products = await response.json();
  console.log(products);

  return {
    type: GET_PRODUCTS,
    products,
  };
};

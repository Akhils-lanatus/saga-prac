import { GET_PRODUCTS } from "../../constant";

export const getProducts = async () => {
  const response = await fetch("https://akhil1911.github.io/api/products.json");
  const products = await response.json();
  console.log(products);

  return {
    type: GET_PRODUCTS,
    products,
  };
};

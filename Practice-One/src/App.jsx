import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from "./redux/actions/cartAction";
import { getProducts } from "./redux/actions/productAction";

const App = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const productsData = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1>Items in cart : {cartData?.length > 0 ? cartData.length : 0}</h1>
      {productsData?.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          {cartData?.some((val) => val.id === item.id) ? (
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove From cart
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(item))}>
              Add 2 cart
            </button>
          )}
        </div>
      ))}
      <button
        style={{ padding: 10, margin: 20, fontSize: "larger" }}
        onClick={() => dispatch(emptyCart())}
      >
        Empty cart
      </button>

      {/* <button onClick={() => dispatch(getProducts())}>API CALL</button> */}
    </div>
  );
};

export default App;

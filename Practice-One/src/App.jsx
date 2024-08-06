import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from "./redux/actions/cartAction";
import { getProducts } from "./redux/actions/productAction";
const data = [
  {
    id: 1,
    name: "Iphone",
  },
  {
    id: 2,
    name: "samSung",
  },
  {
    id: 3,
    name: "motoG",
  },
  {
    id: 4,
    name: "redMi",
  },
  {
    id: 5,
    name: "realMe",
  },
];
const App = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  console.log(cartData);

  return (
    <div>
      <h3>Items in cart : {cartData?.length > 0 ? cartData.length : 0}</h3>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
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

      <button onClick={() => dispatch(getProducts())}>API CALL</button>
    </div>
  );
};

export default App;

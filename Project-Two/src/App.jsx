import { useDispatch } from "react-redux";
import { cartAction, productAction } from "./redux/actions/index";
const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(cartAction.tempCartCall())}>Cart</button>
      <button onClick={() => dispatch(productAction.tempProductCall())}>
        Product
      </button>
    </div>
  );
};

export default App;

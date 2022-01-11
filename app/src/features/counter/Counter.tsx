import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "./counterSlice";

export default function () {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <>
      <br />
      <button
        className="btn btn-success"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        ➕10
      </button>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>
        ➕
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
        ➖
      </button>
      <h2>{count}</h2>
    </>
  );
}

import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterButtons() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      <p>Compteur : {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

import { createContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}



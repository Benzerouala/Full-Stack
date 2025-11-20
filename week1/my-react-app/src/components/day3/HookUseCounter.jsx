import React, { useEffect, useState } from "react";

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initial);
  return { count, increment, decrement, reset };
}

function useFetch(url){
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setdata(json);
        setloading(false);
      });
  }, [url]);

  return { data, loading };
}

export const HookUseCounter = () => {
  const { count, increment, decrement, reset } = useCounter(5);
  const apiurl = "https://fakestoreapi.com/products";
  const { data, loading } = useFetch(apiurl);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      {loading ? (
        <p>chargement...</p>
      ) : ( 
        <ul>
          {data.map((pr) => (
            <li key={pr.id}>{pr.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

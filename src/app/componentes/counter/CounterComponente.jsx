"use client";
import { useState } from "react";
import styles from "./CounterPresentacional.module.css";

export const CounterComponente = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterPresentational
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

const CounterPresentational = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counterContainer}>
      <h1>App Contador</h1>
      <h2>Contador: {count}</h2>
      <button
        className={styles.btn}
        onClick={onIncrement}
      >
        Incrementar
      </button>
      <button
        className={styles.btn}
        onClick={onDecrement}
      >
        Decrementar
      </button>
    </div>
  );
};

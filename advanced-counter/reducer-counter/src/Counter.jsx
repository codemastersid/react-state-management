import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";
import CounterReducer from "./CounterReducer";

function Counter({ initialVal = 0 }) {
  const [count, dispatch] = React.useReducer(CounterReducer, initialVal);

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "increment" })}>
          <ChevronUp />
        </button>
        <button onClick={() => dispatch({ type: "big-increment" })}>
          <ChevronsUp />
        </button>
        <button onClick={() => dispatch({ type: "reset", initialVal })}>
          <RotateCcw />
        </button>
        <button
          onClick={() => {
            const nextCount = Math.ceil(Math.random() * 100);
            dispatch({ type: "randomize", value: nextCount });
          }}
        >
          <Hash />
        </button>
        <button onClick={() => dispatch({ type: "big-decrement" })}>
          <ChevronsDown />
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
}

export default Counter;

import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const countervalue=useSelector(store=>store.counterReducer.counter)
 
  return <div data-testid="counterValue">
 {countervalue ? countervalue : "wait"}
  </div>;
};

export default CounterValue;

import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispach=useDispatch()
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={()=>dispach(handleAdd(1))}>ADD</button>
      <button data-testid="reduceButton" onClick={()=>dispach(handleReduce(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subtract, sum } from "../store/Calculator/Calculator.actions";

const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="number"
        placeholder="A"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="B"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <button onClick={() => dispatch(sum(a, b))}>Somar</button>
      <button onClick={() => dispatch(subtract(a, b))}>Subtrair</button>

      <div>Resultado: {result}</div>
    </div>
  );
};

export default Calculator;

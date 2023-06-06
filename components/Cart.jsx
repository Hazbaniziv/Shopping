import React from "react";
import "../App.css";

export default function Cart(props) {
  const totalSum = () => {
    let sum = 0;
    props.productList.forEach((val) => {
      sum += val.price;
    });
    return sum;
  };
  return (
    <div id="cart">
      <h1>Cart:</h1>
      <p id="prod">
        {props.productList.map((val) => {
          return (
            <p>
              {val.name} {val.price}
            </p>
          );
        })}
      </p>
      <h2>Total: {totalSum()}</h2>
      <button
        onClick={() => {
          props.buy();
        }}
      >
        Buy
      </button>
    </div>
  );
}

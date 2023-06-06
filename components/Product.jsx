import React from "react";
import "../App.css";

export default function Product(props) {
  return (
    <div id="product">
      <h2>
        {props.name} - {props.price}ILS{" "}
      </h2>
      <img src={props.pic}></img>
      <br />
      <button
        onClick={() => {
          props.add(props.i);
        }}
      >
        +
      </button>
      <br />
      <br />
    </div>
  );
}

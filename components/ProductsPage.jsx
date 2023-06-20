import React from "react";
import Product from "./Product";
import "../App.css";

export default function ProductsPage(props) {
  return (
    <div id="product">
      {props.arr.map((val, i) => {
        return (
          <Product
            name={val.name}
            price={val.price}
            add={props.add}
            i={i}
            pic={val.pic}
          />
        );
      })}
    </div>
  );
}
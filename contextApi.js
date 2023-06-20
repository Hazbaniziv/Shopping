import React, { useContext, useState } from "react";
import Paper from "./img/Paper.jpg";
import Pencil from "./img/Pencil.png";
import Eraser from "./img/Eraser.jpg";
import Marker from "./img/Marker.jpg";
import Glue from "./img/Glue.png";

export const Context = React.createContext();
export const Provider = ({ children }) => {
  const [product, setProduct] = useState([
    { id:0, name: "Paper", price: 10, pic: Paper },
    { id:1, name: "Pencil", price: 10, pic: Pencil },
    { id:2, name: "Eraser", price: 2, pic: Eraser },
    { id:3, name: "Marker", price: 6, pic: Marker },
    { id:4, name: "Glue", price: 2, pic: Glue },
  ]);
  const value = {
    product,
    setProduct
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useProductContext = () => {
  return useContext(Context);
};

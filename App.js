import ProductsPage from "./components/ProductsPage";
import { useState } from "react";
import Cart from "./components/Cart";
import "./App.css";
import Paper from "./img/Paper.jpg";
import Pencil from "./img/Pencil.png";
import Eraser from "./img/Eraser.jpg";
import Marker from "./img/Marker.jpg";
import Glue from "./img/Glue.png";

function App() {
  const [myCart, setMyCart] = useState([]);
  const [cartDisplay, setCartDisplay] = useState("none");
  const [productDisplay, setProductDisplay] = useState("");

  let product = [
    { name: "Paper", price: 10, pic: Paper },
    { name: "Pencil", price: 10, pic: Pencil },
    { name: "Eraser", price: 2, pic: Eraser },
    { name: "Marker", price: 6, pic: Marker },
    { name: "Glue", price: 2, pic: Glue },
  ];
  ///add Flag for change cart/home!
  const addCart = (i) => {
    setMyCart([...myCart, product[i]]);
  };
  const buyFunc = () => {
    setMyCart([]);
  };

  const cart = () => {
    setProductDisplay("none");
    setCartDisplay("block");
  };
  const showHome = () => {
    setProductDisplay("block");
    setCartDisplay("none");
  };
  return (
    <div className="App">
      <div id="head">
        <button
          id="home"
          onClick={() => {
            showHome();
          }}
        >
          🏡
        </button>
        <h1 id="title">SV-SHOP</h1>
        <button
          id="cart"
          onClick={() => {
            cart();
          }}
        >
          🛒
        </button>
      </div>
      <div id="productList" style={{ display: productDisplay }}>
        <ProductsPage arr={product} add={addCart} />
      </div>
      <div id="cartList" style={{ display: cartDisplay }}>
        <Cart productList={myCart} buy={buyFunc} />
      </div>
    </div>
  );
}
export default App;

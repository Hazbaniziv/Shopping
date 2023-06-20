import React from 'react';
export default function Header(props) {

  return (
    <div id="head">
      <button id='home' onClick={props.showHome}>🏡</button> {/*left */}
      <p id='title' >SV-SHOP</p>
      <button id='cart' onClick={props.showCart}>🛒</button>  {/*right */}
    </div>
  )
}
import React from 'react';
import './Cart.css';

const Cart = props => {
  const cart = props.cart;
  const productPrice = cart.reduce(
    (productPrice, product) => productPrice + product.price,
    0
  );
  const tax = productPrice / 10;
  const total = productPrice + tax;

  const formatNumber = num => {
    const number = num.toFixed(2);
    return Number(number);
  };
  return (
    <div>
      <h3>cart area text</h3>
      <h4>Order Summery: {cart.length}</h4>

      <p>Product Price: {formatNumber(productPrice)}</p>
      <p>Vat: {formatNumber(tax)}</p>
      <p>Total: {formatNumber(total)}</p>
    </div>
  );
};

export default Cart;

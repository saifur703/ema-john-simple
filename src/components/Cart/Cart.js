import React from 'react';
import './Cart.css';

const Cart = props => {
  const cart = props.cart;
  const total = cart.reduce((total, product) => total + product.price, 0);
  return (
    <div>
      <h3>cart area text</h3>
      <h4>Order Summery: {cart.length}</h4>

      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import './Review.css';
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder
} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrderHandler = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };
  const removeProduct = productKey => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
    //console.log('clicked Removed Product', productKey);
  };

  useEffect(() => {
    // Cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyImg} alt='' />;
  }
  return (
    <div className='review-area'>
      <div className='left-review'>
        <h2>Cart Items: {cart.length}</h2>
        <hr />
        {cart.map(pd => (
          <ReviewItem
            product={pd}
            key={pd.key}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
        {thankYou}
        {!cart.length && (
          <h2>
            Cart is empty.{' '}
            <a href='/shop' style={{ color: 'red' }}>
              keep shopping
            </a>
          </h2>
        )}
      </div>
      <div className='right-cart'>
        <Cart cart={cart}>
          <button onClick={placeOrderHandler}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;

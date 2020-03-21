import React, { useEffect, useState } from 'react';
import './Review.css';
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
  const [cart, setCart] = useState([]);

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
      </div>
      <div className='right-cart'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;

import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = props => {
  console.log(props);
  const { name, img, url, seller, price, stock } = props.product;
  return (
    <div className='single-product'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-desc'>
        <h3>
          <a href={url}>{name}</a>
        </h3>
        <p>
          <small>by {seller}</small>
        </p>
        <h4>$ {price}</h4>
        <p>
          <small>Only {stock} left in stock - order soon!</small>
        </p>
        <button onClick={() => props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

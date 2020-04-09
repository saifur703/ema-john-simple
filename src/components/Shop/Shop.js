import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {
  addToDatabaseCart,
  getDatabaseCart,
} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  // const data10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4200/products')
      .then((res) => res.json())
      .then((data) => {
        // console.log('Data from database', data);
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    if (products.length) {
      const cartProduct = productKeys.map((key) => {
        const product = products.find((pd) => pd.key === key);
        product.quantity = savedCart[key];

        return product;
      });
      setCart(cartProduct);
    }
  }, [products]);

  const handleAddProduct = (product) => {
    // console.log('Handle Add Product Clicked.', product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;

      const others = cart.filter((pd) => pd.key !== toBeAddedKey);

      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  return (
    <div className='shop-area'>
      <div className='product-area'>
        {products.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            showAddtoCartBtn={true}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>

      <div className='cart-area'>
        <Cart cart={cart}>
          <Link to='/review'>
            <button className='reviewBtn'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

/* 
Backup 



import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {
  addToDatabaseCart,
  getDatabaseCart
} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  const data10 = fakeData.slice(0, 10);
  const [products] = useState(data10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProduct = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];

      return product;
    });
    setCart(cartProduct);
  }, []);

  const handleAddProduct = product => {
    // console.log('Handle Add Product Clicked.', product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;

      const others = cart.filter(pd => pd.key !== toBeAddedKey);

      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  return (
    <div className='shop-area'>
      <div className='product-area'>
        {products.map(pd => (
          <Product
            key={pd.key}
            product={pd}
            showAddtoCartBtn={true}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>

      <div className='cart-area'>
        <Cart cart={cart}>
          <Link to='/review'>
            <button className='reviewBtn'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;


*/

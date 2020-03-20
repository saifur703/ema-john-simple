import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
  const data10 = fakeData.slice(0, 10);
  const [products] = useState(data10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = product => {
    // console.log('Handle Add Product Clicked.', product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;

      const others = cart.filter(pd => pd.key != toBeAddedKey);

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

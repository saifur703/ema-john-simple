import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const data10 = fakeData.slice(0, 10);
  const [products] = useState(data10);
  const [cart, setCart] = useState([]);
  console.log(fakeData);

  const handleAddProduct = product => {
    console.log('Handle Add Product Clicked.', product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className='shop-area'>
      <div className='product-area'>
        {products.map(pd => (
          <Product
            key={pd.key}
            product={pd}
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

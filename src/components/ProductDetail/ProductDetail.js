import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
  const { productkey } = useParams();
  const product = fakeData.find(pd => pd.key === productkey);
  console.log(product);
  return (
    <div>
      <h2>{productkey}</h2>
      <Product product={product} showAddtoCartBtn={false}></Product>
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { useEffect } from 'react';
import { useState } from 'react';

const ProductDetail = () => {
  const { key } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4200/product/' + key)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }, [key]);
  // const product = fakeData.find(pd => pd.key === productkey);
  console.log(product);
  return (
    <div>
      <h2>{key}</h2>
      {product && (
        <Product product={product} showAddtoCartBtn={false}></Product>
      )}
    </div>
  );
};

export default ProductDetail;

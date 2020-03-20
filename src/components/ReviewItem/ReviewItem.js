import React from 'react';

const ReviewItem = props => {
  const { name, quantity, key } = props.product;
  return (
    <div
      className='reviewItem'
      style={{
        borderBottom: '1px solid lightgray',
        padding: '10px 15px'
      }}
    >
      <h2>Quantity: {quantity}</h2>
      <h1>{name}</h1>
      <button onClick={() => props.removeProduct(key)}>Remove Item</button>
    </div>
  );
};

export default ReviewItem;

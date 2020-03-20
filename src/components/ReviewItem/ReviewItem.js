import React from 'react';

const ReviewItem = props => {
  const { name, quantity } = props.product;
  return (
    <div
      className='reviewItem'
      style={{
        borderBottom: '1px solid lightgray',
        padding: '10px 15px',
        margin: '0 200px'
      }}
    >
      <h2>Quantity: {quantity}</h2>
      <h1>{name}</h1>
      <button>Remove Item</button>
    </div>
  );
};

export default ReviewItem;

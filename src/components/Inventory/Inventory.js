import React from 'react';
// import fakeData from '../../fakeData';

const Inventory = () => {
  //console.log(fakeData.length);
  const handleAddInventory = () => {
    /* const product = fakeData[0];
    console.log('Before Post', product);

    fetch('http://localhost:4200/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(fakeData),
    })
      .then((res) => res.json())
      .then((data) => console.log('Post Successful', data))
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      }); */
  };
  return (
    <div className='text-center'>
      <h2>Add inventory to sell more...</h2>
      <button onClick={handleAddInventory}>Add Inventory</button>
    </div>
  );
};

export default Inventory;

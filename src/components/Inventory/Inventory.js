import React from 'react';
import './Inventory.css';
import { useForm } from 'react-hook-form';

const Inventory = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <h2>Shipment</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='name'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Name'
        />
        {errors.name && <span>Name is required</span>}

        <input
          name='email'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Email'
        />
        {errors.email && <span>Email is required</span>}

        <input
          name='name'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Address 1'
        />
        {errors.addressLine1 && <span>Address Line 1 is required</span>}

        <input name='name' defaultValue='test' ref={register} />
        {errors.addressLine2 && <span>Address Line 2 is required</span>}

        <input
          name='city'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Address 2'
        />
        {errors.city && <span>City is required</span>}

        <input
          name='country'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Country'
        />
        {errors.country && <span>Country is required</span>}

        <input
          name='zipcode'
          defaultValue='test'
          ref={register({ required: true })}
          placeholder='Your Zip code'
        />
        {errors.zipcode && <span>Zip code is required</span>}

        <input type='submit' />
      </form>
    </div>
  );
};

export default Inventory;

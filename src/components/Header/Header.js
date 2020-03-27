import React from 'react';
// import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import useAuth from '../Login/useAuth';

const Header = () => {
  // const user = useContext(userContext);
  const auth = useAuth();
  console.log(auth.user);
  // if (auth.user === null) {
  //   console.log(auth.user);
  // } else {
  //   console.log(auth.user);
  // }
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <nav className='mainmenu'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/shop'>Shop</a>
          </li>
          <li>
            <a href='/review'>Order Review</a>
          </li>
          <li>
            <a href='/inventory'>Manage Inventory</a>
          </li>
          {auth.user ? (
            <span style={{ color: 'yellow' }}>{auth.user.name}</span>
          ) : (
            <li>
              <a href='/login'>Login</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

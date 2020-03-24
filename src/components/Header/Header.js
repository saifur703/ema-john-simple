import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { userContext } from '../../App';

const Header = () => {
  const user = useContext(userContext);
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
          <li>
            <a href='/login'>Login</a>
          </li>
          <span style={{ color: 'red' }}>{user}</span>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

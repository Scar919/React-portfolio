import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../Navigation';

function Header () {
  return (
    <header className='flex-row px-8'>
      <div className='logo'>
        <h1>
            <Link to='/'>Scar</Link>
            </h1>
      </div>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;

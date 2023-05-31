import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../Navigation';

function Header () {
  return (
    <header className='flex-row px-8'>
     
            <h1>
            <Link to='/'>Home</Link>
            </h1>
     
      <Navigation></Navigation>
    </header>
  );
}

export default Header;

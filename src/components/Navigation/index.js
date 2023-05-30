import React from 'react';
import { Link } from 'react-router-dom';

function Navigation () {
  return (
    <nav className='Navigation'>
        <ul className='flex-row'>
          <li className='mx-2'>
            <Link to='/about'>About me</Link>
          </li>
          <li className='mx-2'>
            <Link to='/project'>Project</Link>
          </li>
          <li className='mx-2'>
          <Link to='/contact'>Contact</Link>
          </li>
          </ul>
    </nav>
  );
}

export default Navigation;
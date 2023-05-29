import React from 'react';
//import {link} from "react-dom"

function Navigation () {
  return (
    <nav className='Navigation'>
        <ul className='flex-row'>
          <li className='mx-2'>
            <link to='/about'>About me</link>
          </li>
          <li className='mx-2'>
          <link to='/project'>Project</link>
          </li>
          <li className='mx-2'>
          <link to='/contact'>Contact</link>
          </li>
          </ul>
    </nav>
  );
}

export default Navigation;
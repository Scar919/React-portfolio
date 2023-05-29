import React from 'react';
import Navigation from './Navigation';

function Header () {
  return (
    <header>
      <div>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
      </div>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;

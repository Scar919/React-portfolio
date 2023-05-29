import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      
      {/* Add the sections of your portfolio */}
      <section>
        {/* Add your portfolio content */}
        <Project />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;

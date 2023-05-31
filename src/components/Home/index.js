import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../../assets/IMG.png'



function Home() {
    return(
        <section className='home my-6'>
          
                <h2> Hello, I'm Scar!</h2>
                <p>Thank you for visiting my Portfolio! Feel free to have a look at my work.</p>
                <Link to='Project'>
                    <button> View projects</button>
                </Link>
               
                <div className="portrait" style={{ textAlign: 'left' }}>
        <img src={Portrait} alt="portrait" />
        </div>
        </section>
    );
}

export default Home;
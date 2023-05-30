import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../../assets/IMG.png'


function Home() {
    return(
        <section className='home my-6'>
            <div className='tite'>
                <h2> Hi , I'm Scar!</h2>
                <p>Thank you for visiting my Portfolio! Feel free to have a look around my work.</p>
                <Link to='portfolio'>
                    <button> View projects</button>
                </Link>
                </div>
                <div className="portrait" style={{ textAlign: 'left' }}>
        <img src={Portrait} alt="self portrait" />
        </div>
        </section>
    );
}

export default Home;
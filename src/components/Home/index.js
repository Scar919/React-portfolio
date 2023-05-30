import React from 'react';
import { Link } from 'react-router-dom';
//import portrait 


function Home() {
    return(
        <section className='home my-6'>
            <div className='tite'>
                <h2> hi , I'm Scar!</h2>
                <p>welcome to my portfolio</p>
                <Link to='portfolio'>
                    <button> View projects</button>
                </Link>

                </div>
        </section>
    );
}

export default Home;
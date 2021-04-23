import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <h1>Welcome</h1>
            <Link to='/signUp'>
                <button className='WelcomeButton'>Sign Up</button>
            </Link>
        </div>
    )
};

export default Welcome
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <h1>A</h1>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/topics'><li>Topics</li></Link>
                    <Link to='/forum'><li>Forum</li></Link>
                    <Link to='/signUp'><li>Sign Up</li></Link>
                </ul>
            </div>
        )
    }
}

export default NavBar;
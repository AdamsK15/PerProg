import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_white from '../img/logo_white.png';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <img src={logo_white} alt={'logo'} />
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/topics'><li>Topics</li></Link>
                    <Link to='/forum'><li>Forum</li></Link>
                    <Link to='/signUp'><li>Sign Up</li></Link>
                    <Link to='/mailer'><li>Mailer</li></Link>
                </ul>
            </div>
        )
    }
}

export default NavBar;
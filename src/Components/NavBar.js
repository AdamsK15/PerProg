import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/reducers/userReducer';
import axios from 'axios';
import logo_white from '../img/logo_white.png';

function NavBar(props) {

    const handleLogout = () => {
        axios
            .get('/auth/logout')
            .then(() => {
                props.logoutUser();
                props.history.push('/');
            })
    }


    return (
        <div className='NavBar'>
            <img src={logo_white} alt={'logo'} />
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/topics'><li>Topics</li></Link>
                <Link to='/forum'><li>Forum</li></Link>
                <Link to='/signUp'><li>Sign Up</li></Link>
                <Link to='/mailer'><li>Mailer</li></Link>
                <button onClick={handleLogout}>Logout</button>
            </ul>
        </div>
    )

}
const mapStateToProps = reduxState => {
    return reduxState.userReducer;
}

export default withRouter(connect(mapStateToProps, { logoutUser })(NavBar));
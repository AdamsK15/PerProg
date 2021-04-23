import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../redux/reducers/userReducer';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            mode: 'register',
            username: '',
            email: '',
            user_password: '',
            isAdmin: false
        };
    }

    handleMode = e => {
        this.setState({ mode: e.target.name })
    }

    handleUsernameInput(value) {
        this.setState({ username: value });
    }

    handleEmailInput(value) {
        this.setState({ email: value });
    }

    handlePasswordInput(value) {
        this.setState({ user_password: value });
    }

    handleSubmit = () => {
        const { mode, username, email, user_password } = this.state;

        const path = mode === 'register' ? 'register' : 'login';

        axios
            .post(`/auth/${path}`, { username, email, user_password })
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/posts');
            })
            .catch(err => {
                console.log(err);
                window.alert(err.response.data)
            });
    }

    toggleAdmin() {
        const { isAdmin } = this.state;
        this.setState({ isAdmin: !isAdmin });
    }

    login() {

    }

    register() {
        const { username, email, user_password, isAdmin } = this.state;
        axios
            .post('/auth/register', { username, email, user_password, isAdmin })
            .then(user => {
                this.setState({ username: '', email: '', user_password: '' });
                this.props.updateUser(user.data);
            })
            .catch(err => {
                this.setState({ username: '', email: '', user_password: '' });
                alert(err.response.request.response)
            })
    }

    logout() {

    }


    render() {
        const { mode } = this.state;

        // if (this.props.userReducer.user) {
        //     return <Redirect to='/posts' />
        // }

        return (
            <div className='SignUp'>
                <div className='regSign'>
                    <button name='register' onClick={this.handleMode} disabled={mode === 'register'}>Register</button>
                    <button name='sign in' onClick={this.handleMode} disabled={mode === 'sign in'}>Sign In</button>
                </div>
                <form>
                    <input className='SignName' placeholder='name' onChange={this.handleUsernameInput}></input><br />
                    <input className='SignEmail' placeholder='email' onChange={this.handleEmailInput}></input><br />
                    <input className='SignPassword' placeholder='password' onChange={this.handlePasswordInput}></input><br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }


}

export default SignUp
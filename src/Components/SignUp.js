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
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleMode = e => {
        this.setState({ mode: e.target.name })
    }

    handleInput = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    // handleUsernameInput(value) {
    //     this.setState({ username: value });
    // }

    // handleEmailInput(value) {
    //     this.setState({ email: value });
    // }

    // handlePasswordInput(value) {
    //     this.setState({ user_password: value });
    // }

    handleSubmit = () => {
        const { mode, username, email, user_password } = this.state;

        const path = mode === 'register' ? 'register' : 'login';

        axios
            .post(`/auth/${path}`, { username, email, user_password })
            .then(res => {
                this.props.updateUser(res.data);
                // this.props.history.push('/posts');
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
        const { username, email, user_password } = this.state;
        axios.post('/auth/login', { username, email, user_password })
            .then(user => {
                this.props.updateUser(user.data)
                this.setState({ username: '', email: '', user_password: '' })
            }).catch(err =>
                alert(err.response.request.response))
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
        axios.get('/auth/logout')
            .then(() => {
                this.props.updateUser({})
            })
            .catch((err) => console.log(err))
    }


    render() {
        const { mode } = this.state;

        // if (this.props.userReducer.user) {
        //     return <Redirect to='/topics' />
        // }

        return (
            <div className='SignUp'>
                <div className='regSign'>
                    <button name='register' onClick={this.handleMode} disabled={mode === 'register'}>Register</button>
                    <button name='sign in' onClick={this.handleMode} disabled={mode === 'sign in'}>Sign In</button>
                </div>
                <form>
                    <input className='SignName' placeholder='name' onChange={this.handleInput}></input><br />
                    <input className='SignEmail' placeholder='email' onChange={this.handleInput}></input><br />
                    <input className='SignPassword' placeholder='password' onChange={this.handleInput} type='password'></input><br />
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }


}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default connect(mapStateToProps, { updateUser })(SignUp)
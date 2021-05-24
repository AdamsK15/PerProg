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
        // this.register = this.register.bind(this);
        // this.login = this.login.bind(this);
        // this.logout = this.logout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleMode = e => {
        this.setState({ mode: e.target.name })
    }

    handleInput = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
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

        const lane = mode === 'register' ? 'register' : 'login';

        axios
            .post(`/auth/${lane}`, { username, email, user_password })
            .then(res => {
                this.setState({ username, email, user_password })
                this.props.updateUser(res.data);
                // this.props.history.push('/posts');
            })
            .catch(err => {
                console.log(err);
                this.setState({ username, email, user_password })
                window.alert(err.response.data)
            });
    }

    toggleAdmin() {
        const { isAdmin } = this.state;
        this.setState({ isAdmin: !isAdmin });
    }

    // login() {
    //     const { username, email, user_password } = this.state;
    //     axios.post('/auth/login', { username, email, user_password })
    //         .then(user => {
    //             this.props.getUser(user.data)
    //             this.setState({ username: '', email: '', user_password: '' })
    //         }).catch(err =>
    //             alert(err.response.request.response))
    // }

    // register() {
    //     const { username, email, user_password, isAdmin } = this.state;
    //     axios
    //         .post('/auth/register', { username, email, user_password, isAdmin })
    //         .then(user => {
    //             this.setState({ username: '', email: '', user_password: '' });
    //             this.props.getUser(user.data);
    //         })
    //         .catch(err => {
    //             this.setState({ username: '', email: '', user_password: '' });
    //             alert(err.response.request.response)
    //         })
    // }

    // logout() {
    //     axios.get('/auth/logout')
    //         .then(() => {
    //             this.props.getUser({})
    //         })
    //         .catch((err) => console.log(err))
    // }


    render() {
        const { mode, username, email, user_password } = this.state;

        // if (this.props.userReducer.user) {
        //     return <Redirect to='/topics' />
        // }

        return (
            <div className='SignUp'>
                <div className='regSign'>
                    <button name='register' onClick={this.handleMode} disabled={mode === 'register'}>Register</button>
                    <button name='sign in' onClick={this.handleMode} disabled={mode === 'sign in'}>Sign In</button>
                </div>
                <h1>{mode.toUpperCase()}</h1>
                <form>
                    <input className='SignName' placeholder='name' /*value={username}*/ onChange={e => this.handleUsernameInput(e.target.value)}></input><br />
                    <input className='SignEmail' placeholder='email' /*value={email}*/ onChange={e => this.handleEmailInput(e.target.value)}></input><br />
                    <input className='SignPassword' placeholder='password' /*value={user_password}*/ onChange={e => this.handlePasswordInput(e.target.value)} type='password'></input><br />
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
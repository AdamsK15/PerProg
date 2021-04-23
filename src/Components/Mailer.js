import React, { Component } from 'react';
import axios from 'axios';

class Mailer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            title: '',
            message: '',
            image: ''
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    handleSend = () => {
        const { name, email, message, title, image } = this.state
        axios.post('/api/email', { name, email, message, title, image }).then(res => {
            this.setState({
                name: '',
                email: '',
                title: '',
                message: '',
                image: ''
            })
        })
    }

    render() {
        const { name, email, message, title, image } = this.state
        return (
            <div>
                <div>
                    <h1>Email Kevin</h1>
                    <input placeholder='title' type="text" name='title' value={title} onChange={this.handleInput} />
                    <input placeholder='name' type="text" name='name' value={name} onChange={this.handleInput} />
                    <input placeholder='email' type="text" name='email' value={email} onChange={this.handleInput} />
                    <input placeholder='message' type="text" name='message' value={message} onChange={this.handleInput} />
                    <input placeholder='image' type="text" name='image' value={image} onChange={this.handleInput} />
                    <button onClick={this.handleSend}>Send</button>
                </div>
            </div>
        )
    }
}

export default Mailer;

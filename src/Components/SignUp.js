import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='SignUp'>
                <form>
                    <input className='SignName' placeholder='name'></input><br />
                    <input className='SignEmail' placeholder='email'></input><br />
                    <input className='SignPassword' placeholder='password'></input>
                </form>
            </div>
        )
    }


}

export default SignUp
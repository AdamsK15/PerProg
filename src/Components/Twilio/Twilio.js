import React, { useState } from 'react';
import axios from 'axios';

function Twilio() {
    let [name, setName] = useState('')
    let [message, setMessage] = useState('')
    let [number, setNumber] = useState('')

    async function send() {
        let res = axios.post('/api/sendSMS', { name, message, number })
        await alert(`Thank you for inviting ${name} to visit our site!`)
        setName('')
        setMessage('')
        setNumber('')
    }

    return (
        <div style={styles.body}>
            <div style={styles.form}>
                <h1>Invite a friend in need to Helping Hand</h1>
                <input
                    style={styles.nameInput}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Name'
                />
                <textarea
                    style={styles.message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message...'
                ></textarea>
                <input
                    style={styles.numInput}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Number'
                ></input>
                <button
                    style={styles.button}
                    onClick={() => send()}>Send</button>
            </div>
        </div>
    );
}
export default Twilio;

const styles = {
    body: {
        background: 'blue',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 500,
        background: 'lightgrey',
        width: 450,
        boxShadow: '2px 1px 3px 1px black'
    },
    nameInput: {
        height: 40,
        fontSize: 35,
        width: 350,
        border: '1px solid black',
        outline: 'none'
    },
    numInput: {
        height: 40,
        fontSize: 35,
        width: 350,
        border: '1px solid black',
        outline: 'none'
    },
    message: {
        minWidth: 350,
        maxWidth: 350,
        minHeight: 300,
        maxHeight: 300,
        border: '1px solid black',
        fontSize: 35,
        outline: 'none'
    },
    button: {
        height: 45,
        width: 200,
        background: 'black',
        borderRadius: 10,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        outline: 'none'
    }
}

// const styles = {
//     body: {
//         color: 'white',
//         height: 200,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '2rem',
//         width: 300
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         background: '#00000090',
//         width: 500,
//         alignItems: 'center',
//         height: 200,

//         borderRadius: 10
//     },
//     nameInput: {
//         width: 450,
//         height: 40,
//         fontSize: 35,
//         outline: 'none',
//         borderRadius: '2rem'
//     },
//     numInput: {
//         width: 450,
//         height: 40,
//         fontSize: 35,
//         outline: 'none',
//         borderRadius: '2rem'
//     },
//     message: {
//         minWidth: 150,
//         maxWidth: 350,
//         minHeight: 100,
//         maxHeight: 100,
//         border: '1px solid black',
//         fontSize: 35,
//         outline: 'none'
//     },
//     button: {
//         width: 200,
//         height: 45,
//         borderRadius: 10,
//         background: 'teal',
//         fontSize: 35,
//         fontWeight: 'bold',
//         letterSpacing: '0.07em'
//     }
// }
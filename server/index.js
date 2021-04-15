require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
// const bcrypt = require('bcryptjs');
// const signUp = require('./controllers/signUp-controller');
const signUpCtrl = require('./controllers/signUp-controller');
const authenticateUser = require('./middleware/authenticateUser');


app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/signup', signUpCtrl.register);
app.post('/auth/login', signUpCtrl.login);
app.post('auth/logout', signUpCtrl.logout);
app.get('/auth/user', signUpCtrl.getUser)

app.get('/api/secret', authenticateUser, (req, res) => {
    res.status(200).send("Here's the secret!")
})


// app.get()
// app.put()
// app.delete()

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance);

        app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
    })
    .catch(err => console.log(err));
require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
// const bcrypt = require('bcryptjs');
const signUpCtrl = require('./controllers/signUp-controller');
const { checkUser } = require('./middleware/authenticateUser')
// const authenticateUser = require('./middleware/authenticateUser');
const topicsCtrl = require('./controllers/topicsController');
const mailCtrl = require('./controllers/mailController');
const smsCtrl = require('./controllers/smsController');


app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance);

        app.listen(SERVER_PORT, () => console.log(`Server & db running on ${SERVER_PORT}`));
    })
    .catch(err => {
        console.log(err)
    });

app.post('/auth/register', signUpCtrl.register);
app.post('/auth/login', signUpCtrl.login);
app.delete('auth/logout', signUpCtrl.logout);
app.get('/auth/session', checkUser, signUpCtrl.getSession)

app.get('/topics/get', topicsCtrl.getTopics);
app.post('/topics/add', topicsCtrl.addTopic);

// app.get('/auth/secret', authenticateUser, (req, res) => {
//     res.status(200).send("U R Admin")
// })

app.post('/api/email', mailCtrl.email);
// app.get()
// app.put()
// app.delete()

app.post('/api/sendSMS', smsCtrl.sendSMS);

// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// })
//     .then(dbInstance => {
//         app.set('db', dbInstance);

//         app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
//     })
//     .catch(err => console.log(err));
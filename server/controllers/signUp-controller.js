const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, email, user_password } = req.body;
        try {
            // const result = await db.auth.get_user(username);
            const [existingUser] = await db.auth.get_user(username);
            console.log(existingUser)
            if (existingUser) {
                res.status(409).send('Username taken');
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(user_password, salt);

                const [registeredUser] = await db.auth.create_user([username, email, user_password, hash]);
                console.log(registeredUser)
                delete registeredUser.hash;

                // const user = registeredUser[0];
                req.session.user = registeredUser;
                res.status(201).send(req.session.user);
            }
        } catch (err) {
            console.log('Database error on register', err);
            res.sendStatus(500);
        }
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { username, user_password } = req.body;
        console.log(req.body);
        try {
            const [existingUser] = await db.auth.get_user(username);
            // const user = existingUser[0];
            if (!existingUser) {
                res.status(401).send('User not found. Please register as a new user before logging in.');
            }
            const isAuthenticated = bcrypt.compareSync(user_password, existingUser.hash);
            if (!isAuthenticated) {
                res.status(403).send('Incorrect password');
            }
            delete existingUser.hash

            req.session.user = existingUser;

            res.status(203).send(req.session.user);
        } catch (err) {
            console.log('Database error on login', err);
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getSession: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('User not Found')
        }
    }
};
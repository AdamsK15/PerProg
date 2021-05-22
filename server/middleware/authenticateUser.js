module.exports = {
    checkUser: async (req, res, next) => {
        if (req.session.user.admin) {
            next();
        } else {
            res.status(403).send('You are not logged in')
        }
    }
}

// module.exports = function (req, res, next) {
//     if (!req.session.user.admin) {
//         res.status(403).send('Cool your jets, Jimmy!')
//     } else {
//         next();
//     }
// }
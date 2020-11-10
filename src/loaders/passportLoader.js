const LocalStrategy = require('passport-local').Strategy;
const { userLogin, doneUserLogin } = require('../services/loginService');

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: 'No user with that email' });
    } else if (password === user.password) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Password incorrect' });
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  );
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;

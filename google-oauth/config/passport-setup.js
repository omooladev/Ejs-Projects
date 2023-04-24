const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/User");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_REDIRECT_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        const {
          id: googleId,
          displayName,
          _json: { email, picture: profilePicture },
        } = profile;
        user = await User.create({
          googleId,
          displayName,
          email,
          profilePicture,
        });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
      // console.log(profile);
      // return cb(null, user);
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
    }
  )
);

module.exports = passport;

// {
//   id: '108284799547527892232',
//   displayName: 'Omosuyi Olawole',
//   name: { familyName: 'Olawole', givenName: 'Omosuyi' },
//   emails: [ { value: 'omosuyiadewole2@gmail.com', verified: true } ],
//   photos: [
//     {
//       value: 'https://lh3.googleusercontent.com/a/AGNmyxYsEdBrt33KS_NGXpPjqClG5alcXzIOm03AGlom=s96-c'
//     }
//   ],
//   provider: 'google',
//   _raw: '{\n' +
//     '  "sub": "108284799547527892232",\n' +
//     '  "name": "Omosuyi Olawole",\n' +
//     '  "given_name": "Omosuyi",\n' +
//     '  "family_name": "Olawole",\n' +
//     '  "picture": "https://lh3.googleusercontent.com/a/AGNmyxYsEdBrt33KS_NGXpPjqClG5alcXzIOm03AGlom\\u003ds96-c",\n' +
//     '  "email": "omosuyiadewole2@gmail.com",\n' +
//     '  "email_verified": true,\n' +
//     '  "locale": "en"\n' +
//     '}',
//   _json: {
//     sub: '108284799547527892232',
//     name: 'Omosuyi Olawole',
//     given_name: 'Omosuyi',
//     family_name: 'Olawole',
//     picture: 'https://lh3.googleusercontent.com/a/AGNmyxYsEdBrt33KS_NGXpPjqClG5alcXzIOm03AGlom=s96-c',
//     email: 'omosuyiadewole2@gmail.com',
//     email_verified: true,
//     locale: 'en'
//   }
// }

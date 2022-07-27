const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')

const Player = require("../model/player");

require('dotenv').config()

var option = {}

option.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
option.secretOrKey = process.env.JWT_SECRET

passport.use(new JwtStrategy(option, (jwt_payload, done) => {
    Player.findById(jwt_payload.id, (err, player) => {
        if (err) return done(err, false)

        if(!player) return done(null, false)

        return done(null, player)
    })
}))
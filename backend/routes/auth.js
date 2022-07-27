const { compareSync, hashSync } = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const Player = require("../model/player");

router.use(bodyParser.json());

router.post('/login', async (req, res) => {

    const player = await Player.findOne({ email: req.body.email })

    if (!player) {
        return res.json({
            success: false,
            message: `Cannot find email ${req.body.email}`
        })
    }

    if (!compareSync(req.body.password, player.password)) {
        return res.json({
            success: false,
            message: `Incorrect password`
        })
    }

    const payload = {
        email: player.email,
        id: player._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

    return res.json({
        success: true,
        message: `Logged in`,
        player: payload,
        token: `Bearer ${token}`
    })
})

//register player
router.post("/register" ,async (req, res) => {
    if (await Player.findOne({ email: req.body.email })) {
        return res.json({ success: false, message: 'Email is already used' })
    }

    let player = new Player({
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        full_name: req.body.full_name,
        game_name: req.body.game_name,
        country: req.body.country
    });

    player = await player.save()

    return res.json({
        success: true,
        message: 'Player successfully registered',
        player: {
            id: player._id,
            email: player.email,
            password: player.password,
            full_name: player.full_name,
            game_name: player.game_name,
            country: player.country
        },

    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require('passport');
const restrictUser = require('../middleware/restrictUser')

require('../lib/passport')

const Player = require("../model/player");

router.use(bodyParser.json());

/*
* TODO
* add success status to return value
* add try catch
*/

router.get("/:id", restrictUser, async (req, res) => {
    return res.json(await Player.findById(req.params.id))
});

router.put("/:id", restrictUser, async (req, res) => {
    try {
        return res.json(await Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnOriginal: false,
            }
        ));
    } catch(e){
        console.log(e)
    }
});

module.exports = router;



const { Router } = require('express');
const Favorite = require('../models/Favorite');
const pool = require('../utils/pool');

module.exports = Router()

    .get('', async (req, res, next) => {
        Favorite
            .getUser(req)
            .then(data => res.send(data))
            .catch(next);
    })

    .post('', async (req, res, next) => {
        const { body, userId } = req;
        
        Favorite
            .insert(body, userId)
            .then(data => res.send(data))
            .catch(next);
    })

    // .get('/favorites', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next(err)
    //     }
    // })
const { Router } = require('express');
const Favorite = require('../models/Favorite');
const pool = require('../utils/pool');

module.exports = Router()

    .get('/favorites', async (req, res, next) => {
        try {

        } catch(err) {
            next(err)
        }
    })

    .post('/favorites', async (req, res, next) => {
        Favorite
            .insert(req.body)
            .then(data => res.send(data))
            .catch(next);
    })

    // .get('/favorites', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next(err)
    //     }
    // })
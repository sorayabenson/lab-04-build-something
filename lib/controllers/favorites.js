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
        try {
            const data = await Favorite.insert(req.body);

            res.send(data);
        } catch(err) {
            next(err)
        }
    })

    // .get('/favorites', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next(err)
    //     }
    // })
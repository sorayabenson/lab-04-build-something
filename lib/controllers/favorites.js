const { Router } = require('express');
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
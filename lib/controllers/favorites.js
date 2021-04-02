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

    .get('/:id', async (req, res, next) => {
            try {
                const data = await pool.query(`
                SELECT * FROM favorites
                WHERE id=$1`,
                [req.params.id]);

                res.send(data.rows[0]);
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
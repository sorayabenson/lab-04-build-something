const { Router } = require('express');
const Collection = require('../models/Collection');
const pool = require('../utils/pool');

module.exports = Router()
    .post('', async (req, res, next) => {
        try {
            const data = await pool.query(`
            INSERT INTO collections (
                name,
                user_id
            )
            VALUES ($1, $2)
            RETURNING *`,
            [
                req.body.name,
                req.userId
            ]);

            res.send(data.rows[0]);
        } catch(err) {
            next (err)
        }
    });

    // .post('', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next (err)
    //     }
    // });